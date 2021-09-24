import List from '@bpmn-io/properties-panel/lib/components/entries/List';
import Simple from '@bpmn-io/properties-panel/lib/components/entries/Simple';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

import {
  useService
} from '../../../hooks';

import {
  createElement
} from '../../../utils/ElementUtil';


export function ListProps(props) {
  const {
    idPrefix,
    element,
    parameter
  } = props;

  const bpmnFactory = useService('bpmnFactory');
  const commandStack = useService('commandStack');
  const translate = useService('translate');

  const list = parameter.get('definition');
  const items = list.get('items');

  function renderItem(item, index) {
    const itemId = `${idPrefix}-listItem-${index}`;

    return (
      <ListItem
        idPrefix={ itemId }
        element={ element }
        item={ item }
      />
    );
  }

  function addItem() {
    commandStack.execute('properties-panel.update-businessobject-list', {
      element: element,
      currentObject: list,
      objectsToAdd: [ createElement('camunda:Value', {}, parameter, bpmnFactory) ],
      propertyName: 'items'
    });
  }

  function removeItem(item) {
    commandStack.execute('properties-panel.update-businessobject-list', {
      element: element,
      currentObject: list,
      objectsToRemove: [ item ],
      propertyName: 'items'
    });
  }

  function compareFn(item, anotherItem) {
    const [ value = '', anotherValue = '' ] = [ item.value, anotherItem.value ];

    return value === anotherValue ? 0 : value > anotherValue ? 1 : -1;
  }

  return List({
    element,
    autoFocusEntry: true,
    compareFn,
    id: idPrefix + '-list',
    items,
    label: translate('List values'),
    onAdd: addItem,
    onRemove: removeItem,
    renderItem
  });
}

function ListItem(props) {
  const {
    idPrefix,
    element,
    item
  } = props;

  const commandStack = useService('commandStack');
  const translate = useService('translate');

  const definitionLabels = {
    'camunda:Map': translate('Map'),
    'camunda:List': translate('List'),
    'camunda:Script': translate('Script')
  };

  const getValue = () => {
    if (isDefinitionType(item)) {
      return definitionLabels[item.$type];
    }

    return item.get('value');
  };

  const setValue = (value) => {
    commandStack.execute('properties-panel.update-businessobject', {
      element,
      businessObject: item,
      properties: {
        value
      }
    });
  };

  return ListValue({
    id: idPrefix + '-value',
    disabled: isDefinitionType(item),
    getValue,
    setValue
  });
}

function ListValue(props) {
  const {
    id,
    disabled,
    getValue,
    setValue
  } = props;

  const debounce = useService('debounceInput', true);

  return (
    <Simple
      id={ id }
      getValue={ getValue }
      setValue={ setValue }
      disabled={ disabled }
      debounce={ debounce } />
  );
}

// helper //////////////////////

function isScript(element) {
  return is(element, 'camunda:Script');
}

function isList(element) {
  return is(element, 'camunda:List');
}

function isMap(element) {
  return is(element, 'camunda:Map');
}

function isDefinitionType(element) {
  return isScript(element) || isList(element) || isMap(element);
}