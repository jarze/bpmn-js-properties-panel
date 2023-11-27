export default {
  // documentation: [
  //   {
  //     elementName: 'documentation',
  //     valueKey: 'text',
  //     elementId: 'bpmn:Documentation',
  //   },
  // ],
  // conditionExpression: [
  //   {
  //     elementName: 'conditionExpression',
  //     valueKey: 'body',
  //     elementId: 'bpmn:FormalExpression',
  //   },
  // ],

  // conditionaleventcondition: [
  //   {
  //     element: {
  //       elementName: 'eventDefinitions',
  //       valueKey: 'condition',
  //       elementId: 'bpmn:ConditionalEventDefinition',
  //     },
  //   },
  // ],

  // conditionsequenceflow: [
  //   {
  //     element: {
  //       elementName: 'conditionExpression',
  //       valueKey: 'body',
  //       elementId: 'bpmn:FormalExpression',
  //     },
  //   },
  // ],

  usertaskassignment: [
    { key: 'assignee', type: 'String', title: 'Assignee' },
    { key: 'candidateUsers', type: 'String', title: 'Candidate users' },
    { key: 'candidateGroups', type: 'String', title: 'Candidate groups' },
    {
      key: 'followUpDate',
      type: 'String',
      title: 'Follow up date',
      description:
        'The follow up date as an EL expression (e.g. ${someDate}) or an ' +
        'ISO date (e.g. 2015-06-26T09:54:00).',
    },
    {
      key: 'priority',
      type: 'String',
      title: 'Priority',
    },
  ],
  duedatedefinition: [
    {
      key: 'dueDate',
      type: 'String',
      // title: 'Due date',
      // description:
      //   'The due date as an EL expression (e.g. ${someDate}) or an ISO date (e.g. 2015-06-26T09:54:00).',
    },
  ],
  process_potentialstarteruser: [
    { key: 'candidateStarterUsers', type: 'String' },
  ],
  process_potentialstartergroup: [
    { key: 'candidateStarterGroups', type: 'String' },
  ],
  asynchronousdefinition: [{ key: 'async', type: 'Boolean' }],
  prioritydefinition: [{ key: 'priority', type: 'String' }],
  categorydefinition: [{ key: 'category', type: 'String' }],
  scriptautostorevariables: [{ key: 'autoStoreVariables', type: 'Boolean' }],
  isforcompensation: [
    { key: 'isForCompensation', type: 'Boolean', prefix: false },
  ],
  exclusivedefinition: [{ key: 'exclusive', type: 'Boolean' }],
  iseagerexecutionfetch: [{ key: 'isEagerExecutionFetching', type: 'Boolean' }],
  scriptformat: [{ key: 'scriptFormat', type: 'String', prefix: false }],
  scripttext: [{ key: 'script', type: 'Text', prefix: false }],
};
