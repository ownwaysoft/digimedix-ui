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
export {
    ResponseMessageTypes, KeyboardEvents, RestfulMethods
}
