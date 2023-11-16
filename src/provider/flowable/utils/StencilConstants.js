// stencil items
export const STENCIL_EVENT_START_NONE = 'StartNoneEvent';
export const STENCIL_EVENT_START_TIMER = 'StartTimerEvent';
export const STENCIL_EVENT_START_MESSAGE = 'StartMessageEvent';
export const STENCIL_EVENT_START_SIGNAL = 'StartSignalEvent';
export const STENCIL_EVENT_START_ERROR = 'StartErrorEvent';
export const STENCIL_EVENT_START_EVENT_REGISTRY = 'StartEventRegistryEvent';
export const STENCIL_EVENT_START_VARIABLE_LISTENER =
  'StartVariableListenerEvent';
export const STENCIL_EVENT_START_CONDITIONAL = 'StartConditionalEvent';
export const STENCIL_EVENT_START_ESCALATION = 'StartEscalationEvent';

export const STENCIL_EVENT_END_NONE = 'EndNoneEvent';
export const STENCIL_EVENT_END_ERROR = 'EndErrorEvent';
export const STENCIL_EVENT_END_ESCALATION = 'EndEscalationEvent';
export const STENCIL_EVENT_END_CANCEL = 'EndCancelEvent';
export const STENCIL_EVENT_END_TERMINATE = 'EndTerminateEvent';

export const STENCIL_SUB_PROCESS = 'SubProcess';
export const STENCIL_COLLAPSED_SUB_PROCESS = 'CollapsedSubProcess';
export const STENCIL_EVENT_SUB_PROCESS = 'EventSubProcess';
export const STENCIL_ADHOC_SUB_PROCESS = 'AdhocSubProcess';
export const STENCIL_CALL_ACTIVITY = 'CallActivity';

export const STENCIL_POOL = 'Pool';
export const STENCIL_LANE = 'Lane';

export const STENCIL_TASK_BUSINESS_RULE = 'BusinessRule';
export const STENCIL_TASK_MAIL = 'MailTask';
export const STENCIL_TASK_MANUAL = 'ManualTask';
export const STENCIL_TASK_RECEIVE = 'ReceiveTask';
export const STENCIL_TASK_RECEIVE_EVENT = 'ReceiveEventTask';
export const STENCIL_TASK_SCRIPT = 'ScriptTask';
export const STENCIL_TASK_SEND = 'SendTask';
export const STENCIL_TASK_SERVICE = 'ServiceTask';
export const STENCIL_TASK_USER = 'UserTask';
export const STENCIL_TASK_CAMEL = 'CamelTask';
export const STENCIL_TASK_MULE = 'MuleTask';
export const STENCIL_TASK_HTTP = 'HttpTask';
export const STENCIL_TASK_SEND_EVENT = 'SendEventTask';
export const STENCIL_TASK_EXTERNAL_WORKER = 'ExternalWorkerTask';
export const STENCIL_TASK_SHELL = 'ShellTask';
export const STENCIL_TASK_DECISION = 'DecisionTask';

export const STENCIL_GATEWAY_EXCLUSIVE = 'ExclusiveGateway';
export const STENCIL_GATEWAY_PARALLEL = 'ParallelGateway';
export const STENCIL_GATEWAY_INCLUSIVE = 'InclusiveGateway';
export const STENCIL_GATEWAY_EVENT = 'EventGateway';

export const STENCIL_EVENT_BOUNDARY_TIMER = 'BoundaryTimerEvent';
export const STENCIL_EVENT_BOUNDARY_ERROR = 'BoundaryErrorEvent';
export const STENCIL_EVENT_BOUNDARY_CONDITIONAL = 'BoundaryConditionalEvent';
export const STENCIL_EVENT_BOUNDARY_ESCALATION = 'BoundaryEscalationEvent';
export const STENCIL_EVENT_BOUNDARY_SIGNAL = 'BoundarySignalEvent';
export const STENCIL_EVENT_BOUNDARY_MESSAGE = 'BoundaryMessageEvent';
export const STENCIL_EVENT_BOUNDARY_EVENT_REGISTRY =
  'BoundaryEventRegistryEvent';
