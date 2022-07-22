enum ResponseMessageTypes {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info'
}

enum KeyboardEvents {
    CUT = 'cut',
    COPY = 'copy',
    PASTE = 'paste',
    KEY_DOWN = 'keyDown',
    KEY_UP = 'keyUp',
    KEY_PRESS = 'keyPress'
}

enum FolderActionType {
    Move = 'Move',
    COPY = 'Copy',
}

enum RestfulMethods {
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    GET = 'GET'
}

enum ModulesBasedApiSuffix {
    LOGIN = "public/api/login",
    SIGNUP = "public/api/signup",
    UPLOAD = "public/api/upload",
    GET_USER_CLIAMS = "public/api/user/getUserClaims",
    GET_DASHBOARD = "public/api/file/getDashboard",
    CREATE_FOLDER = "public/api/createfolder",
    GET_STORAGE_SERVER_ID = 'public/api/common/getstorageserverlist',
    FOLDER_CREATE = 'public/api/file/createfolder',
    FOLDER_DELETE = 'public/api/file/delete',
    FOLDER_RENAME = 'public/api/file/folder-rename',
    FOLDER_INFO = 'public/api/file/getinfo',
    FOLDER_DOWNLOAD = 'public/api/file/download',
    FOLDER_MOVE = 'public/api/file/move',
    FOLDER_COPY = 'public/api/file/copy',
    FOLDER_FILE_RENAME = 'public/api/file/file-rename',
    USER_CREATE = 'public/api/user/create-user',
    USER_UPDATE = 'public/api/user/update-user',
    USER_DELETE = 'public/api/user/delete-user',
    PERMISSION_GET_LIST = 'public/api/permission/getPermissionList',
    SHARE_DIRECTORY = 'public/api/share/share-directory',
}



export { ResponseMessageTypes, KeyboardEvents, RestfulMethods, ModulesBasedApiSuffix,FolderActionType }
