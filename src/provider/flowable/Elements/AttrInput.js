import { useService } from '../../../hooks';
import { Prefix } from '../utils/PropertiesUtil';

import { TextFieldEntry } from '@bpmn-io/properties-panel';

export function PropertyComponent(props) {
  const { element, properties, componentType = TextFieldEntry } = props;
  const translate = useService('translate'),
    debounce = useService('debounceInput'),
    modeling = useService('modeling');

  const { key, id, title, description } = properties;
  const prefix = properties.prefix === false ? false : true;

  const attrId = prefix ? `${Prefix}${key}` : key;

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
    id: key || id,
    label: translate(title),
    tooltip: description && (
      <div>
        <p>{translate(description)}</p>
      </div>
    ),
    getValue,
    setValue,
    debounce,
  });
}
