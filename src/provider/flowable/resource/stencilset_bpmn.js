export default {
  title: 'BPMN.TITLE',
  namespace: 'http://b3mn.org/stencilset/bpmn2.0#',
  description: 'BPMN.DESCRIPTION',
  propertyPackages: [
    {
      name: 'process_idpackage',
      properties: [
        {
          id: 'process_id',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.PROCESS_IDPACKAGE.PROCESS_ID.TITLE',
          value: 'process',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_IDPACKAGE.PROCESS_ID.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'overrideidpackage',
      properties: [
        {
          id: 'overrideid',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.OVERRIDEIDPACKAGE.OVERRIDEID.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.OVERRIDEIDPACKAGE.OVERRIDEID.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'namepackage',
      properties: [
        {
          id: 'name',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.NAMEPACKAGE.NAME.TITLE',
          value: '',
          description: 'BPMN.PROPERTYPACKAGES.NAMEPACKAGE.NAME.DESCRIPTION',
          popular: true,
          refToView: 'text_name',
        },
      ],
    },
    {
      name: 'documentationpackage',
      properties: [
        {
          id: 'documentation',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.DOCUMENTATIONPACKAGE.DOCUMENTATION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.DOCUMENTATIONPACKAGE.DOCUMENTATION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'categorypackage',
      properties: [
        {
          id: 'categorydefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CATEGORYPACKAGE.CATEGORYDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CATEGORYPACKAGE.CATEGORYDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_authorpackage',
      properties: [
        {
          id: 'process_author',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_AUTHORPACKAGE.PROCESS_AUTHOR.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_AUTHORPACKAGE.PROCESS_AUTHOR.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_versionpackage',
      properties: [
        {
          id: 'process_version',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_VERSIONPACKAGE.PROCESS_VERSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_VERSIONPACKAGE.PROCESS_VERSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_historylevelpackage',
      properties: [
        {
          id: 'process_historylevel',
          type: 'flowable-processhistorylevel',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_HISTORYLEVELPACKAGE.PROCESS_HISTORYLEVEL.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_HISTORYLEVELPACKAGE.PROCESS_HISTORYLEVEL.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'isexecutablepackage',
      properties: [
        {
          id: 'isexecutable',
          type: 'Boolean',
          title: 'BPMN.PROPERTYPACKAGES.ISEXECUTABLEPACKAGE.ISEXECUTABLE.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.ISEXECUTABLEPACKAGE.ISEXECUTABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_potentialstarteruserpackage',
      properties: [
        {
          id: 'process_potentialstarteruser',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_POTENTIALSTARTERUSERPACKAGE.PROCESS_POTENTIALSTARTERUSER.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_POTENTIALSTARTERUSERPACKAGE.PROCESS_POTENTIALSTARTERUSER.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_potentialstartergrouppackage',
      properties: [
        {
          id: 'process_potentialstartergroup',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_POTENTIALSTARTERGROUPPACKAGE.PROCESS_POTENTIALSTARTERGROUP.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_POTENTIALSTARTERGROUPPACKAGE.PROCESS_POTENTIALSTARTERGROUP.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_namespacepackage',
      properties: [
        {
          id: 'process_namespace',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_NAMESPACEPACKAGE.PROCESS_NAMESPACE.TITLE',
          value: 'http://www.flowable.org/processdef',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_NAMESPACEPACKAGE.PROCESS_NAMESPACE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'process_iseagerexecutionfetchpackage',
      properties: [
        {
          id: 'iseagerexecutionfetch',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.PROCESS_ISEAGEREXECUTIONFETCHPACKAGE.ISEAGEREXECUTIONFETCH.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.PROCESS_ISEAGEREXECUTIONFETCHPACKAGE.ISEAGEREXECUTIONFETCH.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'asynchronousdefinitionpackage',
      properties: [
        {
          id: 'asynchronousdefinition',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.ASYNCHRONOUSDEFINITIONPACKAGE.ASYNCHRONOUSDEFINITION.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.ASYNCHRONOUSDEFINITIONPACKAGE.ASYNCHRONOUSDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'datapropertiespackage',
      properties: [
        {
          id: 'dataproperties',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.DATAPROPERTIESPACKAGE.DATAPROPERTIES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.DATAPROPERTIESPACKAGE.DATAPROPERTIES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'exclusivedefinitionpackage',
      properties: [
        {
          id: 'exclusivedefinition',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.EXCLUSIVEDEFINITIONPACKAGE.EXCLUSIVEDEFINITION.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.EXCLUSIVEDEFINITIONPACKAGE.EXCLUSIVEDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'executionlistenerspackage',
      properties: [
        {
          id: 'executionlisteners',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.EXECUTIONLISTENERSPACKAGE.EXECUTIONLISTENERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EXECUTIONLISTENERSPACKAGE.EXECUTIONLISTENERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'tasklistenerspackage',
      properties: [
        {
          id: 'tasklisteners',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.TASKLISTENERSPACKAGE.TASKLISTENERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TASKLISTENERSPACKAGE.TASKLISTENERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventlistenerspackage',
      properties: [
        {
          id: 'eventlisteners',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTLISTENERSPACKAGE.EVENTLISTENERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTLISTENERSPACKAGE.EVENTLISTENERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'usertaskassignmentpackage',
      properties: [
        {
          id: 'usertaskassignment',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.USERTASKASSIGNMENTPACKAGE.USERTASKASSIGNMENT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.USERTASKASSIGNMENTPACKAGE.USERTASKASSIGNMENT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'taskidvariablenamepackage',
      properties: [
        {
          id: 'taskidvariablename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.TASKIDVARIABLENAMEPACKAGE.TASKIDVARIABLENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TASKIDVARIABLENAMEPACKAGE.TASKIDVARIABLENAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'formpropertiespackage',
      properties: [
        {
          id: 'formproperties',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.FORMPROPERTIESPACKAGE.FORMPROPERTIES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.FORMPROPERTIESPACKAGE.FORMPROPERTIES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'formkeydefinitionpackage',
      properties: [
        {
          id: 'formkeydefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.FORMKEYDEFINITIONPACKAGE.FORMKEYDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.FORMKEYDEFINITIONPACKAGE.FORMKEYDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'formfieldvalidationpackage',
      properties: [
        {
          id: 'formfieldvalidation',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.FORMFIELDVALIDATIONPACKAGE.FORMFIELDVALIDATION.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.FORMFIELDVALIDATIONPACKAGE.FORMFIELDVALIDATION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'duedatedefinitionpackage',
      properties: [
        {
          id: 'duedatedefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.DUEDATEDEFINITIONPACKAGE.DUEDATEDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.DUEDATEDEFINITIONPACKAGE.DUEDATEDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'prioritydefinitionpackage',
      properties: [
        {
          id: 'prioritydefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.PRIORITYDEFINITIONPACKAGE.PRIORITYDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.PRIORITYDEFINITIONPACKAGE.PRIORITYDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskclasspackage',
      properties: [
        {
          id: 'servicetaskclass',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKCLASSPACKAGE.SERVICETASKCLASS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKCLASSPACKAGE.SERVICETASKCLASS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskexpressionpackage',
      properties: [
        {
          id: 'servicetaskexpression',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKEXPRESSIONPACKAGE.SERVICETASKEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKEXPRESSIONPACKAGE.SERVICETASKEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskdelegateexpressionpackage',
      properties: [
        {
          id: 'servicetaskdelegateexpression',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKDELEGATEEXPRESSIONPACKAGE.SERVICETASKDELEGATEEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKDELEGATEEXPRESSIONPACKAGE.SERVICETASKDELEGATEEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskfailedjobretrytimecyclepackage',
      properties: [
        {
          id: 'servicetaskfailedjobretrytimecycle',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKFAILEDJOBRETRYTIMECYCLEPACKAGE.SERVICETASKFAILEDJOBRETRYTIMECYCLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKFAILEDJOBRETRYTIMECYCLEPACKAGE.SERVICETASKFAILEDJOBRETRYTIMECYCLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskfieldspackage',
      properties: [
        {
          id: 'servicetaskfields',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKFIELDSPACKAGE.SERVICETASKFIELDS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKFIELDSPACKAGE.SERVICETASKFIELDS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskexceptionspackage',
      properties: [
        {
          id: 'servicetaskexceptions',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKEXCEPTIONSPACKAGE.SERVICETASKEXCEPTIONS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKEXCEPTIONSPACKAGE.SERVICETASKEXCEPTIONS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskresultvariablepackage',
      properties: [
        {
          id: 'servicetaskresultvariable',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKRESULTVARIABLEPACKAGE.SERVICETASKRESULTVARIABLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKRESULTVARIABLEPACKAGE.SERVICETASKRESULTVARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskresultvariableUseLocalScopepackage',
      properties: [
        {
          id: 'servicetaskUseLocalScopeForResultVariable',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKRESULTVARIABLEPACKAGE.SERVICETASKUSELOCALSCOPEFORRESULTVARIABLE.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKRESULTVARIABLEPACKAGE.SERVICETASKUSELOCALSCOPEFORRESULTVARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetasktriggerablepackage',
      properties: [
        {
          id: 'servicetasktriggerable',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKTRIGGERABLEPACKAGE.SERVICETASKTRIGGERABLE.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKTRIGGERABLEPACKAGE.SERVICETASKTRIGGERABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'servicetaskstoreresultvariabletransientpackage',
      properties: [
        {
          id: 'servicetaskstoreresultvariabletransient',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.SERVICETASKSTORERESULTVARIABLETRANSIENTPACKAGE.SERVICETASKSTORERESULTVARIABLETRANSIENT.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.SERVICETASKSTORERESULTVARIABLETRANSIENTPACKAGE.SERVICETASKSTORERESULTVARIABLETRANSIENT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'scriptformatpackage',
      properties: [
        {
          id: 'scriptformat',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.SCRIPTFORMATPACKAGE.SCRIPTFORMAT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SCRIPTFORMATPACKAGE.SCRIPTFORMAT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'scripttextpackage',
      properties: [
        {
          id: 'scripttext',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SCRIPTTEXTPACKAGE.SCRIPTTEXT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SCRIPTTEXTPACKAGE.SCRIPTTEXT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'scriptautostorevariablespackage',
      properties: [
        {
          id: 'scriptautostorevariables',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.SCRIPTAUTOSTOREVARIABLESPACKAGE.SCRIPTAUTOSTOREVARIABLES.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.SCRIPTAUTOSTOREVARIABLESPACKAGE.SCRIPTAUTOSTOREVARIABLES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellcommandpackage',
      properties: [
        {
          id: 'shellcommand',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.SHELLCOMMANDPACKAGE.SHELLCOMMAND.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLCOMMANDPACKAGE.SHELLCOMMAND.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellarg1package',
      properties: [
        {
          id: 'shellarg1',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLARG1PACKAGE.SHELLARG1.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLARG1PACKAGE.SHELLARG1.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellarg2package',
      properties: [
        {
          id: 'shellarg2',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLARG2PACKAGE.SHELLARG2.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLARG2PACKAGE.SHELLARG2.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellarg3package',
      properties: [
        {
          id: 'shellarg3',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLARG3PACKAGE.SHELLARG3.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLARG3PACKAGE.SHELLARG3.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellarg4package',
      properties: [
        {
          id: 'shellarg4',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLARG4PACKAGE.SHELLARG4.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLARG4PACKAGE.SHELLARG4.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellarg5package',
      properties: [
        {
          id: 'shellarg5',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLARG5PACKAGE.SHELLARG5.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLARG5PACKAGE.SHELLARG5.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellwaitpackage',
      properties: [
        {
          id: 'shellwait',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.SHELLWAITPACKAGE.SHELLWAIT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLWAITPACKAGE.SHELLWAIT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shelloutputvariablepackage',
      properties: [
        {
          id: 'shelloutputvariable',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SHELLOUTPUTVARIABLEPACKAGE.SHELLOUTPUTVARIABLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLOUTPUTVARIABLEPACKAGE.SHELLOUTPUTVARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellerrorcodevariablepackage',
      properties: [
        {
          id: 'shellerrorcodevariable',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SHELLERRORCODEVARIABLEPACKAGE.SHELLERRORCODEVARIABLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLERRORCODEVARIABLEPACKAGE.SHELLERRORCODEVARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellredirecterrorpackage',
      properties: [
        {
          id: 'shellredirecterror',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SHELLREDIRECTERRORPACKAGE.SHELLREDIRECTERROR.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLREDIRECTERRORPACKAGE.SHELLREDIRECTERROR.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shellcleanenvpackage',
      properties: [
        {
          id: 'shellcleanenv',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SHELLCLEANENVPACKAGE.SHELLCLEANENV.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLCLEANENVPACKAGE.SHELLCLEANENV.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'shelldirectorypackage',
      properties: [
        {
          id: 'shelldirectory',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.SHELLDIRECTORYPACKAGE.SHELLDIRECTORY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SHELLDIRECTORYPACKAGE.SHELLDIRECTORY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'ruletask_rulespackage',
      properties: [
        {
          id: 'ruletask_rules',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.RULETASK_RULESPACKAGE.RULETASK_RULES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.RULETASK_RULESPACKAGE.RULETASK_RULES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'ruletask_variables_inputpackage',
      properties: [
        {
          id: 'ruletask_variables_input',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.RULETASK_VARIABLES_INPUTPACKAGE.RULETASK_VARIABLES_INPUT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.RULETASK_VARIABLES_INPUTPACKAGE.RULETASK_VARIABLES_INPUT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'ruletask_excludepackage',
      properties: [
        {
          id: 'ruletask_exclude',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.RULETASK_EXCLUDEPACKAGE.RULETASK_EXCLUDE.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.RULETASK_EXCLUDEPACKAGE.RULETASK_EXCLUDE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'ruletask_resultpackage',
      properties: [
        {
          id: 'ruletask_result',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.RULETASK_RESULTPACKAGE.RULETASK_RESULT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.RULETASK_RESULTPACKAGE.RULETASK_RESULT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskheaderspackage',
      properties: [
        {
          id: 'mailtaskheaders',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.MAILTASKHEADERSPACKAGE.MAILTASKHEADERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKHEADERSPACKAGE.MAILTASKHEADERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtasktopackage',
      properties: [
        {
          id: 'mailtaskto',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKTOPACKAGE.MAILTASKTO.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKTOPACKAGE.MAILTASKTO.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskfrompackage',
      properties: [
        {
          id: 'mailtaskfrom',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKFROMPACKAGE.MAILTASKFROM.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKFROMPACKAGE.MAILTASKFROM.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtasksubjectpackage',
      properties: [
        {
          id: 'mailtasksubject',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.MAILTASKSUBJECTPACKAGE.MAILTASKSUBJECT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKSUBJECTPACKAGE.MAILTASKSUBJECT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskccpackage',
      properties: [
        {
          id: 'mailtaskcc',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKCCPACKAGE.MAILTASKCC.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKCCPACKAGE.MAILTASKCC.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskbccpackage',
      properties: [
        {
          id: 'mailtaskbcc',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKBCCPACKAGE.MAILTASKBCC.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKBCCPACKAGE.MAILTASKBCC.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtasktextpackage',
      properties: [
        {
          id: 'mailtasktext',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKTEXTPACKAGE.MAILTASKTEXT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKTEXTPACKAGE.MAILTASKTEXT.DESCRIPTION',
          popular: true,
        },
        {
          id: 'mailtasktextvar',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MAILTASKTEXTPACKAGE.MAILTASKTEXTVAR.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKTEXTPACKAGE.MAILTASKTEXTVAR.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskhtmlpackage',
      properties: [
        {
          id: 'mailtaskhtml',
          type: 'Text',
          title: 'BPMN.PROPERTYPACKAGES.MAILTASKHTMLPACKAGE.MAILTASKHTML.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKHTMLPACKAGE.MAILTASKHTML.DESCRIPTION',
          popular: true,
        },
        {
          id: 'mailtaskhtmlVar',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MAILTASKHTMLPACKAGE.MAILTASKHTMLVAR.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKHTMLPACKAGE.MAILTASKHTMLVAR.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'mailtaskcharsetpackage',
      properties: [
        {
          id: 'mailtaskcharset',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MAILTASKCHARSETPACKAGE.MAILTASKCHARSET.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MAILTASKCHARSETPACKAGE.MAILTASKCHARSET.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequestmethodpackage',
      properties: [
        {
          id: 'httptaskrequestmethod',
          type: 'flowable-http-request-method',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTMETHODPACKAGE.HTTPTASKREQUESTMETHOD.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTMETHODPACKAGE.HTTPTASKREQUESTMETHOD.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequesturlpackage',
      properties: [
        {
          id: 'httptaskrequesturl',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTURLPACKAGE.HTTPTASKREQUESTURL.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTURLPACKAGE.HTTPTASKREQUESTURL.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequestheaderspackage',
      properties: [
        {
          id: 'httptaskrequestheaders',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTHEADERSPACKAGE.HTTPTASKREQUESTHEADERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTHEADERSPACKAGE.HTTPTASKREQUESTHEADERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequestbodypackage',
      properties: [
        {
          id: 'httptaskrequestbody',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTBODYPACKAGE.HTTPTASKREQUESTBODYPACKAGE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTBODYPACKAGE.HTTPTASKREQUESTBODYPACKAGE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequestbodyencodingpackage',
      properties: [
        {
          id: 'httptaskrequestbodyencoding',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTBODYENCODINGPACKAGE.HTTPTASKREQUESTBODYENCODING.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTBODYENCODINGPACKAGE.HTTPTASKREQUESTBODYENCODING.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskrequesttimeoutpackage',
      properties: [
        {
          id: 'httptaskrequesttimeout',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTTIMEOUTPACKAGE.HTTPTASKREQUESTTIMEOUT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKREQUESTTIMEOUTPACKAGE.HTTPTASKREQUESTTIMEOUT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskdisallowredirectspackage',
      properties: [
        {
          id: 'httptaskdisallowredirects',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKDISALLOWREDIRECTSPACKAGE.HTTPTASKDISALLOWREDIRECTS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKDISALLOWREDIRECTSPACKAGE.HTTPTASKDISALLOWREDIRECTS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskfailstatuscodespackage',
      properties: [
        {
          id: 'httptaskfailstatuscodes',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKFAILSTATUSCODESPACKAGE.HTTPTASKFAILSTATUSCODES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKFAILSTATUSCODESPACKAGE.HTTPTASKFAILSTATUSCODES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskhandlestatuscodespackage',
      properties: [
        {
          id: 'httptaskhandlestatuscodes',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKHANDLESTATUSCODESPACKAGE.HTTPTASKHANDLESTATUSCODES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKHANDLESTATUSCODESPACKAGE.HTTPTASKHANDLESTATUSCODES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskignoreexceptionpackage',
      properties: [
        {
          id: 'httptaskignoreexception',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKIGNOREEXCEPTIONPACKAGE.HTTPTASKIGNOREEXCEPTION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKIGNOREEXCEPTIONPACKAGE.HTTPTASKIGNOREEXCEPTION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptasksaveresponseparameterstransientpackage',
      properties: [
        {
          id: 'httptasksaveresponseparameterstransient',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEPARAMETERSTRANSIENTPACKAGE.HTTPTASKSAVERESPONSEPARAMETERSTRANSIENT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEPARAMETERSTRANSIENTPACKAGE.HTTPTASKSAVERESPONSEPARAMETERSTRANSIENT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptasksaveresponseasjsonpackage',
      properties: [
        {
          id: 'httptasksaveresponseasjson',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEASJSONPACKAGE.HTTPTASKSAVERESPONSEASJSON.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEASJSONPACKAGE.HTTPTASKSAVERESPONSEASJSON.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskparallelinsametransactionpackage',
      properties: [
        {
          id: 'httptaskparallelinsametransaction',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKPARALLELINSAMETRANSACTIONPACKAGE.HTTPTASKPARALLELINSAMETRANSACTION.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKPARALLELINSAMETRANSACTIONPACKAGE.HTTPTASKPARALLELINSAMETRANSACTION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'skipexpressionpackage',
      properties: [
        {
          id: 'skipexpression',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.SKIPEXPRESSIONPACKAGE.SKIPEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SKIPEXPRESSIONPACKAGE.SKIPEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskresponsevariablenamepackage',
      properties: [
        {
          id: 'httptaskresponsevariablename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKRESPONSEVARIABLENAMEPACKAGE.HTTPTASKRESPONSEVARIABLENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKRESPONSEVARIABLENAMEPACKAGE.HTTPTASKRESPONSEVARIABLENAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptasksaverequestvariablespackage',
      properties: [
        {
          id: 'httptasksaverequestvariables',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVEREQUESTVARIABLESPACKAGE.HTTPTASKSAVEREQUESTVARIABLES.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVEREQUESTVARIABLESPACKAGE.HTTPTASKSAVEREQUESTVARIABLES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptasksaveresponseparameterspackage',
      properties: [
        {
          id: 'httptasksaveresponseparameters',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEPARAMETERSPACKAGE.HTTPTASKSAVERESPONSEPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKSAVERESPONSEPARAMETERSPACKAGE.HTTPTASKSAVERESPONSEPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'httptaskresultvariableprefixpackage',
      properties: [
        {
          id: 'httptaskresultvariableprefix',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.HTTPTASKRESULTVARIABLEPREFIXPACKAGE.HTTPTASKRESULTVARIABLEPREFIX.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.HTTPTASKRESULTVARIABLEPREFIXPACKAGE.HTTPTASKRESULTVARIABLEPREFIX.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivitycalledelementpackage',
      properties: [
        {
          id: 'callactivitycalledelement',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCALLEDELEMENTPACKAGE.CALLACTIVITYCALLEDELEMENT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCALLEDELEMENTPACKAGE.CALLACTIVITYCALLEDELEMENT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivitycalledelementtypepackage',
      properties: [
        {
          id: 'callactivitycalledelementtype',
          type: 'flowable-calledelementtype',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCALLEDELEMENTTYPEPACKAGE.CALLACTIVITYCALLEDELEMENTTYPE.TITLE',
          value: 'key',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCALLEDELEMENTTYPEPACKAGE.CALLACTIVITYCALLEDELEMENTTYPE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityinparameterspackage',
      properties: [
        {
          id: 'callactivityinparameters',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINPARAMETERSPACKAGE.CALLACTIVITYINPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINPARAMETERSPACKAGE.CALLACTIVITYINPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityoutparameterspackage',
      properties: [
        {
          id: 'callactivityoutparameters',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYOUTPARAMETERSPACKAGE.CALLACTIVITYOUTPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYOUTPARAMETERSPACKAGE.CALLACTIVITYOUTPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityinheritvariablespackage',
      properties: [
        {
          id: 'callactivityinheritvariables',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINHERITVARIABLESPACKAGE.CALLACTIVITYINHERITVARIABLES.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINHERITVARIABLESPACKAGE.CALLACTIVITYINHERITVARIABLES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivitysamedeploymentpackage',
      properties: [
        {
          id: 'callactivitysamedeployment',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYSAMEDEPLOYMENTPACKAGE.CALLACTIVITYSAMEDEPLOYMENT.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYSAMEDEPLOYMENTPACKAGE.CALLACTIVITYSAMEDEPLOYMENT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityfallbacktodefaulttenantpackage',
      properties: [
        {
          id: 'callactivityfallbacktodefaulttenant',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYFALLBACKTODEFAULTTENANTPACKAGE.CALLACTIVITYFALLBACKTODEFAULTTENANT.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYFALLBACKTODEFAULTTENANTPACKAGE.CALLACTIVITYFALLBACKTODEFAULTTENANT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityidvariablenamepackage',
      properties: [
        {
          id: 'callactivityidvariablename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYIDVARIABLENAMEPACKAGE.CALLACTIVITYIDVARIABLENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYIDVARIABLENAMEPACKAGE.CALLACTIVITYIDVARIABLENAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityprocessinstancenamepackage',
      properties: [
        {
          id: 'callactivityprocessinstancename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYPROCESSINSTANCENAMEPACKAGE.CALLACTIVITYPROCESSINSTANCENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYPROCESSINSTANCENAMEPACKAGE.CALLACTIVITYPROCESSINSTANCENAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityinheritbusinesskeypackage',
      properties: [
        {
          id: 'callactivityinheritbusinesskey',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINHERITBUSINESSKEYPACKAGE.CALLACTIVITYINHERITBUSINESSKEY.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYINHERITBUSINESSKEYPACKAGE.CALLACTIVITYINHERITBUSINESSKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivityuselocalscopeforoutparameterspackage',
      properties: [
        {
          id: 'callactivityuselocalscopeforoutparameters',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERSPACKAGE.CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERS.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERSPACKAGE.CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivitybusinesskeypackage',
      properties: [
        {
          id: 'callactivitybusinesskey',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYBUSINESSKEYPACKAGE.CALLACTIVITYBUSINESSKEY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYBUSINESSKEYPACKAGE.CALLACTIVITYBUSINESSKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'callactivitycompleteasyncpackage',
      properties: [
        {
          id: 'callactivitycompleteasync',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCOMPLETEASYNCPACKAGE.CALLACTIVITYCOMPLETEASYNC.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CALLACTIVITYCOMPLETEASYNCPACKAGE.CALLACTIVITYCOMPLETEASYNC.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'cameltaskcamelcontextpackage',
      properties: [
        {
          id: 'cameltaskcamelcontext',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CAMELTASKCAMELCONTEXTPACKAGE.CAMELTASKCAMELCONTEXT.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CAMELTASKCAMELCONTEXTPACKAGE.CAMELTASKCAMELCONTEXT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'muletaskendpointurlpackage',
      properties: [
        {
          id: 'muletaskendpointurl',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULETASKENDPOINTURLPACKAGE.MULETASKENDPOINTURL.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULETASKENDPOINTURLPACKAGE.MULETASKENDPOINTURL.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'muletasklanguagepackage',
      properties: [
        {
          id: 'muletasklanguage',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULETASKLANGUAGEPACKAGE.MULETASKLANGUAGE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULETASKLANGUAGEPACKAGE.MULETASKLANGUAGE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'muletaskpayloadexpressionpackage',
      properties: [
        {
          id: 'muletaskpayloadexpression',
          type: 'Text',
          title:
            'BPMN.PROPERTYPACKAGES.MULETASKPAYLOADEXPRESSIONPACKAGE.MULETASKPAYLOADEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULETASKPAYLOADEXPRESSIONPACKAGE.MULETASKPAYLOADEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'muletaskresultvariablepackage',
      properties: [
        {
          id: 'muletaskresultvariable',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULETASKRESULTVARIABLEPACKAGE.MULETASKRESULTVARIABLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULETASKRESULTVARIABLEPACKAGE.MULETASKRESULTVARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'conditionsequenceflowpackage',
      properties: [
        {
          id: 'conditionsequenceflow',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.CONDITIONSEQUENCEFLOWPACKAGE.CONDITIONSEQUENCEFLOWPACKAGE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CONDITIONSEQUENCEFLOWPACKAGE.CONDITIONSEQUENCEFLOWPACKAGE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'defaultflowpackage',
      properties: [
        {
          id: 'defaultflow',
          type: 'Boolean',
          title: 'BPMN.PROPERTYPACKAGES.DEFAULTFLOWPACKAGE.DEFAULTFLOW.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.DEFAULTFLOWPACKAGE.DEFAULTFLOW.DESCRIPTION',
          popular: true,
          refToView: 'default',
        },
      ],
    },
    {
      name: 'conditionalflowpackage',
      properties: [
        {
          id: 'conditionalflow',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CONDITIONALFLOWPACKAGE.CONDITIONALFLOW.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.CONDITIONALFLOWPACKAGE.CONDITIONALFLOW.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'timercycledefinitionpackage',
      properties: [
        {
          id: 'timercycledefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.TIMERCYCLEDEFINITIONPACKAGE.TIMERCYCLEDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TIMERCYCLEDEFINITIONPACKAGE.TIMERCYCLEDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'timerdatedefinitionpackage',
      properties: [
        {
          id: 'timerdatedefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.TIMERDATEDEFINITIONPACKAGE.TIMERDATEDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TIMERDATEDEFINITIONPACKAGE.TIMERDATEDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'timerdurationdefinitionpackage',
      properties: [
        {
          id: 'timerdurationdefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.TIMERDURATIONDEFINITIONPACKAGE.TIMERDURATIONDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TIMERDURATIONDEFINITIONPACKAGE.TIMERDURATIONDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'timerenddatedefinitionpackage',
      properties: [
        {
          id: 'timerenddatedefinition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.TIMERENDDATEDEFINITIONPACKAGE.TIMERENDDATEDEFINITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.TIMERENDDATEDEFINITIONPACKAGE.TIMERENDDATEDEFINITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'messagerefpackage',
      properties: [
        {
          id: 'messageref',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.MESSAGEREFPACKAGE.MESSAGEREF.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MESSAGEREFPACKAGE.MESSAGEREF.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'messageexpressionpackage',
      properties: [
        {
          id: 'messageexpression',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MESSAGEEXPRESSIONPACKAGE.MESSAGEEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MESSAGEEXPRESSIONPACKAGE.MESSAGEEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'signalrefpackage',
      properties: [
        {
          id: 'signalref',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.SIGNALREFPACKAGE.SIGNALREF.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SIGNALREFPACKAGE.SIGNALREF.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'signalexpressionpackage',
      properties: [
        {
          id: 'signalexpression',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.SIGNALEXPRESSIONPACKAGE.SIGNALEXPRESSION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SIGNALEXPRESSIONPACKAGE.SIGNALEXPRESSION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'errorrefpackage',
      properties: [
        {
          id: 'errorref',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.ERRORREFPACKAGE.ERRORREF.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.ERRORREFPACKAGE.ERRORREF.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'errorvariablepackage',
      properties: [
        {
          id: 'errorvariablename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLENAME.DESCRIPTION',
          popular: true,
        },
        {
          id: 'errorvariabletransient',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLETRANSIENT.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLETRANSIENT.DESCRIPTION',
          popular: true,
        },
        {
          id: 'errorvariablelocalscope',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLELOCALSCOPE.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.ERRORVARIABLEPACKAGE.ERRORVARIABLELOCALSCOPE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistryeventpackage',
      properties: [
        {
          id: 'eventkey',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTKEY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistryeventnamepackage',
      properties: [
        {
          id: 'eventname',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTNAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTNAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistryinparameterspackage',
      properties: [
        {
          id: 'eventinparameters',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTINPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTINPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistryoutparameterspackage',
      properties: [
        {
          id: 'eventoutparameters',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTOUTPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTOUTPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrycorrelationpackage',
      properties: [
        {
          id: 'eventcorrelationparameters',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTCORRELATIONPARAMETERS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.EVENTCORRELATIONPARAMETERS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrychannelkeypackage',
      properties: [
        {
          id: 'channelkey',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELKEY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrychannelnamepackage',
      properties: [
        {
          id: 'channelname',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELNAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELNAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrychanneltypepackage',
      properties: [
        {
          id: 'channeltype',
          type: 'flowable-channeltype',
          title: 'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELTYPE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELTYPE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrychanneldestinationpackage',
      properties: [
        {
          id: 'channeldestination',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELDESTINATION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.CHANNELDESTINATION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggereventpackage',
      properties: [
        {
          id: 'triggereventkey',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGEREVENTKEY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGEREVENTKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggereventnamepackage',
      properties: [
        {
          id: 'triggereventname',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGEREVENTNAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGEREVENTNAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggerchannelkeypackage',
      properties: [
        {
          id: 'triggerchannelkey',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELKEY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERHANNELKEY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggerchannelnamepackage',
      properties: [
        {
          id: 'triggerchannelname',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELNAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELNAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggerchanneltypepackage',
      properties: [
        {
          id: 'triggerchanneltype',
          type: 'flowable-channeltype',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELTYPE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELTYPE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrytriggerchanneldestinationpackage',
      properties: [
        {
          id: 'triggerchanneldestination',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELDESTINATION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.TRIGGERCHANNELDESTINATION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrykeydetectionfixedvaluepackage',
      properties: [
        {
          id: 'keydetectionfixedvalue',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONFIXEDVALUE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONFIXEDVALUE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrykeydetectionjsonfieldpackage',
      properties: [
        {
          id: 'keydetectionjsonfield',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONJSONFIELD.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONJSONFIELD.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'eventregistrykeydetectionjsonpointerpackage',
      properties: [
        {
          id: 'keydetectionjsonpointer',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONJSONPOINTER.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EVENTREGISTRYPACKAGE.KEYDETECTIONJSONPOINTER.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'variablelistenervariablenamepackage',
      properties: [
        {
          id: 'variablelistenervariablename',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.VARIABLELISTENERPACKAGE.VARIABLENAME.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.VARIABLELISTENERPACKAGE.VARIABLENAME.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'variablelistenervariablechangetypepackage',
      properties: [
        {
          id: 'variablelistenervariablechangetype',
          type: 'flowable-variablechangetype',
          title:
            'BPMN.PROPERTYPACKAGES.VARIABLELISTENERPACKAGE.VARIABLECHANGETYPE.TITLE',
          value: 'all',
          description:
            'BPMN.PROPERTYPACKAGES.VARIABLELISTENERPACKAGE.VARIABLECHANGETYPE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'externalworkerjobpackage',
      properties: [
        {
          id: 'topic',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.EXTERNALWORKERJOBPACKAGE.TOPIC.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.EXTERNALWORKERJOBPACKAGE.TOPIC.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'escalationrefpackage',
      properties: [
        {
          id: 'escalationref',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.ESCALATIONREFPACKAGE.ESCALATIONREF.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.ESCALATIONREFPACKAGE.ESCALATIONREF.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'cancelactivitypackage',
      properties: [
        {
          id: 'cancelactivity',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CANCELACTIVITYPACKAGE.CANCELACTIVITY.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.CANCELACTIVITYPACKAGE.CANCELACTIVITY.DESCRIPTION',
          popular: true,
          refToView: ['frame', 'frame2'],
        },
      ],
    },
    {
      name: 'conditionaleventpackage',
      properties: [
        {
          id: 'conditionaleventcondition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.CONDITIONALEVENTPACKAGE.CONDITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.CONDITIONALEVENTPACKAGE.CONDITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'initiatorpackage',
      properties: [
        {
          id: 'initiator',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.INITIATORPACKAGE.INITIATOR.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.INITIATORPACKAGE.INITIATOR.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'textpackage',
      properties: [
        {
          id: 'text',
          type: 'String',
          title: 'BPMN.PROPERTYPACKAGES.TEXTPACKAGE.TEXT.TITLE',
          value: '',
          description: 'BPMN.PROPERTYPACKAGES.TEXTPACKAGE.TEXT.DESCRIPTION',
          popular: true,
          refToView: 'text',
        },
      ],
    },
    {
      name: 'multiinstance_typepackage',
      properties: [
        {
          id: 'multiinstance_type',
          type: 'flowable-multiinstance',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_TYPEPACKAGE.MULTIINSTANCE_TYPE.TITLE',
          value: 'None',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_TYPEPACKAGE.MULTIINSTANCE_TYPE.DESCRIPTION',
          popular: true,
          refToView: 'multiinstance',
        },
        {
          id: 'multiinstance_variableaggregations',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_TYPEPACKAGE.VARIABLE_AGGREGATIONS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_TYPEPACKAGE.VARIABLE_AGGREGATIONS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'multiinstance_cardinalitypackage',
      properties: [
        {
          id: 'multiinstance_cardinality',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_CARDINALITYPACKAGE.MULTIINSTANCE_CARDINALITY.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_CARDINALITYPACKAGE.MULTIINSTANCE_CARDINALITY.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'multiinstance_collectionpackage',
      properties: [
        {
          id: 'multiinstance_collection',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_COLLECTIONPACKAGE.MULTIINSTANCE_COLLECTION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_COLLECTIONPACKAGE.MULTIINSTANCE_COLLECTION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'multiinstance_variablepackage',
      properties: [
        {
          id: 'multiinstance_variable',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_VARIABLEPACKAGE.MULTIINSTANCE_VARIABLE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_VARIABLEPACKAGE.MULTIINSTANCE_VARIABLE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'multiinstance_conditionpackage',
      properties: [
        {
          id: 'multiinstance_condition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_CONDITIONPACKAGE.MULTIINSTANCE_CONDITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MULTIINSTANCE_CONDITIONPACKAGE.MULTIINSTANCE_CONDITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'isforcompensationpackage',
      properties: [
        {
          id: 'isforcompensation',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.ISFORCOMPENSATIONPACKAGE.ISFORCOMPENSATION.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.ISFORCOMPENSATIONPACKAGE.ISFORCOMPENSATION.DESCRIPTION',
          popular: true,
          refToView: 'compensation',
        },
      ],
    },
    {
      name: 'sequencefloworderpackage',
      properties: [
        {
          id: 'sequencefloworder',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.SEQUENCEFLOWORDERPACKAGE.SEQUENCEFLOWORDER.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SEQUENCEFLOWORDERPACKAGE.SEQUENCEFLOWORDER.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'signaldefinitionspackage',
      properties: [
        {
          id: 'signaldefinitions',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.SIGNALDEFINITIONSPACKAGE.SIGNALDEFINITIONS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.SIGNALDEFINITIONSPACKAGE.SIGNALDEFINITIONS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'messagedefinitionspackage',
      properties: [
        {
          id: 'messagedefinitions',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.MESSAGEDEFINITIONSPACKAGE.MESSAGEDEFINITIONS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.MESSAGEDEFINITIONSPACKAGE.MESSAGEDEFINITIONS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'escalationdefinitionspackage',
      properties: [
        {
          id: 'escalationdefinitions',
          type: 'multiplecomplex',
          title:
            'BPMN.PROPERTYPACKAGES.ESCALATIONDEFINITIONSPACKAGE.ESCALATIONDEFINITIONS.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.ESCALATIONDEFINITIONSPACKAGE.ESCALATIONDEFINITIONS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'istransactionpackage',
      properties: [
        {
          id: 'istransaction',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.ISTRANSACTIONPACKAGE.ISTRANSACTION.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.ISTRANSACTIONPACKAGE.ISTRANSACTION.DESCRIPTION',
          popular: true,
          refToView: 'border',
        },
      ],
    },
    {
      name: 'formreferencepackage',
      properties: [
        {
          id: 'formreference',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.FORMREFERENCEPACKAGE.FORMREFERENCE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.FORMREFERENCEPACKAGE.FORMREFERENCE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'terminateAllpackage',
      properties: [
        {
          id: 'terminateAll',
          type: 'Boolean',
          title: 'BPMN.PROPERTYPACKAGES.TERMINATEALLPACKAGE.TERMINATEALL.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.TERMINATEALLPACKAGE.TERMINATEALL.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'decisiontaskdecisiontablereferencepackage',
      properties: [
        {
          id: 'decisiontaskdecisiontablereference',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKDECISIONTABLEREFERENCEPACKAGE.DECISIONTASKDECISIONTABLEREFERENCE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKDECISIONTABLEREFERENCEPACKAGE.DECISIONTASKDECISIONTABLEREFERENCE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'decisiontaskdecisionservicereferencepackage',
      properties: [
        {
          id: 'decisiontaskdecisionservicereference',
          type: 'Complex',
          title:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKDECISIONSERVICEREFERENCEPACKAGE.DECISIONTASKDECISIONSERVICEREFERENCE.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKDECISIONSERVICEREFERENCEPACKAGE.DECISIONTASKDECISIONSERVICEREFERENCE.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'decisiontaskthrowerroronnohitspackage',
      properties: [
        {
          id: 'decisiontaskthrowerroronnohits',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKTHROWERRORONNOHITSPACKAGE.DECISIONTASKTHROWERRORONNOHITS.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKTHROWERRORONNOHITSPACKAGE.DECISIONTASKTHROWERRORONNOHITS.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'decisiontaskfallbacktodefaulttenantpackage',
      properties: [
        {
          id: 'decisiontaskfallbacktodefaulttenant',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKFALLBACKTODEFAULTTENANTPACKAGE.DECISIONTASKFALLBACKTODEFAULTTENANT.TITLE',
          value: 'false',
          description:
            'BPMN.PROPERTYPACKAGES.DECISIONTASKFALLBACKTODEFAULTTENANTPACKAGE.DECISIONTASKFALLBACKTODEFAULTTENANT.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'interruptingpackage',
      properties: [
        {
          id: 'interrupting',
          type: 'Boolean',
          title: 'BPMN.PROPERTYPACKAGES.INTERRUPTINGPACKAGE.INTERRUPTING.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.INTERRUPTINGPACKAGE.INTERRUPTING.DESCRIPTION',
          popular: true,
          refToView: ['frame'],
        },
      ],
    },
    {
      name: 'completionconditionpackage',
      properties: [
        {
          id: 'completioncondition',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.COMPLETIONCONDITIONPACKAGE.COMPLETIONCONDITION.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.COMPLETIONCONDITIONPACKAGE.COMPLETIONCONDITION.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'orderingpackage',
      properties: [
        {
          id: 'ordering',
          type: 'flowable-ordering',
          title: 'BPMN.PROPERTYPACKAGES.ORDERINGPACKAGE.ORDERING.TITLE',
          value: 'Parallel',
          description:
            'BPMN.PROPERTYPACKAGES.ORDERINGPACKAGE.ORDERING.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'cancelremaininginstancespackage',
      properties: [
        {
          id: 'cancelremaininginstances',
          type: 'Boolean',
          title:
            'BPMN.PROPERTYPACKAGES.CANCELREMAININGINSTANCESPACKAGE.CANCELREMAININGINSTANCES.TITLE',
          value: 'true',
          description:
            'BPMN.PROPERTYPACKAGES.CANCELREMAININGINSTANCESPACKAGE.CANCELREMAININGINSTANCES.DESCRIPTION',
          popular: true,
        },
      ],
    },
    {
      name: 'compensationactivityrefpackage',
      properties: [
        {
          id: 'compensationactivityref',
          type: 'String',
          title:
            'BPMN.PROPERTYPACKAGES.COMPENSATIONACTIVITYREFPACKAGE.COMPENSATIONACTIVITYREF.TITLE',
          value: '',
          description:
            'BPMN.PROPERTYPACKAGES.COMPENSATIONACTIVITYREFPACKAGE.COMPENSATIONACTIVITYREF.DESCRIPTION',
          popular: true,
        },
      ],
    },
  ],
  stencils: [
    {
      type: 'node',
      id: 'BPMNDiagram',
      title: 'BPMN.STENCILS.BPMNDIAGRAM.TITLE',
      description: 'BPMN.STENCILS.BPMNDIAGRAM.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="800"\n   height="600"\n   version="1.0">\n  <defs></defs>\n  <g pointer-events="fill" >\n    <polygon stroke="black" fill="black" stroke-width="1" points="0,0 0,590 9,599 799,599 799,9 790,0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" />\n    <rect id="diagramcanvas" oryx:resize="vertical horizontal" x="0" y="0" width="790" height="590" stroke="black" stroke-width="2" fill="white" />\n    \t<text font-size="22" id="diagramtext" x="400" y="25" oryx:align="top center" stroke="#373e48"></text>\n  </g>\n</svg>',
      icon: 'diagram.png',
      groups: ['BPMN.STENCILS.GROUPS.DIAGRAM'],
      mayBeRoot: true,
      hide: true,
      propertyPackages: [
        'process_idpackage',
        'namepackage',
        'documentationpackage',
        'process_authorpackage',
        'process_versionpackage',
        'process_namespacepackage',
        'process_historylevelpackage',
        'isexecutablepackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'eventlistenerspackage',
        'signaldefinitionspackage',
        'messagedefinitionspackage',
        'escalationdefinitionspackage',
        'process_potentialstarteruserpackage',
        'process_potentialstartergrouppackage',
        'process_iseagerexecutionfetchpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [],
    },
    {
      type: 'node',
      id: 'StartNoneEvent',
      title: 'BPMN.STENCILS.STARTNONEEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTNONEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/none.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'initiatorpackage',
        'formkeydefinitionpackage',
        'formreferencepackage',
        'formfieldvalidationpackage',
        'formpropertiespackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartTimerEvent',
      title: 'BPMN.STENCILS.STARTTIMEREVENT.TITLE',
      description: 'BPMN.STENCILS.STARTTIMEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path id="path1" transform="translate(6,6)"\n    \td="M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z "  \n    \tfill="#585858" stroke="none" />\n   \n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/timer.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'timercycledefinitionpackage',
        'timerdatedefinitionpackage',
        'timerdurationdefinitionpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartSignalEvent',
      title: 'BPMN.STENCILS.STARTSIGNALEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTSIGNALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <path\n       d="M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z"\n       id="triangle"\n       stroke="#585858"\n       style="fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/signal.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'signalrefpackage',
        'signalexpressionpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartMessageEvent',
      title: 'BPMN.STENCILS.STARTMESSAGEEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTMESSAGEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path transform="translate(7,7)" id="path1" stroke="none" fill="#585858" stroke-width="1" d="m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/message.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'messagerefpackage',
        'messageexpressionpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartErrorEvent',
      title: 'BPMN.STENCILS.STARTERROREVENT.TITLE',
      description: 'BPMN.STENCILS.STARTERROREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    \n    <path\n         stroke="#585858"\n         style="fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z"\n         id="errorPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/error.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'errorrefpackage',
        'errorvariablepackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartEventRegistryEvent',
      title: 'BPMN.STENCILS.STARTEVENTREGISTRYEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTEVENTREGISTRYEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path transform="translate(7,7)" id="path1" stroke="none" fill="#585858" stroke-width="1" d="m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/message.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'eventregistryeventpackage',
        'eventregistryeventnamepackage',
        'eventregistryoutparameterspackage',
        'eventregistrycorrelationpackage',
        'eventregistrychannelkeypackage',
        'eventregistrychannelnamepackage',
        'eventregistrychanneltypepackage',
        'eventregistrychanneldestinationpackage',
        'eventregistrykeydetectionfixedvaluepackage',
        'eventregistrykeydetectionjsonfieldpackage',
        'eventregistrykeydetectionjsonpointerpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartVariableListenerEvent',
      title: 'BPMN.STENCILS.STARTVARIABLELISTENEREVENT.TITLE',
      description: 'BPMN.STENCILS.STARTVARIABLELISTENEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path transform="translate(0,0)" id="path1" stroke="#585858" fill="none" stroke-width="1" d="M 20.834856,22.874369 L 10.762008,22.873529 L 7.650126,13.293421 L 15.799725,7.3734296 L 23.948336,13.294781 L 20.834856,22.874369 z"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/multiple.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'variablelistenervariablenamepackage',
        'variablelistenervariablechangetypepackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartEscalationEvent',
      title: 'BPMN.STENCILS.STARTESCALATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTESCALATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    \n    <path\n         stroke="#585858"\n         style="fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 16,8.75 L22,23.75 L16,17 L10,23.75z"\n         id="escalationPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/escalation.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'escalationrefpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'StartConditionalEvent',
      title: 'BPMN.STENCILS.STARTCONDITIONALEVENT.TITLE',
      description: 'BPMN.STENCILS.STARTCONDITIONALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    \n    <path\n         stroke="#585858"\n         style="fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 10 10 L 22 10 M 10 14 L 22 14 M 10 18 L 22 18 M 10 22 L 22 22"\n         id="conditionalIcon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'startevent/conditional.png',
      groups: ['BPMN.STENCILS.GROUPS.STARTEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'conditionaleventpackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'Startevents_all', 'StartEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'UserTask',
      title: 'BPMN.STENCILS.USERTASK.TITLE',
      description: 'BPMN.STENCILS.USERTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="userTask" transform="translate(3,3)">\n\t\t<path oryx:anchors="top left"\n       \t\tstyle="fill:#d1b575;stroke:none;"\n       \t\t d="m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111 l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c 0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17" \n         />\n\t\t\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.user.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'usertaskassignmentpackage',
        'formkeydefinitionpackage',
        'formreferencepackage',
        'formfieldvalidationpackage',
        'duedatedefinitionpackage',
        'prioritydefinitionpackage',
        'formpropertiespackage',
        'tasklistenerspackage',
        'skipexpressionpackage',
        'categorypackage',
        'taskidvariablenamepackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ServiceTask',
      title: 'BPMN.STENCILS.SERVICETASK.TITLE',
      description: 'BPMN.STENCILS.SERVICETASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="serviceTask" transform="translate(3,3)">\n\t<path oryx:anchors="top left"\n\t\tstyle="fill:#72a7d0;stroke:none"\n     d="M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375 -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947 -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z" />\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.service.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'servicetasktriggerablepackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'servicetaskclasspackage',
        'servicetaskexpressionpackage',
        'servicetaskdelegateexpressionpackage',
        'servicetaskfieldspackage',
        'servicetaskexceptionspackage',
        'servicetaskresultvariablepackage',
        'servicetaskresultvariableUseLocalScopepackage',
        'skipexpressionpackage',
        'servicetaskfailedjobretrytimecyclepackage',
        'servicetaskstoreresultvariabletransientpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ScriptTask',
      title: 'BPMN.STENCILS.SCRIPTTASK.TITLE',
      description: 'BPMN.STENCILS.SCRIPTTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="scriptTask" transform="translate(2,2)">\n\t\t<path oryx:anchors="top left"\n\t\t\td="m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312 l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111 5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z"\n     \t\tstyle="fill:#72a7d0;stroke:none"\n\t\t/>\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.script.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'scriptformatpackage',
        'scripttextpackage',
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'skipexpressionpackage',
        'isforcompensationpackage',
        'scriptautostorevariablespackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'BusinessRule',
      title: 'BPMN.STENCILS.BUSINESSRULE.TITLE',
      description: 'BPMN.STENCILS.BUSINESSRULE.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n  \t<defs>\n\t\t<radialGradient id="background" cx="10%" cy="10%" r="100%" fx="10%" fy="10%">\n\t\t\t<stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>\n\t\t\t<stop id="fill_el" offset="100%" stop-color="#ffffcc" stop-opacity="1"/>\n\t\t</radialGradient>\n\t</defs>\n\t\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="businessRuleTask" transform="translate(4,3)">\n\t\t<path oryx:anchors="top left" \n\t\t\t d="m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z"\n     \t\tstyle="fill:#72a7d0;stroke:none"\n\t\t/>\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.business.rule.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'ruletask_rulespackage',
        'ruletask_variables_inputpackage',
        'ruletask_excludepackage',
        'ruletask_resultpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ReceiveTask',
      title: 'BPMN.STENCILS.RECEIVETASK.TITLE',
      description: 'BPMN.STENCILS.RECEIVETASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="receiveTask" transform="translate(4,3)">\n\t\t<path oryx:anchors="left top" \n\t\t\t style="fill:#16964d;stroke:none;"\n     \t\t d="m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z"\n\t\t />\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.receive.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ManualTask',
      title: 'BPMN.STENCILS.MANUALTASK.TITLE',
      description: 'BPMN.STENCILS.MANUALTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    <g id="manualTask" transform="translate(3,1)">\n    \t<path oryx:anchors="top left"\n    \t\tstyle="fill:#d1b575;stroke=none"\n     \t\td="m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c 0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128 -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0 c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15 C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801 0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868 6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394 8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232 -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661 l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z"\n    \t/>\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.manual.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'MailTask',
      title: 'BPMN.STENCILS.MAILTASK.TITLE',
      description: 'BPMN.STENCILS.MAILTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="sendTask" transform="translate(4,3)">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors="top left"\n\t\t\tstyle="fill:#16964d;stroke:none;"\n     \t\td="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "\n     \t/>\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.send.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'mailtaskheaderspackage',
        'mailtasktopackage',
        'mailtaskfrompackage',
        'mailtasksubjectpackage',
        'mailtaskccpackage',
        'mailtaskbccpackage',
        'mailtasktextpackage',
        'mailtaskhtmlpackage',
        'mailtaskcharsetpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'CamelTask',
      title: 'BPMN.STENCILS.CAMELTASK.TITLE',
      description: 'BPMN.STENCILS.CAMELTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="camelTask" transform="translate(4,4)">\n\t\t<path\n     style="fill:#bd4848;fill-opacity:1"\n     d="m 8.1878027,15.383782 c -0.824818,-0.3427 0.375093,-1.1925 0.404055,-1.7743 0.230509,-0.8159 -0.217173,-1.5329 -0.550642,-2.2283 -0.106244,-0.5273 -0.03299,-1.8886005 -0.747194,-1.7818005 -0.712355,0.3776 -0.9225,1.2309005 -1.253911,1.9055005 -0.175574,1.0874 -0.630353,2.114 -0.775834,3.2123 -0.244009,0.4224 -1.741203,0.3888 -1.554386,-0.1397 0.651324,-0.3302 1.13227,-0.9222 1.180246,-1.6705 0.0082,-0.7042 -0.133578,-1.3681 0.302178,-2.0083 0.08617,-0.3202 0.356348,-1.0224005 -0.218996,-0.8051 -0.694517,0.2372 -1.651062,0.6128 -2.057645,-0.2959005 -0.696769,0.3057005 -1.102947,-0.611 -1.393127,-1.0565 -0.231079,-0.6218 -0.437041,-1.3041 -0.202103,-1.9476 -0.185217,-0.7514 -0.39751099,-1.5209 -0.35214999,-2.301 -0.243425,-0.7796 0.86000899,-1.2456 0.08581,-1.8855 -0.76078999,0.1964 -1.41630099,-0.7569 -0.79351899,-1.2877 0.58743,-0.52829998 1.49031699,-0.242 2.09856399,-0.77049998 0.816875,-0.3212 1.256619,0.65019998 1.923119,0.71939998 0.01194,0.7333 -0.0031,1.5042 -0.18417,2.2232 -0.194069,0.564 -0.811196,1.6968 0.06669,1.9398 0.738382,-0.173 1.095723,-0.9364 1.659041,-1.3729 0.727298,-0.3962 1.093982,-1.117 1.344137,-1.8675 0.400558,-0.8287 1.697676,-0.6854 1.955367,0.1758 0.103564,0.5511 0.9073983,1.7538 1.2472763,0.6846 0.121868,-0.6687 0.785541,-1.4454 1.518183,-1.0431 0.813587,0.4875 0.658233,1.6033 1.285504,2.2454 0.768715,0.8117 1.745394,1.4801 2.196633,2.5469 0.313781,0.8074 0.568552,1.707 0.496624,2.5733 -0.35485,0.8576005 -1.224508,-0.216 -0.64725,-0.7284 0.01868,-0.3794 -0.01834,-1.3264 -0.370249,-1.3272 -0.123187,0.7586 -0.152778,1.547 -0.10869,2.3154 0.270285,0.6662005 1.310741,0.7653005 1.060553,1.6763005 -0.03493,0.9801 0.294343,1.9505 0.148048,2.9272 -0.320479,0.2406 -0.79575,0.097 -1.185062,0.1512 -0.165725,0.3657 -0.40138,0.921 -1.020848,0.6744 -0.564671,0.1141 -1.246404,-0.266 -0.578559,-0.7715 0.679736,-0.5602 0.898618,-1.5362 0.687058,-2.3673 -0.529674,-1.108 -1.275984,-2.0954005 -1.839206,-3.1831005 -0.634619,-0.1004 -1.251945,0.6779 -1.956789,0.7408 -0.6065893,-0.038 -1.0354363,-0.06 -0.8495673,0.6969005 0.01681,0.711 0.152396,1.3997 0.157345,2.1104 0.07947,0.7464 0.171287,1.4944 0.238271,2.2351 0.237411,1.0076 -0.687542,1.1488 -1.414811,0.8598 z m 6.8675483,-1.8379 c 0.114364,-0.3658 0.206751,-1.2704 -0.114466,-1.3553 -0.152626,0.5835 -0.225018,1.1888 -0.227537,1.7919 0.147087,-0.1166 0.265559,-0.2643 0.342003,-0.4366 z"\n     />\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.camel.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'cameltaskcamelcontextpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'HttpTask',
      title: 'BPMN.STENCILS.HTTPTASK.TITLE',
      description: 'BPMN.STENCILS.HTTPTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="sendTask" transform="translate(4,3)">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors="top left"\n\t\t\tstyle="fill:#16964d;stroke:none;"\n     \t\td="m 16.704699,5.9229055 q 0.358098,0 0.608767,0.2506681 0.250669,0.250668 0.250669,0.6087677 0,0.3580997 -0.250669,0.6087677 -0.250669,0.2506679 -0.608767,0.2506679 -0.358098,0 -0.608767,-0.2506679 -0.250669,-0.250668 -0.250669,-0.6087677 0,-0.3580997 0.250669,-0.6087677 0.250669,-0.2506681 0.608767,-0.2506681 z m 2.578308,-2.0053502 q -2.229162,0 -3.854034,0.6759125 -1.624871,0.6759067 -3.227361,2.2694472 -0.716197,0.725146 -1.575633,1.7457293 L 7.2329969,8.7876913 Q 7.0897576,8.8055849 7.000233,8.9309334 L 4.9948821,12.368677 q -0.035811,0.06267 -0.035811,0.143242 0,0.107426 0.080572,0.205905 l 0.5729577,0.572957 q 0.125334,0.116384 0.2864786,0.07162 l 2.4708789,-0.760963 2.5156417,2.515645 -0.76096,2.470876 q -0.009,0.02687 -0.009,0.08057 0,0.125338 0.08058,0.205905 l 0.572957,0.572958 q 0.170096,0.152194 0.349146,0.04476 l 3.437744,-2.005351 q 0.125335,-0.08953 0.143239,-0.232763 l 0.17905,-3.392986 q 1.02058,-0.859435 1.745729,-1.575629 1.67411,-1.6830612 2.309735,-3.2049805 0.635625,-1.5219191 0.635625,-3.8585111 0,-0.1253369 -0.08505,-0.2148575 -0.08505,-0.089526 -0.201431,-0.089526 z "\n     \t/>\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.http.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'httptaskrequestmethodpackage',
        'httptaskrequesturlpackage',
        'httptaskrequestheaderspackage',
        'httptaskrequestbodypackage',
        'httptaskrequestbodyencodingpackage',
        'httptaskrequesttimeoutpackage',
        'httptaskdisallowredirectspackage',
        'httptaskfailstatuscodespackage',
        'httptaskhandlestatuscodespackage',
        'httptaskignoreexceptionpackage',
        'httptaskresponsevariablenamepackage',
        'httptasksaverequestvariablespackage',
        'httptasksaveresponseparameterspackage',
        'httptaskresultvariableprefixpackage',
        'httptasksaveresponseparameterstransientpackage',
        'httptasksaveresponseasjsonpackage',
        'httptaskparallelinsametransactionpackage',
        'skipexpressionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'MuleTask',
      title: 'BPMN.STENCILS.MULETASK.TITLE',
      description: 'BPMN.STENCILS.MULETASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="muleTask" transform="translate(4,4)">\n\t\t<path\n     style="fill:#bd4848;fill-opacity:1"\n     d="M 8,0 C 3.581722,0 0,3.5817 0,8 c 0,4.4183 3.581722,8 8,8 4.418278,0 8,-3.5817 8,-8 L 16,7.6562 C 15.813571,3.3775 12.282847,0 8,0 z M 5.1875,2.7812 8,7.3437 10.8125,2.7812 c 1.323522,0.4299 2.329453,1.5645 2.8125,2.8438 1.136151,2.8609 -0.380702,6.4569 -3.25,7.5937 -0.217837,-0.6102 -0.438416,-1.2022 -0.65625,-1.8125 0.701032,-0.2274 1.313373,-0.6949 1.71875,-1.3125 0.73624,-1.2317 0.939877,-2.6305 -0.03125,-4.3125 l -2.75,4.0625 -0.65625,0 -0.65625,0 -2.75,-4 C 3.5268433,7.6916 3.82626,8.862 4.5625,10.0937 4.967877,10.7113 5.580218,11.1788 6.28125,11.4062 6.063416,12.0165 5.842837,12.6085 5.625,13.2187 2.755702,12.0819 1.238849,8.4858 2.375,5.625 2.858047,4.3457 3.863978,3.2112 5.1875,2.7812 z"\n     />\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.mule.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'muletaskendpointurlpackage',
        'muletasklanguagepackage',
        'muletaskpayloadexpressionpackage',
        'muletaskresultvariablepackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'SendTask',
      title: 'BPMN.STENCILS.SENDTASK.TITLE',
      description: 'BPMN.STENCILS.SENDTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="sendTask" transform="translate(4,3)">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors="top left"\n\t\t\tstyle="fill:#16964d;stroke:none;"\n     \t\td="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "\n     \t/>\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.send.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'DecisionTask',
      title: 'BPMN.STENCILS.DECISIONTASK.TITLE',
      description: 'BPMN.STENCILS.DECISIONTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="decisionTask" transform="translate(4,3)">\n\t\t<path oryx:anchors="top left"\n\t\t\t d="m 1,2 0,14 16,0 0,-14 z m 1.9,2.4000386 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z"\n     \t\tstyle="fill:#72a7d0;stroke:none"\n\t\t/>\n\t</g>\n\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.decision.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'decisiontaskdecisiontablereferencepackage',
        'decisiontaskdecisionservicereferencepackage',
        'decisiontaskthrowerroronnohitspackage',
        'decisiontaskfallbacktodefaulttenantpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'SendEventTask',
      title: 'BPMN.STENCILS.SENDEVENTTASK.TITLE',
      description: 'BPMN.STENCILS.SENDEVENTTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="sendTask" transform="translate(4,3)">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors="top left"\n\t\t\tstyle="fill:#16964d;stroke:none;"\n     \t\td="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "\n     \t/>\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.send.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'servicetasktriggerablepackage',
        'executionlistenerspackage',
        'eventregistryeventpackage',
        'eventregistryeventnamepackage',
        'eventregistryinparameterspackage',
        'eventregistrychannelkeypackage',
        'eventregistrychannelnamepackage',
        'eventregistrychanneltypepackage',
        'eventregistrychanneldestinationpackage',
        'eventregistrytriggereventpackage',
        'eventregistrytriggereventnamepackage',
        'eventregistrytriggerchannelkeypackage',
        'eventregistrytriggerchannelnamepackage',
        'eventregistrytriggerchanneltypepackage',
        'eventregistrytriggerchanneldestinationpackage',
        'eventregistryoutparameterspackage',
        'eventregistrycorrelationpackage',
        'eventregistrykeydetectionfixedvaluepackage',
        'eventregistrykeydetectionjsonfieldpackage',
        'eventregistrykeydetectionjsonpointerpackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ReceiveEventTask',
      title: 'BPMN.STENCILS.RECEIVEEVENTTASK.TITLE',
      description: 'BPMN.STENCILS.RECEIVEEVENTTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="receiveTask" transform="translate(4,3)">\n\t\t<path oryx:anchors="left top" \n\t\t\t style="fill:#16964d;stroke:none;"\n     \t\t d="m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z"\n\t\t />\n\t</g>\n\t\n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.receive.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'cancelactivitypackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
        'eventregistryeventpackage',
        'eventregistryeventnamepackage',
        'eventregistryoutparameterspackage',
        'eventregistrycorrelationpackage',
        'eventregistrychannelkeypackage',
        'eventregistrychannelnamepackage',
        'eventregistrychanneltypepackage',
        'eventregistrychanneldestinationpackage',
        'eventregistrykeydetectionfixedvaluepackage',
        'eventregistrykeydetectionjsonfieldpackage',
        'eventregistrykeydetectionjsonpointerpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ExternalWorkerTask',
      title: 'BPMN.STENCILS.EXTERNALWORKERTASK.TITLE',
      description: 'BPMN.STENCILS.EXTERNALWORKERTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="serviceTask" transform="translate(3,3)">\n\t<path oryx:anchors="top left"\n\t\tstyle="fill:#72a7d0;stroke:none"\n     d="M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375 -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947 -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z" />\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.service.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'externalworkerjobpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'ShellTask',
      title: 'BPMN.STENCILS.SHELLTASK.TITLE',
      description: 'BPMN.STENCILS.SHELLTASK.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t\n\t<g id="shellTask" transform="translate(2,2)">\n\t\t<path oryx:anchors="top left"\n\t\t\td="m 1,2 0,14 16,0 0,-14 z m 1.4,3 12.7,0 0,10 -12.7,0 z"\n     \t\tstyle="fill:#72a7d0;stroke:none"\n\t\t/><text x=\'3\' y=\'9\' style=\'fill:#72a7d0;font-size:5px;\'><![CDATA[>_]]></text>\n\t</g>\n  \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\t\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/list/type.shell.png',
      groups: ['BPMN.STENCILS.GROUPS.ACTIVITIES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'shellcommandpackage',
        'shellarg1package',
        'shellarg2package',
        'shellarg3package',
        'shellarg4package',
        'shellarg5package',
        'shellwaitpackage',
        'shelloutputvariablepackage',
        'shellerrorcodevariablepackage',
        'shellredirecterrorpackage',
        'shellcleanenvpackage',
        'shelldirectorypackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'SubProcess',
      title: 'BPMN.STENCILS.SUBPROCESS.TITLE',
      description: 'BPMN.STENCILS.SUBPROCESS.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="200"\n   height="160"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="50" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="80" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="110" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="159" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="199" oryx:cy="50" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="80" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="110" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="100" oryx:cy="80" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="120 100" oryx:maximumSize="" >\n    <rect id="text_frame" oryx:anchors="bottom top right left" x="0" y="0" width="190" height="160" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:anchors="bottom top right left" x="0" y="0" width="200" height="160" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#ffffff" />\n\t<rect id="border" oryx:anchors="top bottom left right" oryx:resize="vertical horizontal" x="2.5" y="2.5" width="195" height="155" rx="8" ry="8" stroke="black" stroke-width="1" fill="none" />\n\t<text \n\t\tfont-size="12" \n\t\tid="text_name" \n\t\tx="8" \n\t\ty="10" \n\t\toryx:align="top left"\n\t\toryx:fittoelem="text_frame"\n\t\toryx:anchors="left top" \n\t\tstroke="#373e48">\n\t</text>\n\t\n\t<g \tid="parallel"\n\t\ttransform="translate(1)">\n\t\t<path \n\t\t\tid="parallelpath"\n\t\t\toryx:anchors="bottom" \n\t\t\tfill="none" stroke="#bbbbbb" d="M96 145 v10 M100 145 v10 M104 145 v10" \n\t\t\tstroke-width="2"\n\t\t/>\n\t</g>\n\t<g \tid="sequential"\n\t\ttransform="translate(1)">\n\t\t<path \n\t\t\tid="sequentialpath"\n\t\t\toryx:anchors="bottom" \n\t\t\tfill="none" stroke="#bbbbbb" stroke-width="2" d="M95,154h10 M95,150h10 M95,146h10"\n\t\t/>\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/expanded.subprocess.png',
      groups: ['BPMN.STENCILS.GROUPS.STRUCTURAL'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'istransactionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['Activity', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'CollapsedSubProcess',
      title: 'BPMN.STENCILS.COLLAPSEDSUBPROCESS.TITLE',
      description: 'BPMN.STENCILS.COLLAPSEDSUBPROCESS.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t<g id="subprocess">\n\t\t<rect height="10" width="10" x="45" y="65" stroke="#bbbbbb" fill="none" />\n\t\t<path d="M50 65 L50 75" stroke="black" />\n\t\t<path d="M45 70 L55 70" stroke="black" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/subprocess.png',
      groups: ['BPMN.STENCILS.GROUPS.STRUCTURAL'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'istransactionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['Activity', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EventSubProcess',
      title: 'BPMN.STENCILS.EVENTSUBPROCESS.TITLE',
      description: 'BPMN.STENCILS.EVENTSUBPROCESS.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="200"\n   height="160"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="0" oryx:cy="80" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="160" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="200" oryx:cy="80" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="0" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="80" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="120 100" oryx:maximumSize="" >\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="0" y="0" width="190" height="160" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:anchors="bottom top right left" oryx:resize="vertical horizontal" x="0" y="0" width="200" height="160" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" stroke-dasharray="2,2,2" fill="#ffffff" />\n    \t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="8" \n\t\t\ty="10" \n\t\t\toryx:align="top left"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\toryx:anchors="left top" \n\t\t\tstroke="#373e48">\n\t\t</text>\n    \t\n\t<g id="none"></g>\n\t\n  </g>\n</svg>',
      icon: 'activity/event.subprocess.png',
      groups: ['BPMN.STENCILS.GROUPS.STRUCTURAL'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'executionlistenerspackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['Activity', 'all', 'EventSubProcess'],
    },
    {
      type: 'node',
      id: 'CallActivity',
      title: 'BPMN.STENCILS.CALLACTIVITY.TITLE',
      description: 'BPMN.STENCILS.CALLACTIVITY.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n    <rect oryx:resize="vertical horizontal" oryx:anchors="bottom top right left" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="4" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n    \n\t<g id="parallel">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M46 70 v8 M50 70 v8 M54 70 v8" stroke-width="2" />\n\t</g>\n\t\n\t<g id="sequential">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" stroke-width="2" d="M46,76h10M46,72h10 M46,68h10"/>\n\t</g>\n\n\t<g id="compensation">\n\t\t<path oryx:anchors="bottom" fill="none" stroke="#bbbbbb" d="M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74" stroke-width="1" />\n\t</g>\n  </g>\n</svg>',
      icon: 'activity/task.png',
      groups: ['BPMN.STENCILS.GROUPS.STRUCTURAL'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'callactivitycompleteasyncpackage',
        'executionlistenerspackage',
        'callactivitycalledelementpackage',
        'callactivitycalledelementtypepackage',
        'callactivityinparameterspackage',
        'callactivityoutparameterspackage',
        'callactivityinheritvariablespackage',
        'callactivitysamedeploymentpackage',
        'callactivityfallbacktodefaulttenantpackage',
        'callactivityidvariablenamepackage',
        'callactivityprocessinstancenamepackage',
        'callactivityinheritbusinesskeypackage',
        'callactivitybusinesskeypackage',
        'callactivityuselocalscopeforoutparameterspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'isforcompensationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['Activity', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'ExclusiveGateway',
      title: 'BPMN.STENCILS.EXCLUSIVEGATEWAY.TITLE',
      description: 'BPMN.STENCILS.EXCLUSIVEGATEWAY.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n  <defs\n     id="defs4" />\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\t\t\t\t\t\n  <g>\n  \n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <g\n       id="cross">\n      <path\n      \tid="crosspath"\n      \tstroke="#585858"\n      \tfill="#585858"\n        d="M 8.75,7.55 L 12.75,7.55 L 23.15,24.45 L 19.25,24.45 z"\n        style="stroke-width:1" />\n      <path\n      \tid="crosspath2"\n      \tstroke="#585858"\n      \tfill="#585858"\n        d="M 8.75,24.45 L 19.25,7.55 L 23.15,7.55 L 12.75,24.45 z"\n        style="stroke-width:1" />\n    </g>\n\t\n\t<text id="text_name" x="26" y="26" oryx:align="left top"/>\n\t\n  </g>\n</svg>\n',
      icon: 'gateway/exclusive.databased.png',
      groups: ['BPMN.STENCILS.GROUPS.GATEWAYS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'GatewaysMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'ParallelGateway',
      title: 'BPMN.STENCILS.PARALLELGATEWAY.TITLE',
      description: 'BPMN.STENCILS.PARALLELGATEWAY.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n   \n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\n  <g>\n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <path\n       d="M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75"\n       id="path9"\n       stroke="#585858"\n       style="fill:none;stroke-width:3" />\n    \n\t<text id="text_name" x="26" y="26" oryx:align="left top"/>\n\t\n  </g>\n</svg>\n',
      icon: 'gateway/parallel.png',
      groups: ['BPMN.STENCILS.GROUPS.GATEWAYS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'GatewaysMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'InclusiveGateway',
      title: 'BPMN.STENCILS.INCLUSIVEGATEWAY.TITLE',
      description: 'BPMN.STENCILS.INCLUSIVEGATEWAY.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\n  <g>\n\n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <circle\n    \tid="circle"\n    \tstroke="#585858"\n\t\tcx="16"\n\t\tcy="16"\n\t\tr="9.75"\n\t\tstyle="fill:none;stroke-width:2.5" />\n    \n\t<text id="text_name" x="26" y="26" oryx:align="left top"/>\n\t\n  </g>\n</svg>\n',
      icon: 'gateway/inclusive.png',
      groups: ['BPMN.STENCILS.GROUPS.GATEWAYS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'GatewaysMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EventGateway',
      title: 'BPMN.STENCILS.EVENTGATEWAY.TITLE',
      description: 'BPMN.STENCILS.EVENTGATEWAY.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\n  <g\n     id="g1027">\n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <circle\n       id="circle"\n       cx="16"\n       cy="16"\n       r="10.4"\n       stroke="#585858"\n       style="fill:none;stroke-width:0.5" />\n    <circle\n       id="circle2"\n       cx="16"\n       cy="16"\n       r="11.7"\n       stroke="#585858"\n       style="fill:none;stroke-width:0.5" />\n    <path\n       d="M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549 L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z"\n       id="middlePolygon"\n       stroke="#585858"\n       style="fill:none;fill-opacity:1;stroke-width:1.39999998;stroke-linejoin:bevel;stroke-opacity:1" />\n    <g\n       id="instantiate">\n      <path\n         d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n         id="bg_frame2"\n         fill="#ffffff"\n         stroke="#585858"\n         style="stroke-width:1" />\n      <circle\n         id="circle3"\n         cx="16"\n         cy="16"\n         r="11"\n         stroke="#585858"\n         style="fill:none;stroke-width:1" />\n      <path\n         d="M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549 L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z"\n         id="middlePolygon2"\n         stroke="#585858"\n         style="fill:none;fill-opacity:1;stroke-width:1.39999998;stroke-linejoin:bevel;stroke-opacity:1" />\n      <g\n         id="parallel">\n        <path\n           d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n           id="bg_frame3"\n           style="stroke-width:1"\n           stroke="#585858"\n           fill="#ffffff" />\n\n        <path\n           style="fill:none;stroke-width:1.5"\n           stroke="#585858"\n           d="m 16.128163,8.1671486 7.721331,5.6098764 -2.949286,9.076969 -9.544091,0 -2.9492862,-9.07697 z"/>\n        <circle     \n           cx="16"\n           cy="16"\n           r="11.5"\n           stroke="#585858"\n           style="fill:none;stroke:#000000;stroke-width:0.4;"\n           />\n        <circle \n           cx="16"\n           cy="16"\n           r="10.5"\n           stroke="#585858"\n           style="fill:none;stroke-width:0.4;" />\n      </g>\n    </g>\n    <text\n       id="text_name"\n       x="26"\n       y="26"\n       oryx:align="left top" />\n  </g>\n\n</svg>\n',
      icon: 'gateway/eventbased.png',
      groups: ['BPMN.STENCILS.GROUPS.GATEWAYS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'GatewaysMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'BoundaryErrorEvent',
      title: 'BPMN.STENCILS.BOUNDARYERROREVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYERROREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path\n         stroke="#585858"\n         style="fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z"\n         id="errorPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/error.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'errorrefpackage',
        'errorvariablepackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryEscalationEvent',
      title: 'BPMN.STENCILS.BOUNDARYESCALATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYESCALATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path\n         stroke="#585858"\n         style="fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 16,8.75 L22,23.75 L16,17 L10,23.75z"\n         id="escalationPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/escalation.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'escalationrefpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryTimerEvent',
      title: 'BPMN.STENCILS.BOUNDARYTIMEREVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYTIMEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path id="path1" transform="translate(6,6)"\n    \td="M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z "  \n    \tfill="#585858" stroke="none" />\n    \t\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/timer.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'timercycledefinitionpackage',
        'timerdatedefinitionpackage',
        'timerdurationdefinitionpackage',
        'timerenddatedefinitionpackage',
        'cancelactivitypackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundarySignalEvent',
      title: 'BPMN.STENCILS.BOUNDARYSIGNALEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYSIGNALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n\t<path\n\t   id="signalCatching"\n\t   stroke="#585858"\n       d="M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z"\n       style="fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/signal.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'signalrefpackage',
        'signalexpressionpackage',
        'cancelactivitypackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryMessageEvent',
      title: 'BPMN.STENCILS.BOUNDARYMESSAGEEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYMESSAGEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(7,7)" id="path1" stroke="none" fill="#585858" stroke-width="1" d="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/message.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'messagerefpackage',
        'messageexpressionpackage',
        'cancelactivitypackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryCancelEvent',
      title: 'BPMN.STENCILS.BOUNDARYCANCELEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYCANCELEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n  \n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path\n       d="M 7.2839105,10.27369 L 10.151395,7.4062062 L 15.886362,13.141174 L 21.621331,7.4062056 L 24.488814,10.273689 L 18.753846,16.008657 L 24.488815,21.743626 L 21.621331,24.611111 L 15.886362,18.876142 L 10.151394,24.611109 L 7.283911,21.743625 L 13.018878,16.008658 L 7.2839105,10.27369 z"\n       id="cancelCross" fill="none" stroke="#585858" stroke-width="1.7" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/cancel.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryEventRegistryEvent',
      title: 'BPMN.STENCILS.BOUNDARYEVENTREGISTRYEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYEVENTREGISTRYEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(7,7)" id="path1" stroke="none" fill="#585858" stroke-width="1" d="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/message.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'messagerefpackage',
        'messageexpressionpackage',
        'cancelactivitypackage',
        'eventregistryeventpackage',
        'eventregistryeventnamepackage',
        'eventregistryoutparameterspackage',
        'eventregistrycorrelationpackage',
        'eventregistrychannelkeypackage',
        'eventregistrychannelnamepackage',
        'eventregistrychanneltypepackage',
        'eventregistrychanneldestinationpackage',
        'eventregistrykeydetectionfixedvaluepackage',
        'eventregistrykeydetectionjsonfieldpackage',
        'eventregistrykeydetectionjsonpointerpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryVariableListenerEvent',
      title: 'BPMN.STENCILS.BOUNDARYVARIABLELISTENEREVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYVARIABLELISTENEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(0,0)" id="path1" stroke="#585858" fill="none" stroke-width="1" d="M 20.834856,22.874369 L 10.762008,22.873529 L 7.650126,13.293421 L 15.799725,7.3734296 L 23.948336,13.294781 L 20.834856,22.874369 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/multiple.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'variablelistenervariablenamepackage',
        'variablelistenervariablechangetypepackage',
        'cancelactivitypackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryConditionalEvent',
      title: 'BPMN.STENCILS.BOUNDARYCONDITIONALEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYCONDITIONALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n  \n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path\n       d="M 10 10 L 22 10 M 10 14 L 22 14 M 10 18 L 22 18 M 10 22 L 22 22"\n       id="conditionalIcon" fill="none" stroke="#585858" stroke-width="1.7" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/conditional.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'conditionaleventpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'sequence_start',
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
      ],
    },
    {
      type: 'node',
      id: 'BoundaryCompensationEvent',
      title: 'BPMN.STENCILS.BOUNDARYCOMPENSATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.BOUNDARYCOMPENSATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n\t\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    \n    <polygon id="poly1" stroke="#585858" fill="none" stroke-width="1.4" points="15,9 15,23 8,16" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" />\n    <polygon id="poly2" stroke="#585858" fill="none" stroke-width="1.4" points="22,9 22,23 15,16" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n </g>\n</svg>',
      icon: 'catching/compensation.png',
      groups: ['BPMN.STENCILS.GROUPS.BOUNDARYEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: [
        'BoundaryEventsMorph',
        'IntermediateEventOnActivityBoundary',
        'all',
      ],
    },
    {
      type: 'node',
      id: 'CatchTimerEvent',
      title: 'BPMN.STENCILS.CATCHTIMEREVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHTIMEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n    <path id="path1" transform="translate(6,6)"\n    \td="M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z "  \n    \tfill="#585858" stroke="none" />\n    \t\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/timer.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'timercycledefinitionpackage',
        'timerdatedefinitionpackage',
        'timerdurationdefinitionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'CatchSignalEvent',
      title: 'BPMN.STENCILS.CATCHSIGNALEVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHSIGNALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n\t<path\n\t   id="signalCatching"\n\t   stroke="#585858"\n       d="M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z"\n       style="fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/signal.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'signalrefpackage',
        'signalexpressionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'CatchMessageEvent',
      title: 'BPMN.STENCILS.CATCHMESSAGEEVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHMESSAGEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(7,7)" id="path1" stroke="#585858" fill="none" stroke-width="1" d="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/message.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'messagerefpackage',
        'messageexpressionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'CatchConditionalEvent',
      title: 'BPMN.STENCILS.CATCHCONDITIONALEVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHCONDITIONALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n\t<path\n\t   id="signalCatching"\n\t   stroke="#585858"\n       d="M 10 10 L 22 10 M 10 14 L 22 14 M 10 18 L 22 18 M 10 22 L 22 22"\n       style="fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'catching/conditional.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'conditionaleventpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'CatchEventRegistryEvent',
      title: 'BPMN.STENCILS.CATCHEVENTREGISTRYEVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHEVENTREGISTRYEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(7,7)" id="path1" stroke="#585858" fill="none" stroke-width="1" d="M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/message.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'cancelactivitypackage',
        'eventregistryeventpackage',
        'eventregistryeventnamepackage',
        'eventregistryoutparameterspackage',
        'eventregistrycorrelationpackage',
        'eventregistrychannelkeypackage',
        'eventregistrychannelnamepackage',
        'eventregistrychanneltypepackage',
        'eventregistrychanneldestinationpackage',
        'eventregistrykeydetectionfixedvaluepackage',
        'eventregistrykeydetectionjsonfieldpackage',
        'eventregistrykeydetectionjsonpointerpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'CatchVariableListenerEvent',
      title: 'BPMN.STENCILS.CATCHVARIABLELISTENEREVENT.TITLE',
      description: 'BPMN.STENCILS.CATCHVARIABLELISTENEREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle \n    \tid="bg_frame" \n    \tcx="16" \n    \tcy="16" \n    \tr="15" \n    \tstroke="#585858" \n    \tfill="#ffffff" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 5.5, 3" />\n    \t\n    <circle \n    \tid="frame2_non_interrupting" \n    \tcx="16" \n    \tcy="16" \n    \tr="12" \n    \tstroke="#585858" \n    \tfill="none" \n    \tstroke-width="1"\n    \tstyle="stroke-dasharray: 4.5, 3" />\n    \t\n    <circle id="frame" cx="16" cy="16" r="15" stroke="#585858" fill="none" stroke-width="1"/>\n    <circle id="frame2" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    \n\t<g id="messageCatching">\n\t\t<path transform="translate(0,0)" id="path1" stroke="#585858" fill="none" stroke-width="1" d="M 20.834856,22.874369 L 10.762008,22.873529 L 7.650126,13.293421 L 15.799725,7.3734296 L 23.948336,13.294781 L 20.834856,22.874369 z "/>\n\t</g>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n\t\n  </g>\n</svg>',
      icon: 'catching/multiple.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATECATCHINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'variablelistenervariablenamepackage',
        'variablelistenervariablechangetypepackage',
        'interruptingpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['sequence_start', 'sequence_end', 'CatchEventsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'ThrowNoneEvent',
      title: 'BPMN.STENCILS.THROWNONEEVENT.TITLE',
      description: 'BPMN.STENCILS.THROWNONEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n  \n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'throwing/none.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATETHROWINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'asynchronousdefinitionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ThrowEventsMorph', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'ThrowSignalEvent',
      title: 'BPMN.STENCILS.THROWSIGNALEVENT.TITLE',
      description: 'BPMN.STENCILS.THROWSIGNALEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    <path\n\t   id="signalThrowing"\n       d="M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z"\n       fill="#585858"\n       stroke="#585858"\n       style="stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'throwing/signal.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATETHROWINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'signalrefpackage',
        'signalexpressionpackage',
        'asynchronousdefinitionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ThrowEventsMorph', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'ThrowEscalationEvent',
      title: 'BPMN.STENCILS.THROWESCALATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.THROWESCALATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    <path\n\t   id="signalThrowing"\n       d="M 16,8.75 L22,23.75 L16,17 L10,23.75z"\n       fill="#585858"\n       stroke="#585858"\n       style="stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'throwing/escalation.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATETHROWINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'escalationrefpackage',
        'asynchronousdefinitionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ThrowEventsMorph', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'ThrowCompensationEvent',
      title: 'BPMN.STENCILS.THROWCOMPENSATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.THROWCOMPENSATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n    <circle id="frame" cx="16" cy="16" r="12" stroke="#585858" fill="none" stroke-width="1"/>\n    <path\n\t   id="escalationThrowing"\n       d="m 7.0,16 7,-6.5 0,13 z m 7.3,-0.4 8.7,-6.1 0,13 -8.7,-6.1 z" \n       fill="#585858"\n       stroke="#585858"\n       style="stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'throwing/compensation.png',
      groups: ['BPMN.STENCILS.GROUPS.INTERMEDIATETHROWINGEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'compensationactivityrefpackage',
        'executionlistenerspackage',
        'asynchronousdefinitionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ThrowEventsMorph', 'sequence_start', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EndNoneEvent',
      title: 'BPMN.STENCILS.ENDNONEEVENT.TITLE',
      description: 'BPMN.STENCILS.ENDNONEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'endevent/none.png',
      groups: ['BPMN.STENCILS.GROUPS.ENDEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['EndEventsMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EndErrorEvent',
      title: 'BPMN.STENCILS.ENDERROREVENT.TITLE',
      description: 'BPMN.STENCILS.ENDERROREVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n    \n    <path\n         fill="#585858"\n         stroke="#585858"\n         style="stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z"\n         id="errorPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'endevent/error.png',
      groups: ['BPMN.STENCILS.GROUPS.ENDEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'errorrefpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['EndEventsMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EndEscalationEvent',
      title: 'BPMN.STENCILS.ENDESCALATIONEVENT.TITLE',
      description: 'BPMN.STENCILS.ENDESCALATIONEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx="16" oryx:cy="16" />\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n    \n    <path\n         fill="#585858"\n         stroke="#585858"\n         style="stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10"\n         d="M 16,8.75 L22,23.75 L16,17 L10,23.75z"\n         id="escalationPolygon" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'endevent/escalation.png',
      groups: ['BPMN.STENCILS.GROUPS.ENDEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'escalationrefpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['EndEventsMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EndCancelEvent',
      title: 'BPMN.STENCILS.ENDCANCELEVENT.TITLE',
      description: 'BPMN.STENCILS.ENDCANCELEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n    \n    <path id="path1" d="M 9 9 L 23 23 M 9 23 L 23 9" fill="none" stroke="#585858" stroke-width="5" />\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'endevent/cancel.png',
      groups: ['BPMN.STENCILS.GROUPS.ENDEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['EndEventsMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'EndTerminateEvent',
      title: 'BPMN.STENCILS.ENDTERMINATEEVENT.TITLE',
      description: 'BPMN.STENCILS.ENDTERMINATEEVENT.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n    \n    <circle id="circle1" cx="16" cy="16" r="9" stroke="#585858" fill="#585858" stroke-width="1"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      icon: 'endevent/terminate.png',
      groups: ['BPMN.STENCILS.GROUPS.ENDEVENTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'terminateAllpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['EndEventsMorph', 'sequence_end', 'all'],
    },
    {
      type: 'node',
      id: 'Pool',
      title: 'BPMN.STENCILS.POOL.TITLE',
      description: 'BPMN.STENCILS.POOL.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="600"\n   height="250"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="0" oryx:cy="124" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="299" oryx:cy="249" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="599" oryx:cy="124" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="299" oryx:cy="0" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="299" oryx:cy="124" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="none" >\n    <defs>\n\t\t<radialGradient id="background" cx="0%" cy="10%" r="100%" fx="20%" fy="10%">\n\t\t\t<stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>\n\t\t\t<stop id="fill_el" offset="100%" stop-color="#ffffff" stop-opacity="1"/>\n\t\t</radialGradient>\n\t</defs>\n\t  \t\n  \t<rect\n  \t\tid="border"\n  \t\tclass="stripable-element-force"\n  \t\toryx:resize="vertical horizontal"\n  \t\tx="0"\n  \t\ty="0"\n  \t\twidth="600"\n  \t\theight="250"\n  \t\tfill="none"\n  \t\tstroke-width="9"\n  \t\tstroke="none"\n  \t\tvisibility="visible"\n  \t\tpointer-events="stroke"\n  \t/>\n    <rect\n    \tid="c"\n    \toryx:resize="vertical horizontal"\n    \tx="0"\n    \ty="0"\n    \twidth="600" \n    \theight="250" \n    \tstroke="black" \n    \tfill="url(#background) white"\n    \tfill-opacity="0.3" \n    />\n    \n\t<rect \n\t\tid="caption"\n\t\toryx:anchors="left top bottom"\n\t\tx="0"\n\t\ty="0"\n\t\twidth="30"\n\t\theight="250"\n\t\tstroke="black"\n\t\tstroke-width="1"\n\t\tfill="url(#background) white"\n\t\tpointer-events="all"\n\t/>\n\t\n\t<rect \n\t\tid="captionDisableAntialiasing"\n\t\toryx:anchors="left top bottom"\n\t\tx="0"\n\t\ty="0"\n\t\twidth="30"\n\t\theight="250"\n\t\tstroke="black"\n\t\tstroke-width="1"\n\t\tfill="url(#background) white"\n\t\tpointer-events="all"\n\t/>\n\t\n    <text x="13" y="125" font-size="12" id="text_name" oryx:fittoelem="caption" oryx:align="middle center" oryx:anchors="left" oryx:rotate="270" fill="black" stroke="black"></text>\n    \n  </g>\n</svg>',
      icon: 'swimlane/pool.png',
      groups: ['BPMN.STENCILS.GROUPS.SWIMLANES'],
      layout: [
        {
          type: 'layout.bpmn2_0.pool',
        },
      ],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'process_idpackage',
        'isexecutablepackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['canContainArtifacts', 'all'],
    },
    {
      type: 'node',
      id: 'Lane',
      title: 'BPMN.STENCILS.LANE.TITLE',
      description: 'BPMN.STENCILS.LANE.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="600"\n   height="250"\n   version="1.0">\n  <defs></defs>\n  <g pointer-events="none" >\n  \n     <defs>\n\t\t<radialGradient id="background" cx="0%" cy="10%" r="200%" fx="20%" fy="10%">\n\t\t\t<stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>\n\t\t\t<stop id="fill_el" offset="100%" stop-color="#ffffff" stop-opacity="0"/>\n\t\t</radialGradient>\n\t</defs>\n\t\n  \t<rect id="border_invisible" class="stripable-element-force" oryx:resize="vertical horizontal" x="0" y="0" width="600" height="250" fill="none" stroke-width="10" stroke="white" visibility="hidden" pointer-events="stroke"/>\t\t\n\t<rect id="border" oryx:resize="vertical horizontal" x="0" y="0" width="600" height="250" stroke="black" stroke-width="1" fill="url(#background) white" pointer-events="none" />\n\t\n\t\n\t<rect \n\t\tid="caption"\n\t\toryx:anchors="left top bottom"\n\t\tx="0"\n\t\ty="1"\n\t\twidth="30"\n\t\theight="248"\n\t\tstroke="black"\n\t\tstroke-width="0"\n\t\tfill="white"\n\t\tvisibility="hidden"\n\t\tclass="stripable-element-force"\n\t\tpointer-events="all"\n\t/>\n\t\n\t<path\n\t\tstroke="black"\n\t\tstroke-width="1"\n\t\tfill="none"\n\t\td="M 0,0 L 0,250"\n        oryx:anchors="left top bottom"\n        id="captionDisableAntialiasing"\n    />\n\t\n\t<!--rect \n\t\tid="captionDisableAntialiasing"\n\t\toryx:anchors="left top bottom"\n\t\tx="0"\n\t\ty="0"\n\t\twidth="30"\n\t\theight="250"\n\t\tstroke="black"\n\t\tstroke-width="1"\n\t\tfill="url(#background) white"\n\t/-->\n\t\n    <text \n\t\tx="13"\n\t\ty="125"\n\t\toryx:rotate="270" \n\t\tfont-size="12" \n\t\tid="text_name" \n\t\toryx:align="middle center" \n\t\toryx:anchors="left"\n\t\toryx:fittoelem="caption"\n\t\tfill="black" \n\t\tstroke="black">\n\t</text>\n  </g>\n</svg>',
      icon: 'swimlane/lane.png',
      groups: ['BPMN.STENCILS.GROUPS.SWIMLANES'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['PoolChild', 'canContainArtifacts', 'all'],
    },
    {
      type: 'edge',
      id: 'SequenceFlow',
      title: 'BPMN.STENCILS.SEQUENCEFLOW.TITLE',
      description: 'BPMN.STENCILS.SEQUENCEFLOW.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t  \t<marker id="start" refX="1" refY="5" markerUnits="userSpaceOnUse" markerWidth="17" markerHeight="11" orient="auto">\r\n\t  \t\t<!-- <path id="conditional"   d="M 0 6 L 8 1 L 15 5 L 8 9 L 1 5" fill="white" stroke="black" stroke-width="1" /> -->\r\n\t\t\t<path id="default" d="M 5 0 L 11 10" fill="white" stroke="#585858" stroke-width="1" />\r\n\t  \t</marker>\r\n\t  \t<marker id="end" refX="15" refY="6" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="12" orient="auto">\r\n\t  \t\t<path id="arrowhead" d="M 0 1 L 15 6 L 0 11z" fill="#585858" stroke="#585858" stroke-linejoin="round" stroke-width="2" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t\t<path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-start="url(#start)" marker-end="url(#end)" />\r\n\t\t<text id="text_name" x="0" y="0" oryx:edgePosition="startTop"/>\r\n\t</g>\r\n</svg>',
      icon: 'connector/sequenceflow.png',
      groups: ['BPMN.STENCILS.GROUPS.CONNECTINGOBJECTS'],
      layout: [
        {
          type: 'layout.bpmn2_0.sequenceflow',
        },
      ],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'conditionsequenceflowpackage',
        'executionlistenerspackage',
        'defaultflowpackage',
        'skipexpressionpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ConnectingObjectsMorph', 'all'],
    },
    {
      type: 'edge',
      id: 'MessageFlow',
      title: 'BPMN.STENCILS.MESSAGEFLOW.TITLE',
      description: 'BPMN.STENCILS.MESSAGEFLOW.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t\t<marker id="start" oryx:optional="yes" oryx:enabled="yes" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<!-- <path d="M 10 10 L 0 5 L 10 0" fill="none" stroke="#585858" /> -->\r\n\t  \t\t<circle id="arrowhead" cx="5" cy="5" r="5" fill="white" stroke="black" />\r\n\t  \t</marker>\r\n\r\n\t  \t<marker id="end" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<path id="arrowhead2" d="M 0 0 L 10 5 L 0 10 L 0 0" fill="white" stroke="#585858" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" marker-start="url(#start)" marker-end="url(#end)" />\r\n\t\t<text id="text_name" x="0" y="0" oryx:edgePosition="midTop"/>\r\n\t</g>\r\n</svg>',
      icon: 'connector/messageflow.png',
      groups: ['BPMN.STENCILS.GROUPS.CONNECTINGOBJECTS'],
      layout: [
        {
          type: 'layout.bpmn2_0.sequenceflow',
        },
      ],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ConnectingObjectsMorph', 'all'],
    },
    {
      type: 'edge',
      id: 'Association',
      title: 'BPMN.STENCILS.ASSOCIATION.TITLE',
      description: 'BPMN.STENCILS.ASSOCIATION.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" />\r\n\t\t<text id="name" x="0" y="0" oryx:edgePosition="midTop" oryx:offsetTop="6" style="font-size:9px;"/>\r\n\t</g>\r\n</svg>',
      icon: 'connector/association.undirected.png',
      groups: ['BPMN.STENCILS.GROUPS.CONNECTINGOBJECTS'],
      layout: [
        {
          type: 'layout.bpmn2_0.sequenceflow',
        },
      ],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ConnectingObjectsMorph', 'all'],
    },
    {
      type: 'edge',
      id: 'DataAssociation',
      title: 'BPMN.STENCILS.DATAASSOCIATION.TITLE',
      description: 'BPMN.STENCILS.DATAASSOCIATION.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t  \t<marker id="end" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<path id="arrowhead" d="M 0 0 L 10 5 L 0 10" fill="none" stroke="#585858" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" marker-end="url(#end)" />\r\n\t\t<text id="name" x="0" y="0" oryx:edgePosition="midTop" oryx:offsetTop="6" style="font-size:9px;"/>\r\n\t</g>\r\n</svg>',
      icon: 'connector/association.unidirectional.png',
      groups: ['BPMN.STENCILS.GROUPS.CONNECTINGOBJECTS'],
      layout: [
        {
          type: 'layout.bpmn2_0.sequenceflow',
        },
      ],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['ConnectingObjectsMorph', 'all'],
    },
    {
      type: 'node',
      id: 'TextAnnotation',
      title: 'BPMN.STENCILS.TEXTANNOTATION.TITLE',
      description: 'BPMN.STENCILS.TEXTANNOTATION.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="102"\n   height="51"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="2" oryx:cy="25" oryx:anchors="left" oryx:default="yes"/>\n  </oryx:magnets>\n  <g pointer-events="all" oryx:minimumSize="10 20" oryx:maximumSize="" >\n  <rect \n\tid="textannotationrect"\n\toryx:resize="vertical horizontal"\n\tx="1" \n\ty="1"\n\twidth="100"\n\theight="50"\n\tstroke="none"\n\tfill="none" />\n  <path \n  \tid = "frame"\n\td="M20,1 L1,1 L1,50 L20,50" \n\toryx:anchors="top bottom left" \n\tstroke="#585858" \n\tfill="none" \n\tstroke-width="1" />\n    \n    <text \n\t\tfont-size="12" \n\t\tid="text" \n\t\tx="5" \n\t\ty="25" \n\t\toryx:align="middle left"\n\t\toryx:fittoelem="textannotationrect"\n\t\toryx:anchors="left"\n\t\tstroke="#373e48">\n\t</text>\n  </g>\n</svg>',
      icon: 'artifact/text.annotation.png',
      groups: ['BPMN.STENCILS.GROUPS.ARTIFACTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'textpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['all'],
    },
    {
      type: 'node',
      id: 'DataStore',
      title: 'BPMN.STENCILS.DATASTORE.TITLE',
      description: 'BPMN.STENCILS.DATASTORE.DESCRIPTION',
      view: '<?xml version="1.0" encoding="utf-8" standalone="no" ?>\r\n<svg \r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:svg="http://www.w3.org/2000/svg"\r\n   \txmlns:oryx="http://www.b3mn.org/oryx"\r\n   \txmlns:xlink="http://www.w3.org/1999/xlink"\r\n\t\r\n\twidth="63.001px" \r\n\theight="61.173px"\r\n\tversion="1.0">\r\n\t<defs></defs>\r\n\t<oryx:magnets>\r\n\t\t<oryx:magnet oryx:cx="0" oryx:cy="30.5865" oryx:anchors="left" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="61.173" oryx:anchors="bottom" />\r\n\t\t<oryx:magnet oryx:cx="63.001" oryx:cy="30.5865" oryx:anchors="right" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="0" oryx:anchors="top" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="30.5865" oryx:default="yes" />\r\n\t</oryx:magnets>\r\n\t\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<radialGradient id="background" cx="30%" cy="30%" r="50%" fx="0%" fy="0%">\r\n\t\t\t\t<stop offset="0%" stop-color="#ffffff" stop-opacity="1"></stop>\r\n\t\t\t\t<stop offset="100%" stop-color="#ffffff" stop-opacity="1" id="fill_el"></stop>\r\n\t\t\t</radialGradient>\r\n\t\t</defs>\r\n\t\t\r\n\t\t<path id="bg_frame" fill="url(#background) #ffffff" stroke="#000000" d="M31.634,0.662c20.013,0,31.292,3.05,31.292,5.729c0,2.678,0,45.096,0,48.244\r\n\t\t\tc0,3.148-16.42,6.2-31.388,6.2c-14.968,0-30.613-2.955-30.613-6.298c0-3.342,0-45.728,0-48.05\r\n\t\t\tC0.925,4.165,11.622,0.662,31.634,0.662z"/>\r\n\t\t<path id="bg_frame2" fill="none" stroke="#000000" d="\r\n\t\t\tM62.926,15.69c0,1.986-3.62,6.551-31.267,6.551c-27.646,0-30.734-4.686-30.734-6.454 M0.925,11.137\r\n\t\t\tc0,1.769,3.088,6.455,30.734,6.455c27.647,0,31.267-4.565,31.267-6.551 M0.925,6.487c0,2.35,3.088,6.455,30.734,6.455\r\n\t\t\tc27.647,0,31.267-3.912,31.267-6.552 M62.926,6.391v4.844 M0.949,6.391v4.844 M62.926,11.041v4.844 M0.949,11.041v4.844"/>\r\n\t\t\t \t\r\n\t\t<text font-size="12" id="text_name" x="31" y="66" oryx:align="center top" stroke="black" />\r\n\t\t\t \r\n\t</g>\r\n</svg>\r\n',
      icon: 'dataobject/data.store.png',
      groups: ['BPMN.STENCILS.GROUPS.ARTIFACTS'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['all'],
    },
    {
      type: 'node',
      id: 'AdhocSubProcess',
      title: 'BPMN.STENCILS.ADHOCSUBPROCESS.TITLE',
      description: 'BPMN.STENCILS.ADHOCSUBPROCESS.DESCRIPTION',
      view: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="200"\n   height="160"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="50" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="80" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="110" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="159" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="199" oryx:cy="50" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="80" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="110" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="100" oryx:cy="80" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="120 100" oryx:maximumSize="" >\n    <rect id="text_frame" oryx:anchors="bottom top right left" x="0" y="0" width="190" height="160" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:anchors="bottom top right left" x="0" y="0" width="200" height="160" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#ffffff" />\n\t<text \n\t\tfont-size="12" \n\t\tid="text_name" \n\t\tx="8" \n\t\ty="10" \n\t\toryx:align="top left"\n\t\toryx:fittoelem="text_frame"\n\t\toryx:anchors="left top" \n\t\tstroke="#373e48">\n\t</text>\n\t\n\t<text \n\t\toryx:anchors="bottom"\n\t\tx="101"\n\t\ty="157"\n\t\tfont-size="20"\n\t\ttransform="translate(8,0)"\n\t>~</text>\n  </g>\n</svg>',
      icon: 'activity/adhoc.subprocess.png',
      groups: ['BPMN.STENCILS.GROUPS.STRUCTURAL'],
      propertyPackages: [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'completionconditionpackage',
        'orderingpackage',
        'cancelremaininginstancespackage',
      ],
      hiddenPropertyPackages: [],
      roles: ['Activity', 'sequence_start', 'sequence_end', 'all'],
    },
  ],
  rules: {
    cardinalityRules: [
      {
        role: 'Startevents_all',
        incomingEdges: [
          {
            role: 'SequenceFlow',
            maximum: 0,
          },
        ],
      },
      {
        role: 'Endevents_all',
        outgoingEdges: [
          {
            role: 'SequenceFlow',
            maximum: 0,
          },
        ],
      },
    ],
    connectionRules: [
      {
        role: 'SequenceFlow',
        connects: [
          {
            from: 'sequence_start',
            to: ['sequence_end'],
          },
        ],
      },
      {
        role: 'Association',
        connects: [
          {
            from: 'sequence_start',
            to: ['TextAnnotation'],
          },
          {
            from: 'sequence_end',
            to: ['TextAnnotation'],
          },
          {
            from: 'TextAnnotation',
            to: ['sequence_end'],
          },
          {
            from: 'BoundaryCompensationEvent',
            to: ['sequence_end'],
          },
          {
            from: 'TextAnnotation',
            to: ['sequence_start'],
          },
          {
            from: 'BoundaryCompensationEvent',
            to: ['sequence_start'],
          },
        ],
      },
      {
        role: 'DataAssociation',
        connects: [
          {
            from: 'sequence_start',
            to: ['DataStore'],
          },
          {
            from: 'sequence_end',
            to: ['DataStore'],
          },
          {
            from: 'DataStore',
            to: ['sequence_end'],
          },
          {
            from: 'DataStore',
            to: ['sequence_start'],
          },
        ],
      },
      {
        role: 'IntermediateEventOnActivityBoundary',
        connects: [
          {
            from: 'Activity',
            to: ['IntermediateEventOnActivityBoundary'],
          },
        ],
      },
    ],
    containmentRules: [
      {
        role: 'BPMNDiagram',
        contains: ['all'],
      },
      {
        role: 'SubProcess',
        contains: [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'EventSubProcess',
          'TextAnnotation',
          'DataStore',
        ],
      },
      {
        role: 'AdhocSubProcess',
        contains: [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'TextAnnotation',
          'DataStore',
        ],
      },
      {
        role: 'EventSubProcess',
        contains: [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'TextAnnotation',
          'DataStore',
        ],
      },
      {
        role: 'Pool',
        contains: ['Lane'],
      },
      {
        role: 'Lane',
        contains: [
          'sequence_start',
          'sequence_end',
          'EventSubProcess',
          'TextAnnotation',
          'DataStore',
        ],
      },
    ],
    morphingRules: [
      {
        role: 'ActivitiesMorph',
        baseMorphs: ['UserTask'],
        preserveBounds: true,
      },
      {
        role: 'GatewaysMorph',
        baseMorphs: ['ExclusiveGateway'],
      },
      {
        role: 'StartEventsMorph',
        baseMorphs: ['StartNoneEvent'],
      },
      {
        role: 'EndEventsMorph',
        baseMorphs: ['StartNoneEvent'],
      },
      {
        role: 'CatchEventsMorph',
        baseMorphs: ['CatchTimerEvent'],
      },
      {
        role: 'ThrowEventsMorph',
        baseMorphs: ['ThrowNoneEvent'],
      },
      {
        role: 'BoundaryEventsMorph',
        baseMorphs: ['ThrowNoneEvent'],
      },
      {
        role: 'BoundaryCompensationEvent',
        baseMorphs: ['BoundaryCompensationEvent'],
      },
      {
        role: 'TextAnnotation',
        baseMorphs: ['TextAnnotation'],
      },
      {
        role: 'DataStore',
        baseMorphs: ['DataStore'],
      },
    ],
  },
};
