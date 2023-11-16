// 从 flowable copy过来 modules/flowable-bpmn-converter/src/main/java/org/flowable/bpmn/constants/BpmnXMLConstants.java

export const BPMN2_NAMESPACE = 'http://www.omg.org/spec/BPMN/20100524/MODEL';
export const XSI_NAMESPACE = 'http://www.w3.org/2001/XMLSchema-instance';
export const XSI_PREFIX = 'xsi';
export const SCHEMA_NAMESPACE = 'http://www.w3.org/2001/XMLSchema';
export const XSD_PREFIX = 'xsd';
export const TYPE_LANGUAGE_ATTRIBUTE = 'typeLanguage';
export const XPATH_NAMESPACE = 'http://www.w3.org/1999/XPath';
export const EXPRESSION_LANGUAGE_ATTRIBUTE = 'expressionLanguage';
export const PROCESS_NAMESPACE = 'http://www.flowable.org/test';
export const TARGET_NAMESPACE_ATTRIBUTE = 'targetNamespace';
export const FLOWABLE_EXTENSIONS_NAMESPACE = 'http://flowable.org/bpmn';
export const FLOWABLE_EXTENSIONS_PREFIX = 'flowable';
export const ACTIVITI_EXTENSIONS_NAMESPACE = 'http://activiti.org/bpmn';
export const ACTIVITI_EXTENSIONS_PREFIX = 'activiti';
export const CAMUNDA_EXTENSIONS_NAMESPACE =
  'http://camunda.org/schema/1.0/bpmn';
export const BPMNDI_NAMESPACE = 'http://www.omg.org/spec/BPMN/20100524/DI';
export const BPMNDI_PREFIX = 'bpmndi';
export const OMGDC_NAMESPACE = 'http://www.omg.org/spec/DD/20100524/DC';
export const OMGDC_PREFIX = 'omgdc';
export const OMGDI_NAMESPACE = 'http://www.omg.org/spec/DD/20100524/DI';
export const OMGDI_PREFIX = 'omgdi';

export const ATTRIBUTE_ID = 'id';
export const ATTRIBUTE_NAME = 'name';
export const ATTRIBUTE_TYPE = 'type';
export const ATTRIBUTE_EXPORTER = 'exporter';
export const ATTRIBUTE_EXPORTER_VERSION = 'exporterVersion';
export const ATTRIBUTE_DEFAULT = 'default';
export const ATTRIBUTE_ITEM_REF = 'itemRef';
export const ELEMENT_DEFINITIONS = 'definitions';
export const ELEMENT_DOCUMENTATION = 'documentation';

export const ELEMENT_SIGNAL = 'signal';
export const ELEMENT_MESSAGE = 'message';
export const ELEMENT_ERROR = 'error';
export const ELEMENT_ESCALATION = 'escalation';
export const ELEMENT_COLLABORATION = 'collaboration';
export const ELEMENT_PARTICIPANT = 'participant';
export const ELEMENT_MESSAGE_FLOW = 'messageFlow';
export const ELEMENT_LANESET = 'laneSet';
export const ELEMENT_LANE = 'lane';
export const ELEMENT_FLOWNODE_REF = 'flowNodeRef';
export const ATTRIBUTE_PROCESS_REF = 'processRef';
export const ELEMENT_RESOURCE = 'resource';

export const ELEMENT_PROCESS = 'process';
export const ATTRIBUTE_PROCESS_EXECUTABLE = 'isExecutable';
export const ATTRIBUTE_PROCESS_EAGER_EXECUTION_FETCHING =
  'isEagerExecutionFetching';
export const ELEMENT_POTENTIAL_STARTER = 'potentialStarter';
export const ATTRIBUTE_PROCESS_CANDIDATE_USERS = 'candidateStarterUsers';
export const ATTRIBUTE_PROCESS_CANDIDATE_GROUPS = 'candidateStarterGroups';
export const ELEMENT_SUBPROCESS = 'subProcess';
export const ATTRIBUTE_TRIGGERED_BY = 'triggeredByEvent';
export const ELEMENT_TRANSACTION = 'transaction';
export const ELEMENT_ADHOC_SUBPROCESS = 'adHocSubProcess';
export const ATTRIBUTE_ORDERING = 'ordering';
export const ATTRIBUTE_CANCEL_REMAINING_INSTANCES = 'cancelRemainingInstances';
export const ELEMENT_COMPLETION_CONDITION = 'completionCondition';

