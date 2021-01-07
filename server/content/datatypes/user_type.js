const { Database } = require("../database");
var crypto = require('crypto');
const { Hash } = require("../encrypt/hash");
const { Timestamp } = require("../encrypt/Timestamp");
let DB = new Database();


exports.User = class User {
    static tablename = "users";

    constructor(id, username, email, pass, creation_date, last_login, permission){
        this.id=id;
        this.username=username;
        this.email=email;
        this.pass=pass;
        this.creation_date=creation_date;
        this.last_login=last_login;
        this.permission=permission;
    }

    async updateLoginTime(){
        const time = Timestamp.getCurrentTimestamp();
        let res = await DB.update(User.tablename, [time],["last_login"],"id = "+this.id);
        return res;
    }

    delete(){

    }

//static functions

    static async getByID(id){
        let resp = await DB.getFromTable(this.tablename,"id",id);
        if(!(resp instanceof Error)){

            let aresp = resp[0];

            let user = new User(aresp.id, aresp.username, aresp.email, aresp.pass, aresp.creation_date, aresp.last_login, aresp.permission);

            return user;
        }else return resp;
    }

    static async getByUsername(username){
        let resp = await DB.getFromTable(this.tablename,"username",username);
        //console.log(resp);

        if(!(resp instanceof Error)){

        let aresp = resp[0];

        let user = new User(aresp.id, aresp.username, aresp.email, aresp.pass, aresp.creation_date, aresp.last_login, aresp.permission);

        return user;
        }else return resp;
    }

    static async getListByUsername(username){
        username = "%"+username+"%";
        let resp = await DB.getFromTable(this.tablename,"username",username,true);

        if(!(resp instanceof Error)){
            let users = [];
            resp.forEach(function (entr){
                let user = new User(entr.id, entr.username, entr.email, null, entr.creation_date, entr.last_login, entr.permission);
                users.push(user);
            });
            return users;
        }else return resp;
    }
    
    static async getByEmail(email){
        let resp = await DB.getFromTable(this.tablename,"email",email);
        //console.log(resp);
        return resp;
    }

    static async getPagewise(pagenum, pagecount){
        let resp = await DB.getPagewise(this.tablename,pagenum,pagecount);
        return resp;
    }

    static async createTable() {
        console.info("Creating database for users");

        return await DB.createTable(this.tablename,[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `username` VARCHAR(255) NOT NULL UNIQUE",
            " `email` VARCHAR(255) NOT NULL UNIQUE",
            " `pass` TEXT NOT NULL",
            " `creation_date` TIMESTAMP NOT NULL DEFAULT 0",
            " `last_login` TIMESTAMP",
            " `permission` BIGINT NOT NULL",
            " PRIMARY KEY (`id`)"
        ],[]
        );
    }

    static async new(username, email, pass, permission) {

        let pas = Hash.hash512Salt(pass);
        console.log(pas);
        let creation_date = Timestamp.getCurrentTimestamp();
        let last_login = Timestamp.getCurrentTimestamp();

        let response = await DB.insertInto(this.tablename,[username,email,pas,creation_date,last_login,permission], ["username","email","pass","creation_date","last_login","permission"]);
        if(response!==undefined)
            if(response instanceof Error)
                return response;
            else
                return new User(response.insertId,username,email,pass,creation_date,last_login,permission);
        else return undefined;
    }

}