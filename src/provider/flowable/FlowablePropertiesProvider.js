import { Group, ListGroup } from '@bpmn-io/properties-panel';

import {
  FormDataProps,
  ConditionProps,
  BaseAttrProps,
  BaseProps,
} from './properties';
// import { propertyPackagesMap } from '../utils/PropertiesUtil';

function FlowGroup(element, injector) {
  const translate = injector.get('translate');

  const group = {
    label: translate('Flow'),
    id: 'flow',
    component: Group,
    entries: [...BaseProps({ element })],
  };

  if (group.entries.length) {
    return group;
  }

  return null;
}

// function FormGroup(element, injector) {
//   const translate = injector.get('translate');
//   const group = {
//     label: translate('Form'),
//     id: 'form',
//     component: Group,
//     entries: [...FormProps({ element })],
//   };

//   if (group.entries.length) {
//     return group;
//   }

//   return null;
// }

function FormDataGroup(element, injector) {
  const translate = injector.get('translate');
  const group = {
    label: translate('Form Data'),
    id: 'FlowablePlatform__FormData',
    component: ListGroup,
    ...FormDataProps({ element, injector }),
  };

  if (group.items) {
    return group;
  }

  return null;
}

function ConditionGroup(element, injector) {
  const translate = injector.get('translate');
  const group = {
    label: translate('Condition'),
    id: 'Flowable__Condition',
    component: Group,
    entries: [...ConditionProps({ element })],
  };

  if (group.entries.length) {
    return group;
  }

  return null;
}

function BaseAttrGroup(element, injector) {
  const translate = injector.get('translate');
  const group = {
    label: translate('Base Setting'),
    id: 'baseAttr',
    component: Group,
    entries: [...BaseAttrProps({ element })],
  };

  if (group.entries.length) {
    return group;
  }
  return null;
}

function getGroups(element, injector) {
  const groups = [
    // FormGroup(element, injector),
    ConditionGroup(element, injector),
    FormDataGroup(element, injector),
    BaseAttrGroup(element, injector),
    FlowGroup(element, injector),
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
