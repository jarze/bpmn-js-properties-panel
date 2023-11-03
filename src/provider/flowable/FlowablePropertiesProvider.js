import { Group } from '@bpmn-io/properties-panel';

import { FormProps, ConditionProps } from './properties';

function FormGroup(element, injector) {
  const translate = injector.get('translate');
  const group = {
    label: translate('Form'),
    id: 'form',
    component: Group,
    entries: [...FormProps({ element })],
  };

  if (group.entries.length) {
    return group;
  }

  return null;
}

function ConditionGroup(element, injector) {
  const translate = injector.get('translate');
  const group = {
    label: translate('Condition'),
    id: 'CamundaPlatform__Condition',
    component: Group,
    entries: [...ConditionProps({ element })],
  };

  if (group.entries.length) {
    return group;
  }

  return null;
}

function getGroups(element, injector) {
  const groups = [
    FormGroup(element, injector),
    ConditionGroup(element, injector),
  ];

  // contract: if a group returns null, it should not be displayed at all
  return groups.filter(group => group !== null);
}

export default class FlowablePropertiesProvider {
  constructor(propertiesPanel, injector) {
    propertiesPanel.registerProvider(this);
    this._injector = injector;
  }

  getGroups(element) {
    return groups => {
      groups = groups.concat(getGroups(element, this._injector));
      return groups;
    };
  }
}

FlowablePropertiesProvider.$inject = ['propertiesPanel', 'injector'];