export const STENCIL_EVENT_BOUNDARY_VARIABLE_LISTENER =
  'BoundaryVariableListenerEvent';
export const STENCIL_EVENT_BOUNDARY_CANCEL = 'BoundaryCancelEvent';
export const STENCIL_EVENT_BOUNDARY_COMPENSATION = 'BoundaryCompensationEvent';

export const STENCIL_EVENT_CATCH_SIGNAL = 'CatchSignalEvent';
export const STENCIL_EVENT_CATCH_TIMER = 'CatchTimerEvent';
export const STENCIL_EVENT_CATCH_MESSAGE = 'CatchMessageEvent';
export const STENCIL_EVENT_CATCH_CONDITIONAL = 'CatchConditionalEvent';
export const STENCIL_EVENT_CATCH_EVENT_REGISTRY = 'CatchEventRegistryEvent';
export const STENCIL_EVENT_CATCH_VARIABLE_LISTENER =
  'CatchVariableListenerEvent';

export const STENCIL_EVENT_THROW_SIGNAL = 'ThrowSignalEvent';
export const STENCIL_EVENT_THROW_ESCALATION = 'ThrowEscalationEvent';
export const STENCIL_EVENT_THROW_NONE = 'ThrowNoneEvent';
export const STENCIL_EVENT_THROW_COMPENSATION = 'ThrowCompensationEvent';

export const STENCIL_SEQUENCE_FLOW = 'SequenceFlow';
export const STENCIL_MESSAGE_FLOW = 'MessageFlow';
export const STENCIL_ASSOCIATION = 'Association';
export const STENCIL_DATA_ASSOCIATION = 'DataAssociation';

export const STENCIL_TEXT_ANNOTATION = 'TextAnnotation';
export const STENCIL_DATA_STORE = 'DataStore';

export const PROPERTY_VALUE_YES = 'Yes';
export const PROPERTY_VALUE_NO = 'No';

// stencil properties
export const PROPERTY_OVERRIDE_ID = 'overrideid';
export const PROPERTY_NAME = 'name';
export const PROPERTY_DOCUMENTATION = 'documentation';

export const PROPERTY_PROCESS_ID = 'process_id';
export const PROPERTY_PROCESS_VERSION = 'process_version';
export const PROPERTY_PROCESS_AUTHOR = 'process_author';
export const PROPERTY_PROCESS_NAMESPACE = 'process_namespace';
export const PROPERTY_PROCESS_HISTORYLEVEL = 'process_historylevel';

export const PROPERTY_IS_EXECUTABLE = 'isexecutable';
export const PROPERTY_IS_EAGER_EXECUTION_FETCHING = 'iseagerexecutionfetch';

export const PROPERTY_PROCESS_POTENTIALSTARTERUSER =
  'process_potentialstarteruser';
export const PROPERTY_PROCESS_POTENTIALSTARTERGROUP =
  'process_potentialstartergroup';

export const PROPERTY_TIMER_DURATON = 'timerdurationdefinition';
export const PROPERTY_TIMER_DATE = 'timerdatedefinition';
export const PROPERTY_TIMER_CYCLE = 'timercycledefinition';
export const PROPERTY_TIMER_CYCLE_END_DATE = 'timerenddatedefinition';
export const PROPERTY_CALENDAR_NAME = 'calendarname';

export const PROPERTY_MESSAGES = 'messages';
export const PROPERTY_MESSAGE_ID = 'message_id';
export const PROPERTY_MESSAGE_NAME = 'message_name';
export const PROPERTY_MESSAGE_ITEM_REF = 'message_item_ref';

export const PROPERTY_MESSAGEREF = 'messageref';
export const PROPERTY_MESSAGEEXPRESSION = 'messageexpression';

export const PROPERTY_SIGNALREF = 'signalref';
export const PROPERTY_SIGNALEXPRESSION = 'signalexpression';

export const PROPERTY_VARIABLE_LISTENER_VARIABLE_NAME =
  'variablelistenervariablename';
export const PROPERTY_VARIABLE_LISTENER_VARIABLE_CHANGE_TYPE =
  'variablelistenervariablechangetype';

export const PROPERTY_CONDITIONAL_EVENT_CONDITION = 'conditionaleventcondition';

