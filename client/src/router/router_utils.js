import {constant} from "@/main";

export function ErrorRedir(error,message){
    this.router.push({name:constant.error_page_name, params:{error: error, message: message}});
}

export function NextErrorRedir(error,message,next){
    next({name:constant.error_page_name, params:{error: error, message: message}});
}