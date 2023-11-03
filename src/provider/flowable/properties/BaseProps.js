import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';

import { getEventDefinition } from '../../bpmn/utils/EventDefinitionUtil';

import { createElement } from '../../../utils/ElementUtil';

import { useService } from '../../../hooks';
import { isElementSupport } from '../utils/PropertiesUtil';

import {
  TextFieldEntry,
  isTextFieldEntryEdited,
  SelectEntry,
  isSelectEntryEdited,
  TextAreaEntry,
  isTextAreaEntryEdited,
} from '@bpmn-io/properties-panel';

/**
 * Defines condition properties for conditional sequence flow.
 * Cf. https://docs.camunda.org/manual/latest/reference/bpmn20/gateways/sequence-flow/
 */
export function ConditionProps(props, property) {
  const { element } = props;

  if (!property || !isElementSupport(element, property.name)) {
    return [];
  }

  const { properties } = property;
  const entries = [];

  for (let index = 0; index < properties.length; index++) {
    const item = properties[index];
    // 暂时处理string
    if (item.type === 'String') {
      entries.push({
        id: item.id,
        component: getPropertyComponent(item),
        isEdited: isTextFieldEntryEdited,
      });
    }
  }

  return entries;
}

// function Components(properties) {
//   switch (type) {
//     case 'String':
//       return (
//         <TextFieldEntry
//           element={element}
//           id={properties.id}
//           label={translate('Condition Expression')}
//           getValue={getValue}
//           setValue={setValue}
//           debounce={debounce}
//         />
//       );

//     default:
//       return (
//         <TextFieldEntry
//           element={element}
//           id={properties.id}
//           label={translate('Condition Expression')}
//           getValue={getValue}
//           setValue={setValue}
//           debounce={debounce}
//         />
//       );
//   }
// }

function getPropertyComponent(properties) {
  function PropertyComponent(props) {
    const { element } = props;
    const commandStack = useService('commandStack'),
      bpmnFactory = useService('bpmnFactory'),
      translate = useService('translate'),
      debounce = useService('debounceInput');

    const getValue = () => {
      return getConditionExpression(element).get('body');
    };

    const setValue = value => {
      if (value === '') {
        updateCondition(element, commandStack, undefined);
      } else {
        // (2) Create and set formalExpression element containing the conditionExpression
        const attributes = { body: '' };
        const formalExpressionElement = createFormalExpression(
          element,
          attributes,
          bpmnFactory
        );

        updateCondition(element, commandStack, formalExpressionElement);
      }
      // createElement(
      //   'camunda:In',
      //   {
      //     businessKey: DEFAULT_BUSINESS_KEY,
      //   },
      //   parent,
      //   bpmnFactory
      // );
      // const conditionExpression = createElement(
      //   'bpmn:FormalExpression',
      // 	{ body: value },
      //   is(element, 'bpmn:SequenceFlow')
      //     ? getBusinessObject(element)
      //     : getConditionalEventDefinition(element),
      //   bpmnFactory
      // );

      // updateCondition(element, commandStack, conditionExpression);
    };

    return (
      <TextFieldEntry
        element={element}
        id={properties.id}
        label={translate(properties.title)}
        getValue={getValue}
        setValue={setValue}
        debounce={debounce}
      />
    );
  }

  return PropertyComponent;
}

function ConditionType(props) {
  const { element } = props;

  const commandStack = useService('commandStack');
  const bpmnFactory = useService('bpmnFactory');
  const translate = useService('translate');

  const getValue = () => {
    return getConditionType(element);
  };

  const setValue = value => {
    // (1) Remove formalExpression if <none> is selected
    if (value === '') {
      updateCondition(element, commandStack, undefined);
    } else {
      // (2) Create and set formalExpression element containing the conditionExpression
      const attributes = {
        body: '',
      };
      const formalExpressionElement = createFormalExpression(
        element,
        attributes,
        bpmnFactory
      );

      updateCondition(element, commandStack, formalExpressionElement);
    }
  };

  const getOptions = () => [
    { value: '', label: translate('<none>') },
    { value: 'expression', label: translate('Expression') },
  ];

  return (
    <SelectEntry
      element={element}
      id='conditionType'
      label={translate('Type')}
      getValue={getValue}
      setValue={setValue}
      getOptions={getOptions}
    />
  );
}

function getConditionalEventDefinition(element) {
  if (!is(element, 'bpmn:Event')) {
    return false;
  }

  return getEventDefinition(element, 'bpmn:ConditionalEventDefinition');
}

function getConditionType(element) {
  const conditionExpression = getConditionExpression(element);

  if (!conditionExpression) {
    return '';
  } else {
    return 'expression';
  }
}

/**
 * getConditionExpression - get the body value of a condition expression for a given element
 *
 * @param  {ModdleElement} element
 *
 * @return {string|undefined}
 */
function getConditionExpression(element) {
  const businessObject = getBusinessObject(element);

  if (is(businessObject, 'bpmn:SequenceFlow')) {
    return businessObject.get('conditionExpression');
  } else if (getConditionalEventDefinition(businessObject)) {
    return getConditionalEventDefinition(businessObject).get('condition');
  }
}

function updateCondition(element, commandStack, condition = undefined) {
  if (is(element, 'bpmn:SequenceFlow')) {
    commandStack.execute('element.updateProperties', {
      element,
      properties: {
        conditionExpression: condition,
      },
    });
  } else {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement: getConditionalEventDefinition(element),
      properties: {
        condition,
      },
    });
  }
}

function createFormalExpression(parent, attributes, bpmnFactory) {
  return createElement(
    'bpmn:FormalExpression',
    attributes,
    is(parent, 'bpmn:SequenceFlow')
      ? getBusinessObject(parent)
      : getConditionalEventDefinition(parent),
    bpmnFactory
  );
}
