const moment = require('moment');

exports.Timestamp = class Timestamp{

    static toTimeStamp(days){
        return moment(Date.now()+(86400000*days),"x").format('YYYY-MM-DD HH:mm:ss');
    }
    static getCurrentTimestamp(){
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }

}