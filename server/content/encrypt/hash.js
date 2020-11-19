const crypto = require('crypto');

exports.Hash = class Hash{

    static hash512Salt(tohash) {

        let hash = crypto.createHmac('sha512',process.env.SESSION_SECRET);
        let hashed = hash.update(tohash).digest('base64');
        return hashed;
        
    }

    static hashmd5Salt(tohash) {

        let hash = crypto.createHmac('md5',process.env.SESSION_SECRET);
        let hashed = hash.update(tohash).digest('base64');
        return hashed;
        
    }
}