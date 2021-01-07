const { Database } = require("../database");
const he = require('he');
const {Timestamp} = require("../encrypt/Timestamp");

let DB = new Database();


exports.Image = class Image {

    constructor(id, name, creation_date,user_id){
        this.id=id;
        this.name=name;
        this.creation_date=creation_date;
        this.user_id=user_id;
    }

//static functions

    static async getByID(id){
       let resp = await DB.getFromTable("images","id",id);
        if(!(resp instanceof Error)){
            let aresp = resp[0];

            let img = new Image(aresp.id, aresp.name,aresp.creation_date,aresp.user_id);

            return img;
        }else return resp;
    }

    static async getListByUserID(id){
        let resp = await DB.getFromTable("images","user_id",id);
        if(!(resp instanceof Error)){
            let imgs = [];
            resp.forEach(function (entr){
                let img = new Image(entr.id, entr.name, entr.creation_date,entr.user_id);
                imgs.push(img);
            });
            return imgs;
        }else return resp;
    }

    static async createTable() {
        console.info("Creating database for images");

        return await DB.createTable("images",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `name` TEXT NOT NULL",
            " `user_id` INT NOT NULL",
            " `creation_date` TIMESTAMP NOT NULL",
            " PRIMARY KEY (`id`)",
            " FOREIGN KEY (`user_id`) REFERENCES users(id)",
        ],[]
        );
    }
    static async new(name, ext, user_id) {
        const time = Date.now().valueOf()
        const filename = ""+name.substring(0,50)+time+"."+ext;
        let response = await DB.insertInto("images",[filename, Timestamp.getCurrentTimestamp(),user_id],["name","creation_date","user_id"]);
        console.log(response);
        if(response!==undefined)
            if(response instanceof Error)
                return response;
            else
                return new Image(response.insertId,filename,time,user_id);
        else return undefined;

    }

}