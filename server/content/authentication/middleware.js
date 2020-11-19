const {sessionStore} = require("./session_utils");
const { Responses } = require("../response/responses");
const { RespCode } = require("../response/response_codes");

exports.APINOTsessionChecker= sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.json(Responses.respError(RespCode.ROUTE_ONLY_UNAUTHENTICATED));
    } else {
        next();
    }    
};
exports.APIsessionChecker= sessionChecker = (req, res, next) => {

    if (req.session.id && req.cookies.user_sid) {
        next();
    } else {
        if(req.headers.authorization !== undefined){
            console.log(sessionStore);
            sessionStore.get(req.headers.authorization, (error, session) => {
                console.log(error);
                console.log(session)
                if(error===null || error===undefined) {
                    if (session !== undefined&&session != null) {
                        req.session.user = session.user;
                        console.log(req.session);
                        next();
                    } else res.json(Responses.respError(RespCode.SESSION_INVALID));
                }else res.json(Responses.respError(RespCode.UNAME_OR_PASS_WRONG,error))
            });
        }else{
            res.json(Responses.respError(RespCode.SESSION_INVALID));
        }
    }    
};

exports.SessionCheckNoBlock = sessionCheckNoBlock = (req,res,next) =>{
    if (req.session.id && req.cookies.user_sid) {
        req.logged_in=true;
        next();
    } else {
        req.logged_in=false;
        next();
    }
}

exports.pagewise = pagewise = (req,res,next) =>{
    let page = req.query.page;
    let count = req.query.page_count;
    let total_pages = 1;
  
    if(page===undefined) page=0;
    if(count===undefined) count=7;
  
    let pageData = {
      page: page,
      count: count,
      total_pages: total_pages,
    }
  
    req.pageData =pageData;
  
    next();
}