export const PROPERTY_ERRORREF = 'errorref';
export const PROPERTY_ERROR_VARIABLE_NAME = 'errorvariablename';
export const PROPERTY_ERROR_VARIABLE_TRANSIENT = 'errorvariabletransient';
export const PROPERTY_ERROR_VARIABLE_LOCAL_SCOPE = 'errorvariablelocalscope';

export const PROPERTY_ESCALATION_DEFINITIONS = 'escalationdefinitions';
export const PROPERTY_ESCALATION_DEFINITION_ID = 'id';
export const PROPERTY_ESCALATION_DEFINITION_NAME = 'name';
export const PROPERTY_ESCALATIONREF = 'escalationref';

export const PROPERTY_INTERRUPTING = 'interrupting';

export const PROPERTY_CANCEL_ACTIVITY = 'cancelactivity';

export const PROPERTY_NONE_STARTEVENT_INITIATOR = 'initiator';

export const PROPERTY_ASYNCHRONOUS = 'asynchronousdefinition';
export const PROPERTY_EXCLUSIVE = 'exclusivedefinition';

export const PROPERTY_MULTIINSTANCE_TYPE = 'multiinstance_type';
export const PROPERTY_MULTIINSTANCE_CARDINALITY = 'multiinstance_cardinality';
export const PROPERTY_MULTIINSTANCE_COLLECTION = 'multiinstance_collection';
export const PROPERTY_MULTIINSTANCE_VARIABLE = 'multiinstance_variable';
export const PROPERTY_MULTIINSTANCE_CONDITION = 'multiinstance_condition';
export const PROPERTY_MULTIINSTANCE_INDEX_VARIABLE =
  'multiinstance_index_variable';
export const PROPERTY_MULTIINSTANCE_VARIABLE_AGGREGATIONS =
  'multiinstance_variableaggregations';

export const PROPERTY_TASK_LISTENERS = 'tasklisteners';
export const PROPERTY_EXECUTION_LISTENERS = 'executionlisteners';
export const PROPERTY_LISTENER_EVENT = 'event';
export const PROPERTY_LISTENER_CLASS_NAME = 'className';
export const PROPERTY_LISTENER_EXPRESSION = 'expression';
export const PROPERTY_LISTENER_DELEGATE_EXPRESSION = 'delegateExpression';
export const PROPERTY_LISTENER_FIELDS = 'fields';

export const PROPERTY_EVENT_LISTENERS = 'eventlisteners';
export const PROPERTY_EVENTLISTENER_VALUE = 'eventListeners';
export const PROPERTY_EVENTLISTENER_EVENTS = 'events';
export const PROPERTY_EVENTLISTENER_EVENT = 'event';
export const PROPERTY_EVENTLISTENER_IMPLEMENTATION = 'implementation';
export const PROPERTY_EVENTLISTENER_RETHROW_EVENT = 'rethrowEvent';
export const PROPERTY_EVENTLISTENER_RETHROW_TYPE = 'rethrowType';
export const PROPERTY_EVENTLISTENER_CLASS_NAME = 'className';
export const PROPERTY_EVENTLISTENER_DELEGATE_EXPRESSION = 'delegateExpression';
export const PROPERTY_EVENTLISTENER_ENTITY_TYPE = 'entityType';
export const PROPERTY_EVENTLISTENER_ERROR_CODE = 'errorcode';
export const PROPERTY_EVENTLISTENER_SIGNAL_NAME = 'signalname';
export const PROPERTY_EVENTLISTENER_MESSAGE_NAME = 'messagename';

export const PROPERTY_FIELD_NAME = 'name';
export const PROPERTY_FIELD_STRING_VALUE = 'stringValue';
export const PROPERTY_FIELD_EXPRESSION = 'expression';
export const PROPERTY_FIELD_STRING = 'string';

export const PROPERTY_FORMKEY = 'formkeydefinition';
export const PROPERTY_FORM_FIELD_VALIDATION = 'formfieldvalidation';

