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
    GET_USER_CLIAMS = "public/api/Users/getUserCliams",
    GET_DASHBOARD = "api/getdashboard ",
    CREATE_FOLDER = "api/createfolder",
    GET_STORAGE_SERVER_ID = 'api/common/getstorageserverlist',
}


export {
    ResponseMessageTypes, KeyboardEvents, RestfulMethods, ModulesBasedApiSuffix
}
