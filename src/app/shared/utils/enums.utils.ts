enum ValidatorTypes {
  REQUIRED = "required",
  MIN_LENGTH = "minLength",
  MAX_LENGTH = "maxLength",
  PATTERN = "pattern",
  EMAIL = "email",
  MIN = "min",
  MAX = "max",
}

enum CommonPaginationConfig {
  defaultPageSize = "10",
  defaultPageIndex = "0",
}

enum CrudType {
  CREATE = "create",
  VIEW = 'view',
  GET = "get",
  EDIT = "edit",
  DELETE = "delete",
  CHECK = 'check',
  CLICK = 'click',
  NOCONTACTS = 'no-contacts',
  EXPORT = 'export',
  ICON_POPUP = 'icon popup',
  STATUS_POPUP = 'status popup',
  QUANTITY_CLICK = 'quantity-click',
  RELOAD = 'reload',
  FILTER = 'filter', // Added to open form for Filter process
  UPLOAD = 'upload',
  APPROVED = 'approved',
  SCAN = 'scan',
  EMAIL = 'email',
  INSPECTIONCANCEL = 'inspectioncancel',
  CANCEL = 'cancel',
  INTERTECHTRANSFER = 'interTechTransfer',
  SCHEDULE = 'schedule',
  Export = 'export',
  SMS = 'sms',
  STOCK_SWAP = 'stock_swap',
  ACTION = 'action',
  QUICK_ACTION = 'quick-action',
  BULK_UPDATE = 'bulk-update',
}

enum QuickActionType {
  EDIT = "edit",
  VIEW_ALTER_CONTACT = 'view alter contact',
  PROCESS_CANEL = 'process cancel',
  CANCELLATION_HISTORY = 'cancellation history',
  SAVE_OFFER = 'save offer',
  EMAIL = 'email',
  SMS = 'sms',
  UPGRADE_DOWNGRADE = 'upgrade downgrade',
  SUSPEND_SERVICE = 'suspend service',
  BALANCE_OF_CONTRACT = 'Balance Of Contract',
  PURCHASE_OF_ALARM_SYSTEM = 'Purchase Of Alarm System'
}

enum SnackbarMessageType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

enum StatusTypes {
  CREATED = "Created",
  MODIFIED = "Modified",
  REJECTED = "Rejected",
  APPROVED = "Approved",
  INITIATED = "Initiated",
  PARTIALLY_APPROVED = "Partially Approved",
}

enum PermissionTypes {
  ADD = 'Add',
  EDIT = 'Edit',
  LIST = 'List',
  DELETE = 'Delete',
  DOWNLOAD = 'Download',
  EXPORT = 'Export',
  CHAT = 'Chat',
  SEARCH = 'Search',
  SERVICE = 'Service',
  CALL = 'Call',
  NO_CONTACTS = 'No Contacts',
  UPLOAD = 'Upload',
  FILTER = 'Filter',
  SCHEDULE = 'Schedule',
  PRINT = 'Print',
  LOGOUT = 'canLogout',
  DECLINE = 'Decline',
  CHANGE_OWNER = 'Change Owner',
  LOGGEDIN = 'Logged In',
  PASSWORD_VIEWS = 'Password Views',
  REFRESH = 'Refresh',
  QUICK_ACTION = 'Quick Action',
}

export {
  CommonPaginationConfig,
  CrudType,
  ValidatorTypes,
  SnackbarMessageType,
  StatusTypes, PermissionTypes,QuickActionType
};

