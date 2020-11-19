const {constants} = require("@/main");

exports.ErrorRedir = function ErrorRedir(error,message){
    this.router.push({name:constants.error_page_name, params:{error: error, message: message}});
}

exports.NextErrorRedir = function NextErrorRedir(error,message,next){
    next({name:constants.error_page_name, params:{error: error, message: message}});
}