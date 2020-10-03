const { Database } = require("../database");

let DB = new Database();


exports.Image = class Image {

    constructor(id, name, desc, creation_date){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.creation_date=creation_date;
    }

//static functions

    static getByID(id){
        
    }

    static async createTable() {
        console.info("Creating database for images");

        return await DB.createTable("images",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `name` TEXT NOT NULL",
            " `desc` TEXT",
            " `creation_date` TIMESTAMP NOT NULL",
            " PRIMARY KEY (`id`)"
        ],[]
        );
    }
    static async new(name, desc) {
        let response = await DB.insertInto("images",[name,desc, new Date().valueOf()]);
        console.log(response);
       // return new Post(response.id,title,content,response.creation_date,author_id);
    }

}