export const ELEMENT_DATA_STATE = 'dataState';

export const ELEMENT_EXTENSIONS = 'extensionElements';

export const ELEMENT_EXECUTION_LISTENER = 'executionListener';
export const ELEMENT_EVENT_LISTENER = 'eventListener';
export const ELEMENT_TASK_LISTENER = 'taskListener';
export const ELEMENT_SCRIPT = 'script';
export const ATTRIBUTE_LISTENER_EVENT = 'event';
export const ATTRIBUTE_LISTENER_EVENTS = 'events';
export const ATTRIBUTE_LISTENER_ENTITY_TYPE = 'entityType';
export const ATTRIBUTE_LISTENER_CLASS = 'class';
export const ATTRIBUTE_LISTENER_EXPRESSION = 'expression';
export const ATTRIBUTE_LISTENER_TYPE = 'type';
export const ATTRIBUTE_LISTENER_TYPE_SCRIPT = 'script';
export const ATTRIBUTE_LISTENER_DELEGATEEXPRESSION = 'delegateExpression';
export const ATTRIBUTE_LISTENER_THROW_EVENT_TYPE = 'throwEvent';
export const ATTRIBUTE_LISTENER_THROW_SIGNAL_EVENT_NAME = 'signalName';
export const ATTRIBUTE_LISTENER_THROW_MESSAGE_EVENT_NAME = 'messageName';
export const ATTRIBUTE_LISTENER_THROW_ERROR_EVENT_CODE = 'errorCode';
export const ATTRIBUTE_LISTENER_ON_TRANSACTION = 'onTransaction';
export const ATTRIBUTE_LISTENER_CUSTOM_PROPERTIES_RESOLVER_CLASS =
  'customPropertiesResolverClass';
export const ATTRIBUTE_LISTENER_CUSTOM_PROPERTIES_RESOLVER_EXPRESSION =
  'customPropertiesResolverExpression';
export const ATTRIBUTE_LISTENER_CUSTOM_PROPERTIES_RESOLVER_DELEGATEEXPRESSION =
  'customPropertiesResolverDelegateExpression';
export const ATTRIBUTE_SCRIPT_LANGUAGE = 'language';
export const ATTRIBUTE_SCRIPT_RESULTVARIABLE = 'resultVariable';

export const ELEMENT_HTTP_REQUEST_HANDLER = 'httpRequestHandler';
export const ELEMENT_HTTP_RESPONSE_HANDLER = 'httpResponseHandler';

export const ATTRIBUTE_LISTENER_THROW_EVENT_TYPE_SIGNAL = 'signal';
export const ATTRIBUTE_LISTENER_THROW_EVENT_TYPE_GLOBAL_SIGNAL = 'globalSignal';
export const ATTRIBUTE_LISTENER_THROW_EVENT_TYPE_MESSAGE = 'message';
export const ATTRIBUTE_LISTENER_THROW_EVENT_TYPE_ERROR = 'error';

export const ATTRIBUTE_VALUE_TRUE = 'true';
export const ATTRIBUTE_VALUE_FALSE = 'false';

export const ATTRIBUTE_ACTIVITY_ASYNCHRONOUS = 'async';
export const ATTRIBUTE_ACTIVITY_ASYNCHRONOUS_BEFORE = 'asyncBefore';
export const ATTRIBUTE_ACTIVITY_ASYNCHRONOUS_LEAVE = 'asyncLeave';
export const ATTRIBUTE_ACTIVITY_EXCLUSIVE = 'exclusive';
export const ATTRIBUTE_ACTIVITY_ISFORCOMPENSATION = 'isForCompensation';
export const ATTRIBUTE_ACTIVITY_TRIGGERABLE = 'triggerable';

