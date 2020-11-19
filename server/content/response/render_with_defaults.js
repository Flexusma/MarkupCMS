const app = require("../../app");


var wr = class RenderW{
    res;
    req
    defaultopt
    constructor(res,req) {
        this.res=res;
        this.req=req;
        var lgdi = false;
        if (req.session.id && req.cookies.user_sid) {
            lgdi=true
        }
        var baseurl = req.protocol + '://' + req.get('host');

        this.defaultopt= {
            logged_in: lgdi,
            home_path: baseurl+process.env.ROUTE_URL_HOME,
            login_path: baseurl+process.env.ROUTE_URL_LOGIN,
        };
    }

    render(view,options){
        let newopt = Object.assign(this.defaultopt,options);
        this.res.render(view,newopt);
    }

}

exports.renderW = renderW =(req,res,next) =>{
    req.renderW = new wr(res,req);
    next();
}