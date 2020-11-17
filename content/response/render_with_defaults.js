
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

        this.defaultopt= {
            logged_in: lgdi
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