export const ELEMENT_IMPORT = 'import';
export const ATTRIBUTE_IMPORT_TYPE = 'importType';
export const ATTRIBUTE_LOCATION = 'location';
export const ATTRIBUTE_NAMESPACE = 'namespace';

export const ELEMENT_INTERFACE = 'interface';
export const ELEMENT_OPERATION = 'operation';
export const ATTRIBUTE_IMPLEMENTATION_REF = 'implementationRef';
export const ELEMENT_IN_MESSAGE = 'inMessageRef';
export const ELEMENT_OUT_MESSAGE = 'outMessageRef';

export const ELEMENT_ITEM_DEFINITION = 'itemDefinition';
export const ATTRIBUTE_STRUCTURE_REF = 'structureRef';
export const ATTRIBUTE_ITEM_KIND = 'itemKind';

export const ELEMENT_DATA_STORE = 'dataStore';
export const ELEMENT_DATA_STORE_REFERENCE = 'dataStoreReference';
export const ATTRIBUTE_ITEM_SUBJECT_REF = 'itemSubjectRef';
export const ATTRIBUTE_DATA_STORE_REF = 'dataStoreRef';

export const ELEMENT_IOSPECIFICATION = 'ioSpecification';
export const ELEMENT_DATA_INPUT = 'dataInput';
export const ELEMENT_DATA_OUTPUT = 'dataOutput';
export const ELEMENT_DATA_INPUT_REFS = 'dataInputRefs';
export const ELEMENT_DATA_OUTPUT_REFS = 'dataOutputRefs';

export const ELEMENT_INPUT_ASSOCIATION = 'dataInputAssociation';
export const ELEMENT_OUTPUT_ASSOCIATION = 'dataOutputAssociation';
export const ELEMENT_SOURCE_REF = 'sourceRef';
export const ELEMENT_TARGET_REF = 'targetRef';
export const ELEMENT_TRANSFORMATION = 'transformation';
export const ELEMENT_ASSIGNMENT = 'assignment';
export const ELEMENT_FROM = 'from';
export const ELEMENT_TO = 'to';

// fake element for mail task
export const ELEMENT_TASK_MAIL = 'mailTask';

export const ELEMENT_TASK = 'task';
export const ELEMENT_TASK_BUSINESSRULE = 'businessRuleTask';
export const ELEMENT_TASK_MANUAL = 'manualTask';
export const ELEMENT_TASK_RECEIVE = 'receiveTask';
export const ELEMENT_TASK_SCRIPT = 'scriptTask';
export const ELEMENT_TASK_SEND = 'sendTask';
export const ELEMENT_TASK_SERVICE = 'serviceTask';
export const ELEMENT_TASK_USER = 'userTask';
export const ELEMENT_CALL_ACTIVITY = 'callActivity';

export const ATTRIBUTE_EVENT_START_INITIATOR = 'initiator';
export const ATTRIBUTE_EVENT_START_INTERRUPTING = 'isInterrupting';
export const ATTRIBUTE_FORM_FORMKEY = 'formKey';
export const ATTRIBUTE_FORM_FIELD_VALIDATION = 'formFieldValidation';

export const ELEMENT_MULTIINSTANCE = 'multiInstanceLoopCharacteristics';
export const ELEMENT_MULTIINSTANCE_CARDINALITY = 'loopCardinality';
export const ELEMENT_MULTIINSTANCE_DATAINPUT = 'loopDataInputRef';
export const ELEMENT_MULTIINSTANCE_DATAITEM = 'inputDataItem';
export const ELEMENT_MULTIINSTANCE_COLLECTION = 'collection';
export const ELEMENT_MULTIINSTANCE_COLLECTION_EXPRESSION = 'expression';
export const ELEMENT_MULTIINSTANCE_COLLECTION_STRING = 'string';
export const ELEMENT_MULTIINSTANCE_CONDITION = 'completionCondition';
export const ATTRIBUTE_MULTIINSTANCE_SEQUENTIAL = 'isSequential';
export const ATTRIBUTE_MULTIINSTANCE_COLLECTION = 'collection';
export const ATTRIBUTE_MULTIINSTANCE_VARIABLE = 'elementVariable';
export const ATTRIBUTE_MULTIINSTANCE_INDEX_VARIABLE = 'elementIndexVariable';
export const ATTRIBUTE_MULTIINSTANCE_COLLECTION_CLASS = 'class';
export const ATTRIBUTE_MULTIINSTANCE_COLLECTION_DELEGATEEXPRESSION =
  'delegateExpression';
