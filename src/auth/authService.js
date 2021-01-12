import {api, constant, error_msg, vue, app} from "@/main";
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
        this.push("login");
    }

    logout(obj){

        let logout = axios({
            method: 'delete',
            url: api.api_base_url+api.api_session_path,
        })
        AuthServiceInstance.setAuth(false);
        this.authAxiosNoRed(logout).then(function (res){
            if(constant.debug)
            console.log(res)

            if(res.data.info.code===200) {
                if (obj !== undefined) {
                    //if (obj.returnTo !== undefined) {
                    //    vue.$router.push(obj.returnTo);
                    //} else {
                    app.$nextTick(()=>{
                        AuthServiceInstance.setAuth(false);
                        AuthServiceInstance.push(constant.home_page_name);
                        app.$root.$router.go(0);
                        app.$root.$router.go(0);
                    });

                   // }
                }
            }
        });
        this.checkAuthReq();


    }

    async routeAuthCheck(next){
        this.checkAuthReq();
        try {
            if(this.isAuthenticated()){
                next();
            } else {
                //just in case AuthAxios fails
                next({name: "login"});
            }
        }catch (e){
            if(constant.debug)
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
            'x-user':user,
            'x-pass':pass
        },
        });
        if(constant.debug)
        console.log(resp);
        if(resp.data.info.code===200){
            this.user = resp.data.data[0];
            if(constant.debug)
            console.log(resp.data.data)
            this.setAuth(true);
            if(constant.debug)
            console.log("setting auth to true");
            return resp.data;
        }else return resp.data;
    }

    checkAuthReq(){
        axios.get(api.api_base_url+api.api_session_check_path).then((res) => {
            this.checkAuth(res);
        })
    }

    async checkAuthReqAsync(){
        const res = await axios.get(api.api_base_url+api.api_session_check_path);
        this.checkAuth(res);
    }

    async isAuthUser(){
        await this.checkAuthReqAsync();
        return {
            isAuth: this.getAuth(),
            user: this.user
        };

    }

    checkAuth(res){
        if(constant.debug)
        console.log("Checking user auth. Got response: ",res.data);
        if(res.data.info.code===200) {
            if(constant.debug)
            console.log("Auth: true")
            this.setAuth(true)
            this.user=res.data.data;
        }
        else{
            if(constant.debug)
            console.log("Auth: false")
            this.setAuth(false)
        }
    }


    push(to){
        if(constant.debug)
        console.log(app)
        if(app.$route.name!==to){
            app.$router.push({name: to});
        }
    }
    setAuth(t){
      app.isAuth = t;
    }
    getAuth(){
        if(app!==undefined)
            return app.isAuth;
        else return undefined;
    }

}



let AuthServiceInstance = new AuthService();

export default AuthServiceInstance;

export function initAuthService(vue){

    AuthServiceInstance.checkAuthReq();
    vue.config.globalProperties.$auth=AuthServiceInstance;

}