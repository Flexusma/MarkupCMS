
exports.Responses = class Responses{
    static respError(info, error){

        let response;
        if(error === undefined)
            response = {
                status: "error",
                info: info,
            }
        else 
            response = {
                status: "error",
                info: info,
                error: error,
            }
        
        return response;
    }

    static respOK (info, data){
        let response = {
            status: "success",
            info: info,
            data: data
        }
        return response;
    }
    
}