export const ATTRIBUTE_MULTIINSTANCE_NO_WAIT_STATES_ASYNC_LEAVE =
  'noWaitStatesAsyncLeave';

export const ELEMENT_VARIABLE_AGGREGATION = 'variableAggregation';
export const ATTRIBUTE_VARIABLE_AGGREGATION_VARIABLE = 'variable';
export const ATTRIBUTE_VARIABLE_AGGREGATION_STORE_AS_TRANSIENT_VARIABLE =
  'storeAsTransientVariable';
export const ATTRIBUTE_VARIABLE_AGGREGATION_CREATE_OVERVIEW =
  'createOverviewVariable';

export const ATTRIBUTE_TASK_IMPLEMENTATION = 'implementation';
export const ATTRIBUTE_TASK_OPERATION_REF = 'operationRef';

export const ATTRIBUTE_TASK_SCRIPT_TEXT = 'script';
export const ATTRIBUTE_TASK_SCRIPT_FORMAT = 'scriptFormat';
export const ATTRIBUTE_TASK_SCRIPT_RESULTVARIABLE = 'resultVariable';
export const ATTRIBUTE_TASK_SCRIPT_SKIP_EXPRESSION = 'skipExpression';
export const ATTRIBUTE_TASK_SCRIPT_AUTO_STORE_VARIABLE = 'autoStoreVariables';

export const ATTRIBUTE_TASK_SERVICE_CLASS = 'class';
export const ATTRIBUTE_TASK_SERVICE_EXPRESSION = 'expression';
export const ATTRIBUTE_TASK_SERVICE_DELEGATEEXPRESSION = 'delegateExpression';
export const ATTRIBUTE_TASK_SERVICE_RESULT_VARIABLE_NAME = 'resultVariableName';
export const ATTRIBUTE_TASK_SERVICE_RESULT_VARIABLE = 'resultVariable';
export const ATTRIBUTE_TASK_SERVICE_EXTENSIONID = 'extensionId';
export const ATTRIBUTE_TASK_SERVICE_SKIP_EXPRESSION = 'skipExpression';
export const ATTRIBUTE_TASK_SERVICE_USE_LOCAL_SCOPE_FOR_RESULT_VARIABLE =
  'useLocalScopeForResultVariable';
export const ATTRIBUTE_TASK_SERVICE_STORE_RESULT_AS_TRANSIENT =
  'storeResultVariableAsTransient';

export const ATTRIBUTE_TASK_EXTERNAL_WORKER_TOPIC = 'topic';

export const ATTRIBUTE_TASK_HTTP_PARALLEL_IN_SAME_TRANSACTION =
  'parallelInSameTransaction';

export const ATTRIBUTE_TASK_USER_ASSIGNEE = 'assignee';
export const ATTRIBUTE_TASK_USER_OWNER = 'owner';
export const ATTRIBUTE_TASK_USER_CANDIDATEUSERS = 'candidateUsers';
export const ATTRIBUTE_TASK_USER_CANDIDATEGROUPS = 'candidateGroups';
export const ATTRIBUTE_TASK_USER_DUEDATE = 'dueDate';
export const ATTRIBUTE_TASK_USER_BUSINESS_CALENDAR_NAME =
  'businessCalendarName';
export const ATTRIBUTE_TASK_USER_CATEGORY = 'category';
export const ATTRIBUTE_TASK_USER_PRIORITY = 'priority';
export const ATTRIBUTE_TASK_USER_SKIP_EXPRESSION = 'skipExpression';
export const ATTRIBUTE_TASK_ID_VARIABLE_NAME = 'taskIdVariableName';

