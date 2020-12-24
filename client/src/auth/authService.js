import {api, constant, error_msg, vue} from "@/main";
import {NextErrorRedir} from "@/router/router_utils";
import axios from 'axios';

class AuthService{


    isAuthenticated(){
        if(this.getAuth()===undefined)
            this.checkAuthReq();
        return this.getAuth()
    }

    user = undefined;

    loginRedirect(){
        this.checkAuthReq();
        console.log(vue);
        this.push("login");
    }

    logout(obj){

        let logout = axios({
            method: 'delete',
            url: api.api_base_url+api.api_session_path,
        })
        AuthServiceInstance.setAuth(false);
        this.authAxiosNoRed(logout).then(function (res){
            console.log(res)

            if(res.data.info.code===200) {
                if (obj !== undefined) {
                    //if (obj.returnTo !== undefined) {
                    //    vue.$router.push(obj.returnTo);
                    //} else {
                    vue.$nextTick(()=>{
                        AuthServiceInstance.setAuth(false);
                        AuthServiceInstance.push(constant.home_page_name);
                        vue.$root.$router.go(0);
                        vue.$root.$router.go(0);
                    });

                   // }
                }
            }
        });
        this.checkAuthReq();


    }

    async routeAuthCheck(next){
        this.checkAuthReq();
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
        this.checkAuthReq();
        let resp= await axio;
        if(resp.data.info.code===601){
            if(next!==undefined) {
                next({name: "login"});
                return false;
            }else {
                vue.$router.push("login");
                return false;
            }
        } else
            return resp;
    }

    async authAxiosNoRed(axio){
        this.checkAuthReq();
        let resp = await axio;
        return resp;
    }

    async loginWithCred(user, pass){
        let resp = await axios.post(api.api_base_url+api.api_session_path,"",{headers:{
            'x_user':user,
            'x_pass':pass
        },
        });
        console.log(resp);
        if(resp.data.info.code===200){
            this.user = resp.data.data[0];
            console.log(resp.data.data)
            this.setAuth(true);
            console.log("setting auth to true");
            return resp.data;
        }else return resp.data;
    }

    checkAuthReq(){
        axios.get(api.api_base_url+api.api_session_check_path).then((res) => {
            console.log(res.data);
            if(res.data.info.code===200) {
                this.setAuth(true)
                this.user=res.data.data;
            }
            else{
                this.setAuth(false)
            }
        })
    }

    push(to){
        if(vue.$route.name!==to){
            vue.$router.push({name: to});
        }
    }
    setAuth(t){
      vue.$root.$data.isAuth = t;
    }
    getAuth(){
        if(vue!==undefined)
            return vue.$root.$data.isAuth;
        else return undefined;
    }

}



let AuthServiceInstance = new AuthService();

export default AuthServiceInstance;

export function initAuthService(vue){

    AuthServiceInstance.checkAuthReq();
    vue.prototype.$auth=AuthServiceInstance;

}