export const PROPERTY_USERTASK_ASSIGNMENT = 'usertaskassignment';
export const PROPERTY_USERTASK_PRIORITY = 'prioritydefinition';
export const PROPERTY_USERTASK_DUEDATE = 'duedatedefinition';
export const PROPERTY_USERTASK_ASSIGNEE = 'assignee';
export const PROPERTY_USERTASK_OWNER = 'owner';
export const PROPERTY_USERTASK_CANDIDATE_USERS = 'candidateUsers';
export const PROPERTY_USERTASK_CANDIDATE_GROUPS = 'candidateGroups';
export const PROPERTY_USERTASK_CATEGORY = 'categorydefinition';
export const PROPERTY_USERTASK_TASK_ID_VARIABLE_NAME = 'taskidvariablename';

export const PROPERTY_SERVICETASK_CLASS = 'servicetaskclass';
export const PROPERTY_SERVICETASK_EXPRESSION = 'servicetaskexpression';
export const PROPERTY_SERVICETASK_DELEGATE_EXPRESSION =
  'servicetaskdelegateexpression';
export const PROPERTY_SERVICETASK_RESULT_VARIABLE = 'servicetaskresultvariable';
export const PROPERTY_SERVICETASK_EXCEPTIONS = 'servicetaskexceptions';
export const PROPERTY_SERVICETASK_EXCEPTION_CLASS = 'class';
export const PROPERTY_SERVICETASK_EXCEPTION_CODE = 'code';
export const PROPERTY_SERVICETASK_EXCEPTION_CHILDREN = 'children';
export const PROPERTY_SERVICETASK_FIELDS = 'servicetaskfields';
export const PROPERTY_SERVICETASK_FIELD_NAME = 'name';
export const PROPERTY_SERVICETASK_FIELD_STRING_VALUE = 'stringValue';
export const PROPERTY_SERVICETASK_FIELD_STRING = 'string';
export const PROPERTY_SERVICETASK_FIELD_EXPRESSION = 'expression';
export const PROPERTY_SERVICETASK_TRIGGERABLE = 'servicetasktriggerable';
export const PROPERTY_SERVICETASK_USE_LOCAL_SCOPE_FOR_RESULT_VARIABLE =
  'servicetaskuselocalscopeforresultvariable';
export const PROPERTY_SERVICETASK_FAILED_JOB_RETRY_TIME_CYCLE =
  'servicetaskfailedjobretrytimecycle';
export const PROPERTY_SERVICETASK_STORE_TRANSIENT_VARIABLE =
  'servicetaskstoreresultvariabletransient';

export const PROPERTY_FORM_PROPERTIES = 'formproperties';
export const PROPERTY_FORM_ID = 'id';
export const PROPERTY_FORM_NAME = 'name';
export const PROPERTY_FORM_TYPE = 'type';
export const PROPERTY_FORM_EXPRESSION = 'expression';
export const PROPERTY_FORM_VARIABLE = 'variable';
export const PROPERTY_FORM_DEFAULT = 'default';
export const PROPERTY_FORM_DATE_PATTERN = 'datePattern';
export const PROPERTY_FORM_REQUIRED = 'required';
export const PROPERTY_FORM_READABLE = 'readable';
export const PROPERTY_FORM_WRITABLE = 'writable';
export const PROPERTY_FORM_ENUM_VALUES = 'enumValues';
export const PROPERTY_FORM_ENUM_VALUES_NAME = 'name';
export const PROPERTY_FORM_ENUM_VALUES_ID = 'id';

export const PROPERTY_DATA_PROPERTIES = 'dataproperties';
export const PROPERTY_DATA_ID = 'dataproperty_id';
export const PROPERTY_DATA_NAME = 'dataproperty_name';
export const PROPERTY_DATA_TYPE = 'dataproperty_type';
export const PROPERTY_DATA_VALUE = 'dataproperty_value';

export const PROPERTY_SCRIPT_FORMAT = 'scriptformat';
export const PROPERTY_SCRIPT_TEXT = 'scripttext';
export const PROPERTY_SCRIPT_AUTO_STORE_VARIABLES = 'scriptautostorevariables';

export const PROPERTY_RULETASK_CLASS = 'ruletask_class';
export const PROPERTY_RULETASK_VARIABLES_INPUT = 'ruletask_variables_input';
export const PROPERTY_RULETASK_RESULT = 'ruletask_result';
export const PROPERTY_RULETASK_RULES = 'ruletask_rules';
export const PROPERTY_RULETASK_EXCLUDE = 'ruletask_exclude';

