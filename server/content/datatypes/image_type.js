const { Database } = require("../database");
const he = require('he');
const {Timestamp} = require("../encrypt/Timestamp");

let DB = new Database();


exports.Image = class Image {

    constructor(id, name, creation_date){
        this.id=id;
        this.name=name;
        this.creation_date=creation_date;
    }

//static functions

    static async getByID(id){
       return await DB.getFromTable("images","id",id);
    }

    static async createTable() {
        console.info("Creating database for images");

        return await DB.createTable("images",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `name` TEXT NOT NULL",
            " `creation_date` TIMESTAMP NOT NULL",
            " PRIMARY KEY (`id`)"
        ],[]
        );
    }
    static async new(name, ext) {
        const time = Date.now().valueOf()
        const filename = ""+name.substring(0,50)+time+"."+ext;
        let response = await DB.insertInto("images",[filename, Timestamp.getCurrentTimestamp()],["name","creation_date"]);
        console.log(response);
       return new Image(response.insertId,filename,time);
    }

}