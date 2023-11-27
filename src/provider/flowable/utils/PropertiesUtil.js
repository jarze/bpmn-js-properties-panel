import bpmStencil from '../resource/stencilset_bpmn';
import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import {
  // getEventDefinition,
  getMessageEventDefinition,
  getLinkEventDefinition,
  // getCompensateEventDefinition,
  getErrorEventDefinition,
  getEscalationEventDefinition,
  getSignalEventDefinition,
  getTimerEventDefinition,
  getConditionalEventDefinition,
} from '../../../utils/EventDefinitionUtil';
import propertySet from '../resource/property_set';
import * as xmlConstants from './BpmnXMLConstants';
// import * as stencilConstants from './StencilConstants';

export const Prefix = 'flowable:';

let propertiesIdMap = {
  /** 到期时间 */
  duedatedefinition: 'dueDate',
};

for (const xmlC in xmlConstants) {
  const v = xmlConstants[xmlC];
  propertiesIdMap[v.toLowerCase()] = v;
}

bpmStencil.propertyPackages.forEach(i => {
  i.properties.forEach(j => {
    // 小写映射

    j.key = propertiesIdMap[j.id] || j.id;

    if (!propertiesIdMap[j.id]) {
      console.log(propertiesIdMap[j.id], j.id, '------------------');
    }
  });
});

// 组件类型定义map
export const stencilsMap = bpmStencil.stencils.reduce(
  (p, i) => ({ ...p, [i.id]: i }),
  {}
);

/** 属性定义map */
export const propertyPackagesMap = bpmStencil.propertyPackages
  .map(i => {
    const stencils = bpmStencil.stencils
      ? bpmStencil.stencils.filter(j => j.propertyPackages.includes(i.name))
      : [];
    i.stencils = stencils;
    return i;
  })
  .reduce((p, i) => ({ ...p, [i.name]: i }), {});

/**
 * isElementSupport - 判断组件是否支持
 *
 * @param  {ModdleElement} element
 * @param {propertyKey} string
 *
 * @return {boolean}
 */
export const isElementSupport = (element, propertyKey) => {
  const nodes = propertyPackagesMap[propertyKey].stencils.map(
    i => `bpmn:${i.id}`
  );
  return isAny(element, nodes);
};

export const stencilElement = elementName => {
  return elementSet[elementName];
};

const StartChecks = [
  [getTimerEventDefinition, 'Timer'],
  [getEscalationEventDefinition, 'Escalation'],
  [getSignalEventDefinition, 'Signal'],
  [getMessageEventDefinition, 'Message'],
  [getErrorEventDefinition, 'Error'],
  [getLinkEventDefinition, 'Link'],
  [getConditionalEventDefinition, 'Conditional'],
];

const checkEventDefinition = (check, name, prefix = 'Start', element) => {
  if (check(element)) {
    return `${prefix}${name}Event`;
  }
  return null;
};

export function stencilsTypeParse(element) {
  const type = element.type.split(':')[1];
  if (type === 'Process') {
    return 'BPMNDiagram';
  }
  if (isAny(element, ['bpmn:StartEvent', 'bpmn:EndEvent'])) {
    const prefix = is(element, 'bpmn:StartEvent') ? 'Start' : 'End';
    if (element.businessObject.eventDefinitions) {
      for (const item of StartChecks) {
        const name = checkEventDefinition(...item, prefix, element);
        if (name) {
          return name;
        }
      }
    }
    return `${prefix}NoneEvent`;
  } else {
    return type;
  }
}
export function getElementStencil(element) {
  if (!element) return {};
  console.log(element, '---------88888');
  const id = stencilsTypeParse(element);
  console.log(id, stencilsMap);
  return stencilsMap[id] || {};
}

/** flowable 定义属性转换多输入 */
export const properTransform = item => {
  const transformProperties = propertySet[item.id];
  if (transformProperties) {
    return transformProperties;
  }
  return null;
};