export const PROPERTY_MAILTASK_HEADERS = 'mailtaskheaders';
export const PROPERTY_MAILTASK_TO = 'mailtaskto';
export const PROPERTY_MAILTASK_FROM = 'mailtaskfrom';
export const PROPERTY_MAILTASK_SUBJECT = 'mailtasksubject';
export const PROPERTY_MAILTASK_CC = 'mailtaskcc';
export const PROPERTY_MAILTASK_BCC = 'mailtaskbcc';
export const PROPERTY_MAILTASK_TEXT = 'mailtasktext';
export const PROPERTY_MAILTASK_HTML = 'mailtaskhtml';
export const PROPERTY_MAILTASK_HTML_VAR = 'mailtaskhtmlvar';
export const PROPERTY_MAILTASK_TEXT_VAR = 'mailtasktextvar';
export const PROPERTY_MAILTASK_CHARSET = 'mailtaskcharset';

export const PROPERTY_CALLACTIVITY_CALLEDELEMENT = 'callactivitycalledelement';
export const PROPERTY_CALLACTIVITY_CALLEDELEMENTTYPE =
  'callactivitycalledelementtype';
export const PROPERTY_CALLACTIVITY_IN = 'callactivityinparameters';
export const PROPERTY_CALLACTIVITY_OUT = 'callactivityoutparameters';
export const PROPERTY_CALLACTIVITY_FALLBACK_TO_DEFAULT_TENANT =
  'callactivityfallbacktodefaulttenant';
export const PROPERTY_CALLACTIVITY_ID_VARIABLE_NAME =
  'callactivityidvariablename';
export const PROPERTY_CALLACTIVITY_INHERIT_VARIABLES =
  'callactivityinheritvariables';
export const PROPERTY_CALLACTIVITY_SAME_DEPLOYMENT =
  'callactivitysamedeployment';
export const PROPERTY_CALLACTIVITY_PROCESS_INSTANCE_NAME =
  'callactivityprocessinstancename';
export const PROPERTY_CALLACTIVITY_BUSINESS_KEY = 'callactivitybusinesskey';
export const PROPERTY_CALLACTIVITY_INHERIT_BUSINESS_KEY =
  'callactivityinheritbusinesskey';
export const PROPERTY_CALLACTIVITY_USE_LOCALSCOPE_FOR_OUTPARAMETERS =
  'callactivityuselocalscopeforoutparameters';
export const PROPERTY_CALLACTIVITY_COMPLETE_ASYNC = 'callactivitycompleteasync';
export const PROPERTY_IOPARAMETER_SOURCE = 'source';
export const PROPERTY_IOPARAMETER_SOURCE_EXPRESSION = 'sourceExpression';
export const PROPERTY_IOPARAMETER_TARGET = 'target';

export const PROPERTY_CAMELTASK_CAMELCONTEXT = 'cameltaskcamelcontext';

export const PROPERTY_MULETASK_ENDPOINT_URL = 'muletaskendpointurl';
export const PROPERTY_MULETASK_LANGUAGE = 'muletasklanguage';
export const PROPERTY_MULETASK_PAYLOAD_EXPRESSION = 'muletaskpayloadexpression';
export const PROPERTY_MULETASK_RESULT_VARIABLE = 'muletaskresultvariable';

export const PROPERTY_SEQUENCEFLOW_DEFAULT = 'defaultflow';
export const PROPERTY_SEQUENCEFLOW_CONDITION = 'conditionsequenceflow';
export const PROPERTY_SEQUENCEFLOW_ORDER = 'sequencefloworder';
export const PROPERTY_FORM_REFERENCE = 'formreference';

export const PROPERTY_MESSAGE_DEFINITIONS = 'messagedefinitions';
export const PROPERTY_MESSAGE_DEFINITION_ID = 'id';
export const PROPERTY_MESSAGE_DEFINITION_NAME = 'name';
export const PROPERTY_MESSAGE_DEFINITION_ITEM_REF = 'message_item_ref';

