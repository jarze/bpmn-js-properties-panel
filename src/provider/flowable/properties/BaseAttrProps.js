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
import { getPropertyComponent } from '../Elements/AttrInput';

const picks = ['formfieldvalidationpackage'];

export function BaseAttrProps(props) {
  const { element } = props;

  const pts = getElementStencil(element);

  const entries = [];

  const pkgs = (pts.propertyPackages || []).filter(i => picks.includes(i));

  for (const pt of pkgs) {
    const property = propertyPackagesMap[pt];

    const { properties } = property;

    for (let index = 0; index < properties.length; index++) {
      const item = properties[index];

      // 暂时处理string
      if (item.type === 'String') {
        entries.push({
          id: item.id,
          component: getPropertyComponent(item, TextFieldEntry),
          isEdited: isTextFieldEntryEdited,
        });
      } else if (item.type === 'Text') {
        entries.push({
          id: item.id,
          component: getPropertyComponent(item, TextAreaEntry),
          isEdited: isTextAreaEntryEdited,
        });
      } else if (item.type === 'Boolean') {
        entries.push({
          id: item.id,
          component: getPropertyComponent(item, CheckboxEntry),
          isEdited: isCheckboxEntryEdited,
        });
      }
    }
  }

  return entries;
}