export const ATTRIBUTE_TASK_RULE_VARIABLES_INPUT = 'ruleVariablesInput';
export const ATTRIBUTE_TASK_RULE_RESULT_VARIABLE = 'resultVariable';
export const ATTRIBUTE_TASK_RULE_RULES = 'rules';
export const ATTRIBUTE_TASK_RULE_EXCLUDE = 'exclude';
export const ATTRIBUTE_TASK_RULE_CLASS = 'class';

export const ATTRIBUTE_BUSINESS_KEY = 'businessKey';
export const ATTRIBUTE_INHERIT_BUSINESS_KEY = 'inheritBusinessKey';
export const ATTRIBUTE_SAME_DEPLOYMENT = 'sameDeployment';
export const ATTRIBUTE_CALLED_ELEMENT_BINDING = 'calledElementBinding';
export const ATTRIBUTE_FALLBACK_TO_DEFAULT_TENANT = 'fallbackToDefaultTenant';
export const ATTRIBUTE_ID_VARIABLE_NAME = 'idVariableName';
export const ELEMENT_IN_PARAMETERS = 'in';
export const ELEMENT_OUT_PARAMETERS = 'out';

export const ATTRIBUTE_CALL_ACTIVITY_CALLEDELEMENT = 'calledElement';
export const ATTRIBUTE_CALL_ACTIVITY_CALLEDELEMENTTYPE = 'calledElementType';
export const ATTRIBUTE_CALL_ACTIVITY_PROCESS_INSTANCE_NAME =
  'processInstanceName';
export const ATTRIBUTE_CALL_ACTIVITY_INHERITVARIABLES = 'inheritVariables';
export const ATTRIBUTE_CALL_ACTIVITY_USE_LOCALSCOPE_FOR_OUTPARAMETERS =
  'useLocalScopeForOutParameters';
export const ATTRIBUTE_CALL_ACTIVITY_COMPLETE_ASYNC = 'completeAsync';
export const ATTRIBUTE_IOPARAMETER_SOURCE = 'source';
export const ATTRIBUTE_IOPARAMETER_SOURCE_EXPRESSION = 'sourceExpression';
export const ATTRIBUTE_IOPARAMETER_SOURCE_TYPE = 'sourceType';
export const ATTRIBUTE_IOPARAMETER_TARGET = 'target';
export const ATTRIBUTE_IOPARAMETER_TARGET_EXPRESSION = 'targetExpression';
export const ATTRIBUTE_IOPARAMETER_TARGET_TYPE = 'targetType';
export const ATTRIBUTE_IOPARAMETER_TRANSIENT = 'transient';
export const ATTRIBUTE_IOPARAMETER_VARIABLES = 'variables';

export const ATTRIBUTE_CASE_TASK_CASE_DEFINITION_KEY = 'caseDefinitionKey';
export const ATTRIBUTE_CASE_TASK_CASE_INSTANCE_NAME = 'caseInstanceName';

export const ELEMENT_EVENT_TYPE = 'eventType';
export const ELEMENT_TRIGGER_EVENT_TYPE = 'triggerEventType';
export const ELEMENT_SEND_SYNCHRONOUSLY = 'sendSynchronously';
export const START_EVENT_CORRELATION_CONFIGURATION =
  'startEventCorrelationConfiguration';
export const START_EVENT_CORRELATION_STORE_AS_UNIQUE_REFERENCE_ID =
  'storeAsUniqueReferenceId';

export const ATTRIBUTE_TRIGGERABLE = 'triggerable';
export const ELEMENT_TRIGGER_EVENT_CORRELATION_PARAMETER =
  'triggerEventCorrelationParameter';

export const ELEMENT_SEQUENCE_FLOW = 'sequenceFlow';
export const ELEMENT_FLOW_CONDITION = 'conditionExpression';
export const ATTRIBUTE_FLOW_SOURCE_REF = 'sourceRef';
export const ATTRIBUTE_FLOW_TARGET_REF = 'targetRef';
export const ATTRIBUTE_FLOW_SKIP_EXPRESSION = 'skipExpression';

export const ELEMENT_TEXT_ANNOTATION = 'textAnnotation';
export const ATTRIBUTE_TEXTFORMAT = 'textFormat';
export const ELEMENT_TEXT_ANNOTATION_TEXT = 'text';

