import {
  TextFieldEntry,
  isTextFieldEntryEdited,
} from '@bpmn-io/properties-panel';
import { PropertyComponent } from '../Elements/AttrInput';
import { isElementSupport } from '../utils/PropertiesUtil';

export function UserAssignmentProps(props) {
  const { element } = props;

  if (!isElementSupport(element, 'usertaskassignmentpackage')) {
    return [];
  }

  return [
    {
      id: 'assignee',
      component: PropertyComponent,
      properties: { key: 'assignee', title: 'Assignee' },
      componentType: TextFieldEntry,
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'candidateGroups',
      component: PropertyComponent,
      properties: { key: 'candidateGroups', title: 'Candidate groups' },
      componentType: TextFieldEntry,
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'candidateUsers',
      component: PropertyComponent,
      properties: { key: 'candidateUsers', title: 'Candidate users' },
      componentType: TextFieldEntry,
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'dueDate',
      component: PropertyComponent,
      componentType: TextFieldEntry,
      properties: {
        key: 'dueDate',
        title: 'Due date',
        description:
          'The due date as an EL expression (e.g. ${someDate}) or an ISO date (e.g. 2015-06-26T09:54:00).',
      },
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'followUpDate',
      component: PropertyComponent,
      componentType: TextFieldEntry,
      properties: {
        key: 'followUpDate',
        title: 'Follow up date',
        description:
          'The follow up date as an EL expression (e.g. ${someDate}) or an ' +
          'ISO date (e.g. 2015-06-26T09:54:00).',
      },
      isEdited: isTextFieldEntryEdited,
    },
    {
      id: 'priority',
      component: PropertyComponent,
      properties: { key: 'priority', title: 'Priority' },
      componentType: TextFieldEntry,
      isEdited: isTextFieldEntryEdited,
    },
  ];
}