export const PROPERTY_SIGNAL_DEFINITIONS = 'signaldefinitions';
export const PROPERTY_SIGNAL_DEFINITION_ID = 'id';
export const PROPERTY_SIGNAL_DEFINITION_NAME = 'name';
export const PROPERTY_SIGNAL_DEFINITION_SCOPE = 'scope';

export const PROPERTY_TERMINATE_ALL = 'terminateall';
export const PROPERTY_TERMINATE_MULTI_INSTANCE = 'terminateMultiInstance';

export const PROPERTY_DECISIONTABLE_REFERENCE =
  'decisiontaskdecisiontablereference';
export const PROPERTY_DECISIONSERVICE_REFERENCE =
  'decisiontaskdecisionservicereference';
export const PROPERTY_DECISIONTABLE_REFERENCE_ID = 'decisiontablereferenceid';
export const PROPERTY_DECISIONTABLE_REFERENCE_NAME =
  'decisiontablereferencename';
export const PROPERTY_DECISIONTABLE_REFERENCE_KEY = 'decisionTableReferenceKey';
export const PROPERTY_DECISIONSERVICE_REFERENCE_KEY =
  'decisionServiceReferenceKey';
export const PROPERTY_DECISIONTABLE_THROW_ERROR_NO_HITS =
  'decisiontaskthrowerroronnohits';
export const PROPERTY_DECISIONTABLE_THROW_ERROR_NO_HITS_KEY =
  'decisionTaskThrowErrorOnNoHits';
export const PROPERTY_DECISIONTABLE_FALLBACK_TO_DEFAULT_TENANT =
  'decisiontaskfallbacktodefaulttenant';
export const PROPERTY_DECISIONTABLE_FALLBACK_TO_DEFAULT_TENANT_KEY =
  'fallbackToDefaultTenant';
export const PROPERTY_DECISIONTABLE_SAME_DEPLOYMENT =
  'decisiontasksamedeployment';
export const PROPERTY_DECISIONTABLE_SAME_DEPLOYMENT_KEY = 'sameDeployment';
export const PROPERTY_DECISION_REFERENCE_TYPE = 'decisionReferenceType';

export const PROPERTY_HTTPTASK_REQ_METHOD = 'httptaskrequestmethod';
export const PROPERTY_HTTPTASK_REQ_URL = 'httptaskrequesturl';
export const PROPERTY_HTTPTASK_REQ_HEADERS = 'httptaskrequestheaders';
export const PROPERTY_HTTPTASK_REQ_BODY = 'httptaskrequestbody';
export const PROPERTY_HTTPTASK_REQ_BODY_ENCODING =
  'httptaskrequestbodyencoding';
export const PROPERTY_HTTPTASK_REQ_TIMEOUT = 'httptaskrequesttimeout';
export const PROPERTY_HTTPTASK_REQ_DISALLOW_REDIRECTS =
  'httptaskdisallowredirects';
export const PROPERTY_HTTPTASK_REQ_FAIL_STATUS_CODES =
  'httptaskfailstatuscodes';
export const PROPERTY_HTTPTASK_REQ_HANDLE_STATUS_CODES =
  'httptaskhandlestatuscodes';
export const PROPERTY_HTTPTASK_REQ_IGNORE_EXCEPTION = 'httptaskignoreexception';
export const PROPERTY_HTTPTASK_RESPONSE_VARIABLE_NAME =
  'httptaskresponsevariablename';
export const PROPERTY_HTTPTASK_SAVE_REQUEST_VARIABLES =
  'httptasksaverequestvariables';
export const PROPERTY_HTTPTASK_SAVE_RESPONSE_PARAMETERS =
  'httptasksaveresponseparameters';
export const PROPERTY_HTTPTASK_RESULT_VARIABLE_PREFIX =
  'httptaskresultvariableprefix';
export const PROPERTY_HTTPTASK_SAVE_RESPONSE_TRANSIENT =
  'httptasksaveresponseparameterstransient';
export const PROPERTY_HTTPTASK_SAVE_RESPONSE_AS_JSON =
  'httptasksaveresponseasjson';
export const PROPERTY_HTTPTASK_PARALLEL_IN_SAME_TRANSACTION =
  'httptaskparallelinsametransaction';

