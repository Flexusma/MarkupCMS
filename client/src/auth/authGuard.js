import AuthService from "@/auth/authService";


export const authGuard = async (to, from, next) => {

        await AuthService.routeAuthCheck(next);

};

