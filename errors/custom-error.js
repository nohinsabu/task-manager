class customAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


const customErrorMessage = (msg,statusCode) => {
    return new customAPIError(msg,statusCode)
}

module.exports = {customAPIError, customErrorMessage}