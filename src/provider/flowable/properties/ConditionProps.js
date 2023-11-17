import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { getEventDefinition } from '../../bpmn/utils/EventDefinitionUtil';
import { createElement } from '../../../utils/ElementUtil';
import { useService } from '../../../hooks';
import { isElementSupport } from '../utils/PropertiesUtil';

import {
  TextFieldEntry,
  isTextFieldEntryEdited,
  SelectEntry,
  isSelectEntryEdited,
  Group,
} from '@bpmn-io/properties-panel';

/**
 * Defines condition properties for conditional sequence flow.
 * Cf. https://docs.camunda.org/manual/latest/reference/bpmn20/gateways/sequence-flow/
 */
export function ConditionProps(props) {
  const { element, injector } = props;

  if (
    !(
      isElementSupport(element, 'conditionsequenceflowpackage') ||
      isElementSupport(element, 'conditionaleventpackage')
    ) &&
    !getConditionalEventDefinition(element)
  ) {
    return null;
  }

  const entries = [];

  entries.push({
    id: 'conditionType',
    component: ConditionType,
    isEdited: isSelectEntryEdited,
  });

  const conditionType = getConditionType(element);

  if (conditionType === 'expression') {
    entries.push({
      id: 'conditionExpression',
      component: ConditionExpression,
      isEdited: isTextFieldEntryEdited,
    });
  }

  const translate = injector.get('translate');

  const group = {
    label: translate('Condition'),
    id: 'Flowable__Condition',
    component: Group,
    entries,
  };
  return group;
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

function ConditionExpression(props) {
  const { element } = props;

  const commandStack = useService('commandStack'),
    bpmnFactory = useService('bpmnFactory'),
    translate = useService('translate'),
    debounce = useService('debounceInput');

  const getValue = () => {
    return getConditionExpression(element).get('body');
  };

  const setValue = value => {
    const conditionExpression = createFormalExpression(
      element,
      { body: value },
      bpmnFactory
    );

    updateCondition(element, commandStack, conditionExpression);
  };

  return (
    <TextFieldEntry
      element={element}
      id='conditionExpression'
      label={translate('Condition Expression')}
      getValue={getValue}
      setValue={setValue}
      debounce={debounce}
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
