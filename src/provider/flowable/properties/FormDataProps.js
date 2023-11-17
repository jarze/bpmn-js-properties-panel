import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { ListGroup } from '@bpmn-io/properties-panel';
import {
  getExtensionElementsList,
  addExtensionElements,
  removeExtensionElements,
} from '../../../utils/ExtensionElementsUtil';

import { createElement } from '../../../utils/ElementUtil';

import FormField from './FormField';

import { isElementSupport } from '../utils/PropertiesUtil';

const TAG = 'flowable:FormProperty';

export function FormDataProps({ element, injector }) {
  if (!isElementSupport(element, 'formpropertiespackage')) {
    return null;
  }

  const formFields = getFormFieldsList(element) || [];

  const bpmnFactory = injector.get('bpmnFactory'),
    translate = injector.get('translate'),
    commandStack = injector.get('commandStack');

  const items = formFields.map((formField, index) => {
    const id = element.id + '-formField-' + index;

    return {
      id,
      label: formField.get('id') || '',
      entries: FormField({
        idPrefix: id,
        element,
        formField,
      }),
      autoFocusEntry: id + '-formFieldID',
      remove: removeFactory({ commandStack, element, formField, element }),
    };
  });

  const group = {
    label: translate('Form Data'),
    id: 'FlowablePlatform__FormData',
    component: ListGroup,
    items,
    add: addFactory({ bpmnFactory, commandStack, element }),
    shouldSort: false,
  };

  return group;
}

function addFactory({ bpmnFactory, commandStack, element }) {
  const businessObject = getBusinessObject(element);

  return function (event) {
    event.stopPropagation();
    const formField = createElement(TAG, {}, undefined, bpmnFactory);
    addExtensionElements(
      element,
      businessObject,
      formField,
      bpmnFactory,
      commandStack
    );
  };
}

function removeFactory({ commandStack, element, formField }) {
  return function (event) {
    event.stopPropagation();
    removeExtensionElements(
      element,
      element.businessObject,
      [formField],
      commandStack
    );

    // const formData = getFormData(element),
    //   formFields = getFormFieldsList(element);

    // if (!formFields || !formFields.length) {
    //   return;
    // }

    // const values = without(formData.get('values'), formField);

    // if (values && values.length) {
    //   // update formData
    //   commandStack.execute('element.updateModdleProperties', {
    //     element,
    //     moddleElement: formData,
    //     properties: {
    //       values,
    //     },
    //   });
    // } else {
    //   commandStack.execute('element.updateModdleProperties', {
    //     element,
    //     moddleElement: element.businessObject,
    //     properties: { extensionElements: null },
    //   });
    // }
  };
}

// helper ///////////////////////////////

function getFormData(element) {
  const businessObject = getBusinessObject(element);
  let extensionElements = businessObject.get('extensionElements');
  return extensionElements;
}

function getFormFieldsList(element) {
  return getExtensionElementsList(element.businessObject, TAG);
}

const checkExtension = () => {};

function setEc(values, businessObject, bpmnFactory, commands) {
  if (values?.length) {
    let extensionElements = businessObject.get('extensionElements');
    if (!extensionElements) {
      extensionElements = createElement(
        'bpmn:ExtensionElements',
        { values: values },
        businessObject,
        bpmnFactory
      );
    }
    commands.push({
      cmd: 'element.updateModdleProperties',
      context: {
        element,
        moddleElement: extensionElements,
        properties: { values },
      },
    });
  } else {
    commands.push({
      cmd: 'element.updateModdleProperties',
      context: {
        element,
        moddleElement: businessObject,
        properties: { extensionElements: null },
      },
    });
  }
}
