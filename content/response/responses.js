
exports.Responses = class Responses{
    static respError(info){

        let response = {
            status: "error",
            info: info,
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