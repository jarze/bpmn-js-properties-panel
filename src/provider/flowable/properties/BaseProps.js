import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

import { useService } from '../../../hooks';
import {
  propertyPackagesMap,
  getElementStencil,
  properTransform,
} from '../utils/PropertiesUtil';

import { TextFieldEntry, Group } from '@bpmn-io/properties-panel'; // import { getElementComponent } from '../Elements/ElementInput';
import { pushPropertiesEntries, pushPropertyEntries } from './BaseAttrProps';
import { FormDataProps } from './FormDataProps';
import { ConditionProps } from './ConditionProps';

// 将基础已有的配置排除掉
const excludeBaseNames = [
  'process_idpackage',
  'overrideidpackage',
  'namepackage',
  'documentationpackage',
  'isexecutablepackage',
];

// 将一些不用的配置去掉
const excludeUnUseNames = [
  /** 基数(多实例) */
  'multiinstance_cardinalitypackage',
  /** 集合(多实例) */
  'multiinstance_collectionpackage',
  /** 元素变量(多实例) */
  'multiinstance_variablepackage',
  /** 完成条件(多实例) */
  'multiinstance_conditionpackage',
  'multiinstance_typepackage',
  /** 表单引用 */
  'formkeydefinitionpackage',
  'formreferencepackage',
];

const excludes = [...excludeBaseNames, ...excludeUnUseNames];

const CUSTOM_PROPERTIES = {
  formproperties: FormDataProps,
  conditionaleventcondition: ConditionProps,
  conditionsequenceflow: ConditionProps,
};

const CUSTOM_PROPERTIES_IDS = Object.keys(CUSTOM_PROPERTIES);

const checkCustom = (element, injector, item, entries = []) => {
  const DataProps = CUSTOM_PROPERTIES[item.id];
  if (DataProps) {
    const group = DataProps({ element, injector });
    group && entries.push(group);
  }
  return entries;
};

export function BaseProps(props) {
  const { element, injector } = props;
  const pts = getElementStencil(element);
  // const businessObject = getBusinessObject(element);
  // const eventDefinitions = businessObject.get('eventDefinitions') || [];
  const translate = injector.get('translate');

  const entries = [];

  for (const pt of pts.propertyPackages || []) {
    const property = propertyPackagesMap[pt];

    // 排除
    if (excludes.includes(pt)) {
      continue;
    }

    const { properties } = property;

    for (let index = 0; index < properties.length; index++) {
      const item = properties[index];
      let items = properTransform(item);
      if (items) {
        items = items.map(i => ({ ...item, ...i }));
        // flowable 配置项映射多个输入
        if (items.length > 1) {
          const itemEntries = [];
          items.forEach(i => {
            pushPropertyEntries(i, itemEntries);
          });
          entries.push({
            id: item.id,
            label: translate(item.title),
            tooltip: item.description && (
              <div>
                <p>{translate(item.description)}</p>
              </div>
            ),
            component: Group,
            entries: itemEntries,
          });
        } else {
          items.forEach(i => {
            pushPropertyEntries(i, entries);
          });
        }
        continue;
      } else if (CUSTOM_PROPERTIES_IDS.includes(item.id)) {
        // 自定义配置项组件
        checkCustom(element, injector, item, entries);
        continue;
      }
      pushPropertyEntries(item, entries);
    }
  }

  return entries;
}