export const PROPERTY_SKIP_EXPRESSION = 'skipexpression';

export const PROPERTY_SHELLTASK_COMMAND = 'shellcommand';
export const PROPERTY_SHELLTASK_ARG1 = 'shellarg1';
export const PROPERTY_SHELLTASK_ARG2 = 'shellarg2';
export const PROPERTY_SHELLTASK_ARG3 = 'shellarg3';
export const PROPERTY_SHELLTASK_ARG4 = 'shellarg4';
export const PROPERTY_SHELLTASK_ARG5 = 'shellarg5';
export const PROPERTY_SHELLTASK_WAIT = 'shellwait';
export const PROPERTY_SHELLTASK_OUTPUT_VARIABLE = 'shelloutputvariable';
export const PROPERTY_SHELLTASK_ERROR_CODE_VARIABLE = 'shellerrorcodevariable';
export const PROPERTY_SHELLTASK_ERROR_REDIRECT = 'shellerrorredirect';
export const PROPERTY_SHELLTASK_CLEAN_ENV = 'shellcleanenv';
export const PROPERTY_SHELLTASK_DIRECTORY = 'shelldirectory';

export const PROPERTY_EXTERNAL_WORKER_JOB_TOPIC = 'topic';

export const PROPERTY_EVENT_REGISTRY_EVENT_KEY = 'eventkey';
export const PROPERTY_EVENT_REGISTRY_EVENT_NAME = 'eventname';
export const PROPERTY_EVENT_REGISTRY_IN_PARAMETERS = 'eventinparameters';
export const PROPERTY_EVENT_REGISTRY_OUT_PARAMETERS = 'eventoutparameters';
export const PROPERTY_EVENT_REGISTRY_CORRELATION_PARAMETERS =
  'eventcorrelationparameters';
export const PROPERTY_EVENT_REGISTRY_CHANNEL_KEY = 'channelkey';
export const PROPERTY_EVENT_REGISTRY_CHANNEL_NAME = 'channelname';
export const PROPERTY_EVENT_REGISTRY_CHANNEL_TYPE = 'channeltype';
export const PROPERTY_EVENT_REGISTRY_CHANNEL_DESTINATION = 'channeldestination';
export const PROPERTY_EVENT_REGISTRY_KEY_DETECTION_FIXED_VALUE =
  'keydetectionfixedvalue';
export const PROPERTY_EVENT_REGISTRY_KEY_DETECTION_JSON_FIELD =
  'keydetectionjsonfield';
export const PROPERTY_EVENT_REGISTRY_KEY_DETECTION_JSON_POINTER =
  'keydetectionjsonpointer';

export const PROPERTY_EVENT_REGISTRY_TRIGGER_EVENT_KEY = 'triggereventkey';
export const PROPERTY_EVENT_REGISTRY_TRIGGER_EVENT_NAME = 'triggereventname';
export const PROPERTY_EVENT_REGISTRY_TRIGGER_CHANNEL_KEY = 'triggerchannelkey';
export const PROPERTY_EVENT_REGISTRY_TRIGGER_CHANNEL_NAME =
  'triggerchannelname';
export const PROPERTY_EVENT_REGISTRY_TRIGGER_CHANNEL_TYPE =
  'triggerchanneltype';
export const PROPERTY_EVENT_REGISTRY_TRIGGER_CHANNEL_DESTINATION =
  'triggerchanneldestination';

export const PROPERTY_EVENT_REGISTRY_PARAMETER_EVENTNAME = 'eventName';
export const PROPERTY_EVENT_REGISTRY_PARAMETER_EVENTTYPE = 'eventType';
export const PROPERTY_EVENT_REGISTRY_PARAMETER_VARIABLENAME = 'variableName';
export const PROPERTY_EVENT_REGISTRY_CORRELATIONNAME = 'name';
export const PROPERTY_EVENT_REGISTRY_CORRELATIONTYPE = 'type';
export const PROPERTY_EVENT_REGISTRY_CORRELATIONVALUE = 'value';

export const PROPERTY_FOR_COMPENSATION = 'isforcompensation';
export const PROPERTY_COMPENSATION_ACTIVITY_REF = 'compensationactivityref';
