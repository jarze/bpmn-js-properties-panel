export default {
  name: 'Flowable',
  uri: 'http://flowable.org/bpmn',
  prefix: 'flowable',
  xml: {
    tagAlias: 'lowerCase',
  },
  associations: [],
  types: [
    {
      name: 'FormProperty',
      superClass: ['Element'],
      properties: [
        {
          name: 'id',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'label',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'type',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'datePattern',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'default',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'required',
          type: 'Boolean',
          isAttr: true,
        },
        {
          name: 'readable',
          type: 'Boolean',
          isAttr: true,
        },
        {
          name: 'writable',
          type: 'Boolean',
          isAttr: true,
        },
        {
          name: 'checkbox',
          type: 'Boolean',
          isAttr: true,
        },
        {
          name: 'properties',
          type: 'Properties',
        },
        {
          name: 'validation',
          type: 'Validation',
        },
        {
          name: 'values',
          type: 'Value',
          isMany: true,
        },
      ],
    },
    {
      name: 'InputOutputParameterDefinition',
      isAbstract: true,
    },
    {
      name: 'Value',
      superClass: ['InputOutputParameterDefinition'],
      properties: [
        {
          name: 'id',
          isAttr: true,
          type: 'String',
        },
        {
          name: 'name',
          isAttr: true,
          type: 'String',
        },
        {
          name: 'value',
          isBody: true,
          type: 'String',
        },
      ],
    },
    {
      name: 'Validation',
      superClass: ['Element'],
      properties: [
        {
          name: 'constraints',
          type: 'Constraint',
          isMany: true,
        },
      ],
    },
    {
      name: 'Constraint',
      superClass: ['Element'],
      properties: [
        {
          name: 'name',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'config',
          type: 'String',
          isAttr: true,
        },
      ],
    },
    {
      name: 'Properties',
      superClass: ['Element'],
      meta: {
        allowedIn: ['*'],
      },
      properties: [
        {
          name: 'values',
          type: 'Property',
          isMany: true,
        },
      ],
    },
    {
      name: 'Property',
      superClass: ['Element'],
      properties: [
        {
          name: 'id',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'name',
          type: 'String',
          isAttr: true,
        },
        {
          name: 'value',
          type: 'String',
          isAttr: true,
        },
      ],
    },
  ],
  emumerations: [],
};