export const ELEMENT_ASSOCIATION = 'association';

export const ELEMENT_GATEWAY_EXCLUSIVE = 'exclusiveGateway';
export const ELEMENT_GATEWAY_EVENT = 'eventBasedGateway';
export const ELEMENT_GATEWAY_INCLUSIVE = 'inclusiveGateway';
export const ELEMENT_GATEWAY_PARALLEL = 'parallelGateway';
export const ELEMENT_GATEWAY_COMPLEX = 'complexGateway';

export const ELEMENT_EVENT_START = 'startEvent';
export const ELEMENT_EVENT_END = 'endEvent';
export const ELEMENT_EVENT_BOUNDARY = 'boundaryEvent';
export const ELEMENT_EVENT_THROW = 'intermediateThrowEvent';
export const ELEMENT_EVENT_CATCH = 'intermediateCatchEvent';

export const ATTRIBUTE_BOUNDARY_ATTACHEDTOREF = 'attachedToRef';
export const ATTRIBUTE_BOUNDARY_CANCELACTIVITY = 'cancelActivity';

export const ELEMENT_EVENT_CONDITIONALDEFINITION = 'conditionalEventDefinition';
export const ELEMENT_CONDITION = 'condition';

export const ELEMENT_EVENT_ERRORDEFINITION = 'errorEventDefinition';
export const ATTRIBUTE_ERROR_REF = 'errorRef';
export const ATTRIBUTE_ERROR_CODE = 'errorCode';
export const ATTRIBUTE_ERROR_VARIABLE_NAME = 'errorVariableName';
export const ATTRIBUTE_ERROR_VARIABLE_TRANSIENT = 'errorVariableTransient';
export const ATTRIBUTE_ERROR_VARIABLE_LOCAL_SCOPE = 'errorVariableLocalScope';

export const ELEMENT_EVENT_MESSAGEDEFINITION = 'messageEventDefinition';
export const ATTRIBUTE_MESSAGE_REF = 'messageRef';
export const ATTRIBUTE_MESSAGE_EXPRESSION = 'messageExpression';

export const ELEMENT_EVENT_SIGNALDEFINITION = 'signalEventDefinition';
export const ATTRIBUTE_SIGNAL_REF = 'signalRef';
export const ATTRIBUTE_SIGNAL_EXPRESSION = 'signalExpression';
export const ATTRIBUTE_SCOPE = 'scope';

export const ELEMENT_EVENT_TIMERDEFINITION = 'timerEventDefinition';
export const ATTRIBUTE_CALENDAR_NAME = 'businessCalendarName';
export const ATTRIBUTE_TIMER_DATE = 'timeDate';
export const ATTRIBUTE_TIMER_CYCLE = 'timeCycle';
export const ATTRIBUTE_END_DATE = 'endDate';
export const ATTRIBUTE_TIMER_DURATION = 'timeDuration';

export const ELEMENT_EVENT_ESCALATIONDEFINITION = 'escalationEventDefinition';
export const ATTRIBUTE_ESCALATION_REF = 'escalationRef';
export const ATTRIBUTE_ESCALATION_CODE = 'escalationCode';

export const ELEMENT_EVENT_TERMINATEDEFINITION = 'terminateEventDefinition';
export const ATTRIBUTE_TERMINATE_ALL = 'terminateAll';
export const ATTRIBUTE_TERMINATE_MULTI_INSTANCE = 'terminateMultiInstance';

export const ELEMENT_EVENT_CANCELDEFINITION = 'cancelEventDefinition';

export const ELEMENT_EVENT_COMPENSATEDEFINITION = 'compensateEventDefinition';
export const ATTRIBUTE_COMPENSATE_ACTIVITYREF = 'activityRef';
export const ATTRIBUTE_COMPENSATE_WAITFORCOMPLETION = 'waitForCompletion';

export const ELEMENT_EVENT_CORRELATION_PARAMETER = 'eventCorrelationParameter';
export const ELEMENT_EVENT_IN_PARAMETER = 'eventInParameter';
export const ELEMENT_EVENT_OUT_PARAMETER = 'eventOutParameter';

