
exports.RespCode = class RespCode{

    static SESSION_INVALID = {
        code: 601,
        message: "ERROR, either you are not logged in, please make sure your cookies are enabled, or you did sent an autorization header corectly!"
    }
    static ROUTE_ONLY_UNAUTHENTICATED = {
        code: 602,
        message: "ERROR, this route should be only used to gain authentification, thus it cannot be accessed whilst already being authenticated!"
    }
    static UNAME_OR_PASS_WRONG = {
        code: 603,
        message: "ERROR, please check your login credentials!"
    }
    static UNAME_MISSING = {
        code: 604,
        message: "ERROR, please specify a username!"
    }
    static PASS_MISSING = {
        code: 605,
        message: "ERROR, please specify a password!"
    }


    static TEST_OK = {
        code: 200,
        message: "Yes, it is working!"
    }

}