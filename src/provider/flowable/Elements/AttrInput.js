import { useService } from '../../../hooks';
import { Prefix } from '../utils/PropertiesUtil';

import { TextFieldEntry } from '@bpmn-io/properties-panel';

export function getPropertyComponent(
  properties,
  componentType = TextFieldEntry
) {
  function PropertyComponent(props) {
    const { element } = props;
    const translate = useService('translate'),
      debounce = useService('debounceInput'),
      modeling = useService('modeling');

    const attrId = `${Prefix}${properties.key}`;

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
      id: properties.id,
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

  return PropertyComponent;
}
