import AuthService from "@/auth/authService";
import Permission from "@/auth/permission";


export const authGuard = async (to, from, next) => {
        const perm = to.meta.permission;
        if(perm!==undefined){
                let res = await AuthService.isAuthUser();
                console.log(res)
                if(res.isAuth){
                        console.log(res.user.permission+"|"+perm)
                        if(Permission.hasPermission(res.user.permission, perm)){
                                next();
                                return;
                        }
                }
                next({name: "login"});

        }else
        await AuthService.routeAuthCheck(next);

};


