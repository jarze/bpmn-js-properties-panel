import { useService } from '../../../hooks';
import { Prefix } from '../utils/PropertiesUtil';

import { TextFieldEntry } from '@bpmn-io/properties-panel';

export function PropertyComponent(props) {
  const {
    element,
    properties,
    componentType = TextFieldEntry,
    prefix = true,
  } = props;
  const translate = useService('translate'),
    debounce = useService('debounceInput'),
    modeling = useService('modeling');

  const attrId = prefix ? `${Prefix}${properties.key}` : properties.key;

  const getValue = element => {
    return element.businessObject.get(attrId);
  };
  const setValue = (value, error) => {
    modeling.updateProperties(element, {
      [attrId]: value,
    });
  };

  return componentType({
    element,
    id: properties.key || properties.id,
    label: translate(properties.title),
    tooltip: properties.description && (
      <div>
        <p>{translate(properties.description)}</p>
      </div>
    ),
    getValue,
    setValue,
    debounce,
  });
}
