import {
  TextFieldEntry,
  isTextFieldEntryEdited,
} from '@bpmn-io/properties-panel';
import { getPropertyComponent } from '../Elements/AttrInput';
import { isElementSupport } from '../utils/PropertiesUtil';

export function UserAssignmentProps(props) {
  const { element } = props;

  if (!isElementSupport(element, 'usertaskassignmentpackage')) {
    return [];
  }

  return [
    {
      id: 'assignee',
      component: getPropertyComponent(
        {
          key: 'assignee',
          title: 'Assignee',
        },
        TextFieldEntry
      ),
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'candidateGroups',
      component: getPropertyComponent(
        {
          key: 'candidateGroups',
          title: 'Candidate groups',
        },
        TextFieldEntry
      ),
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'candidateUsers',
      component: getPropertyComponent(
        {
          key: 'candidateUsers',
          title: 'Candidate users',
        },
        TextFieldEntry
      ),
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'dueDate',
      component: getPropertyComponent({
        key: 'dueDate',
        title: 'Due date',
        description:
          'The due date as an EL expression (e.g. ${someDate}) or an ISO date (e.g. 2015-06-26T09:54:00).',
      }),
    },
    {
      id: 'followUpDate',
      component: getPropertyComponent(
        {
          key: 'followUpDate',
          title: 'Follow up date',
          description:
            'The follow up date as an EL expression (e.g. ${someDate}) or an ' +
            'ISO date (e.g. 2015-06-26T09:54:00).',
        },
        TextFieldEntry
      ),
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'priority',
      component: getPropertyComponent(
        {
          key: 'priority',
          title: 'Priority',
        },
        TextFieldEntry
      ),
      isEdited: isTextFieldEntryEdited,
    },
  ];
}
