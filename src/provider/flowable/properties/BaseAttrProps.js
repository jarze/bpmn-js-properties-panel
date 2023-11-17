import {
  propertyPackagesMap,
  getElementStencil,
} from '../utils/PropertiesUtil';

import {
  TextFieldEntry,
  isTextFieldEntryEdited,
  TextAreaEntry,
  isTextAreaEntryEdited,
  isCheckboxEntryEdited,
  CheckboxEntry,
} from '@bpmn-io/properties-panel';
import { PropertyComponent } from '../Elements/AttrInput';

const picks = [
  'formfieldvalidationpackage',
  'duedatedefinitionpackage',
  'usertaskassignmentpackage',
];

export function pushPropertyEntries(item, entries = []) {
  // 暂时处理string
  if (item.type === 'String') {
    entries.push({
      id: item.id,
      component: PropertyComponent,
      properties: item,
      componentType: TextFieldEntry,
      isEdited: isTextFieldEntryEdited,
    });
  } else if (item.type === 'Text') {
    entries.push({
      id: item.id,
      component: PropertyComponent,
      properties: item,
      componentType: TextAreaEntry,
      isEdited: isTextAreaEntryEdited,
    });
  } else if (item.type === 'Boolean') {
    entries.push({
      id: item.id,
      component: PropertyComponent,
      properties: item,
      componentType: CheckboxEntry,
      isEdited: isCheckboxEntryEdited,
    });
  } else {
    console.log('TODO: 000000', item.id);
  }
  return entries;
}

export function pushPropertiesEntries(pkgKey, entries = []) {
  const property = propertyPackagesMap[pkgKey];
  const { properties } = property;

  for (let index = 0; index < properties.length; index++) {
    const item = properties[index];
    pushPropertyEntries(item, entries);
  }
  return entries;
}

export function BaseAttrProps(props) {
  const { element } = props;

  const pts = getElementStencil(element);

  const entries = [];

  const pkgs = (pts.propertyPackages || []).filter(i => picks.includes(i));

  for (const pt of pkgs) {
    pushPropertiesEntries(pt, entries);
  }

  return entries;
}
