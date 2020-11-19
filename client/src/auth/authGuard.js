import * as axios from "core-js/internals/internal-state";
import {api, error_msg} from "@/main";
import {NextErrorRedir} from "@/router/router_utils";

const AuthAxios = async function AuthAxios(axios,next){

    let resp= await axios;
    if(resp.info.code===601){
        if(next!==undefined)
            next({name:"login"});
        else
            this.router.push("login");
    } else
    return resp;


}

export {AuthAxios}


export const authGuard = async (to, from, next) => {

      let ax = axios.get(api.api_base_url+api.api_token_check_url);
      try {
          if (await AuthAxios(ax, next) !== undefined) {
              next();
          } else {
              //just in case AuthAxios fails
              next({name: "login"});
          }
      }catch (e){
          NextErrorRedir(error_msg.could_not_verify_login.code,error_msg.could_not_verify_login.message);
      }


};