export const ELEMENT_EVENT_VARIABLELISTENERDEFINITION =
  'variableListenerEventDefinition';
export const ATTRIBUTE_VARIABLE_NAME = 'variableName';
export const ATTRIBUTE_VARIABLE_CHANGE_TYPE = 'variableChangeType';

export const ELEMENT_FORMPROPERTY = 'formProperty';
export const ATTRIBUTE_FORM_ID = 'id';
export const ATTRIBUTE_FORM_NAME = 'name';
export const ATTRIBUTE_FORM_TYPE = 'type';
export const ATTRIBUTE_FORM_EXPRESSION = 'expression';
export const ATTRIBUTE_FORM_VARIABLE = 'variable';
export const ATTRIBUTE_FORM_READABLE = 'readable';
export const ATTRIBUTE_FORM_WRITABLE = 'writable';
export const ATTRIBUTE_FORM_REQUIRED = 'required';
export const ATTRIBUTE_FORM_DEFAULT = 'default';
export const ATTRIBUTE_FORM_DATEPATTERN = 'datePattern';
export const ELEMENT_VALUE = 'value';

export const ELEMENT_FIELD = 'field';
export const ATTRIBUTE_FIELD_NAME = 'name';
export const ATTRIBUTE_FIELD_STRING = 'stringValue';
export const ATTRIBUTE_FIELD_EXPRESSION = 'expression';
export const ELEMENT_FIELD_STRING = 'string';

export const ALFRESCO_TYPE = 'alfrescoScriptType';

export const ELEMENT_DI_DIAGRAM = 'BPMNDiagram';
export const ELEMENT_DI_PLANE = 'BPMNPlane';
export const ELEMENT_DI_SHAPE = 'BPMNShape';
export const ELEMENT_DI_EDGE = 'BPMNEdge';
export const ELEMENT_DI_LABEL = 'BPMNLabel';
export const ELEMENT_DI_BOUNDS = 'Bounds';
export const ELEMENT_DI_WAYPOINT = 'waypoint';
export const ATTRIBUTE_DI_BPMNELEMENT = 'bpmnElement';
export const ATTRIBUTE_DI_IS_EXPANDED = 'isExpanded';
export const ATTRIBUTE_DI_WIDTH = 'width';
export const ATTRIBUTE_DI_HEIGHT = 'height';
export const ATTRIBUTE_DI_X = 'x';
export const ATTRIBUTE_DI_Y = 'y';
export const ATTRIBUTE_DI_SOURCE_DOCKER_X = 'sourceDockerX';
export const ATTRIBUTE_DI_SOURCE_DOCKER_Y = 'sourceDockerY';
export const ATTRIBUTE_DI_TARGET_DOCKER_X = 'targetDockerX';
export const ATTRIBUTE_DI_TARGET_DOCKER_Y = 'targetDockerY';

export const ELEMENT_DATA_OBJECT = 'dataObject';
export const ATTRIBUTE_DATA_ID = 'id';
export const ATTRIBUTE_DATA_NAME = 'name';
export const ATTRIBUTE_DATA_ITEM_REF = 'itemSubjectRef';

// only used by valued data objects
export const ELEMENT_DATA_VALUE = 'value';

export const ELEMENT_CUSTOM_RESOURCE = 'customResource';
export const ELEMENT_RESOURCE_ASSIGNMENT = 'resourceAssignmentExpression';
export const ELEMENT_FORMAL_EXPRESSION = 'formalExpression';
export const ELEMENT_RESOURCE_REF = 'resourceRef';
export const ATTRIBUTE_ASSOCIATION_DIRECTION = 'associationDirection';

export const FAILED_JOB_RETRY_TIME_CYCLE = 'failedJobRetryTimeCycle';
export const MAP_EXCEPTION = 'mapException';
export const MAP_EXCEPTION_ERRORCODE = 'errorCode';
export const MAP_EXCEPTION_ANDCHILDREN = 'includeChildExceptions';
export const MAP_EXCEPTION_ROOTCAUSE = 'rootCause';
