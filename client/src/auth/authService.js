import {api, constant, error_msg} from "@/main";
import {NextErrorRedir} from "@/router/router_utils";
import axios from 'axios';

class AuthService{

    isAuthenticated = false;

    loginRedirect(){
        this.router.push("login");
    }

    logout(obj){

        let logout = axios({
            method: 'delete',
            url: api.api_base_url+api.api_session_path,
        })

        this.authAxiosNoRed(logout).then(function (res){
            if(res.info.code===200) {
                AuthServiceInstance.isAuthenticated=false;
                if (obj !== undefined) {
                    if (obj.returnTo !== undefined) {
                        this.router.push(obj.returnTo);
                    } else {
                        this.router.push(constant.home_page_name);
                    }
                }
            }
        });


    }

    async routeAuthCheck(next){
        let ax = axios.get(api.api_base_url+api.api_token_check_url);
        try {
            if (await this.authAxios(ax, next)!==undefined) {
                next();
            } else {
                //just in case AuthAxios fails
                next({name: "login"});
            }
        }catch (e){
            console.log(e);
            NextErrorRedir(error_msg.could_not_verify_login.code,error_msg.could_not_verify_login.message,next);
        }
    }

    async authAxios(axio,next){
        let resp= await axio;
        if(resp.data.info.code===601){
            if(next!==undefined) {
                next({name: "login"});
                return false;
            }else {
                this.router.push("login");
                return false;
            }
        } else
            return resp;
    }

    async authAxiosNoRed(axio){
        let resp = await axio;
        return resp;
    }

    async axiosNoCred(axio){
        axio.withCredentials=false;
        let resp = await axio;
        return resp;
    }

}

let AuthServiceInstance = new AuthService();

export default AuthServiceInstance;

export function initAuthService(vue){


    vue.prototype.$auth=AuthServiceInstance;

}