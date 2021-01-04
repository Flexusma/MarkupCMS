
exports.RespCode = class RespCode{

    static SESSION_INVALID = {
        code: 601,
        message: "ERROR, either you are not logged in, please make sure your cookies are enabled, or you did not send an autorization header corectly!"
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
        message: "ERROR, please specify a username: x_user header missing"
    }
    static PASS_MISSING = {
        code: 605,
        message: "ERROR, please specify a password: x_pass header missing"
    }
    static EMAIL_MISSING = {
        code: 606,
        message: "ERROR, please specify a username: x_email header missing"
    }

    static USER_CREATION_FAILED = {
        code: 610,
        message: "ERROR, user creation failed, see error field for more details"
    }

    static POST_CREATION_FAILED = {
        code: 611,
        message: "ERROR, post creation failed, see error field for more details"
    }
    static USER_NO_AUTHOR = {
        code: 612,
        message: "ERROR, post creation failed, the requesting user does not have an author, please create an author profile first!"
    }

    static NO_POST_DATA = {
        code: 613,
        message: "ERROR, no Post data was recieved (length = 0)!"
    }
    static IMAGE_SAVE_ERROR = {
        code: 614,
        message: "ERROR, could not save the uploaded image!"
    }

    static AUTHOR_CREATION_FAILED = {
        code: 615,
        message: "ERROR, author creation failed, see error field for more details"
    }

    static ALREADY_EXISTS = {
        code: 616,
        message: "ERROR, already exists, see error field for more details"
    }

    static DOESNT_EXIST_REFERENCE = {
        code: 617,
        message: "ERROR, a non existing object was referenced. For example a user ID for a user that doesn't exist, see error field for more details"
    }

    static MISSING_FIELD = {
        code: 617,
        message: "ERROR, a field or variable was missing in your request, see error field for more details"
    }

    static NO_PERMISSION = {
        code: 643,
        message: "ERROR, you do not have the permission to do this!"
    }




    static OK = {
        code: 200,
        message: "Request was handled successfully."
    }

}