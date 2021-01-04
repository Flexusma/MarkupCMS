const { Database } = require("../database");

let DB = new Database();


exports.Author = class Author {

    constructor(id, name,desc,user_id){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.user_id=user_id;
    }

//static functions

    static async getByID(id){
        let res = await DB.getFromTable("authors","id",id);
        return res;
    }
    static async getByUserID(id){
        let res = await DB.getFromTable("authors","user_id",id);
        return res;
    }

    static async createTable() {
        console.info("Creating database for authors");

        return await DB.createTable("authors",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `name` TEXT NOT NULL",
            " `desc` TEXT",
            " `user_id` INT NOT NULL",
            " PRIMARY KEY (`id`)",
            " FOREIGN KEY (`user_id`) REFERENCES users(id)"
        ],[]
        );
    }
    static async new(name, desc, user_id) {
        let response = await DB.insertInto("authors",[name,desc,user_id],["name","`desc`","user_id"]);
        console.log(response);
        console.log(response.insertId)
        if(response!==undefined)
            if(response instanceof Error)
                return response;
            else
                return new Author(response.insertId,name,desc,user_id);
        else return undefined;
    }

}