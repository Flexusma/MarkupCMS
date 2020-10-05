
const session = require("express-session");
const { Responses } = require("../response/responses");
const { RespCode } = require("../response/response_codes");
let sessionStore = new session.MemoryStore();

exports.sessionStore = sessionStore;

exports.APINOTsessionChecker= sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.json(Responses.respError(RespCode.ROUTE_ONLY_UNAUTHENTICATED));
    } else {
        next();
    }    
};
exports.APIsessionChecker= sessionChecker = (req, res, next) => {

    if (req.session.user && req.cookies.user_sid) {
        next();
    } else {
        if(req.headers.authorization){
            let sess;
            console.log(req.headers.authorization)
            sessionStore.get(req.headers.authorization, (error, session) => {
                sess = session;
                if(session!=undefined){
                    req.session=session;
                    next();
                }else res.json(Responses.respError(RespCode.SESSION_INVALID));
            });
        }else{
            res.json(Responses.respError(RespCode.SESSION_INVALID));
        }
    }    
};

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