const { Database } = require("../database");

let DB = new Database();


exports.Author = class Author {

    constructor(id, name,desc,user_id,pp_id){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.user_id=user_id;
        this.pp_id=pp_id;
    }

//static functions

    static async getByID(id){
        let res = await DB.getFromTable("authors","id",id);
        if(!(res instanceof Error)){

            let ares = res[0];

            let author = new Author(ares.id, ares.name, ares.desc, ares.user_id,ares.pp_id);

            return author;
        }else return res;
    }
    static async getByUserID(id){
        let res = await DB.getFromTable("authors","user_id",id);
        if(!(res instanceof Error)){

            let ares = res[0];
            if(ares === undefined)
                return undefined;

            let author = new Author(ares.id, ares.name, ares.desc, ares.user_id,ares.pp_id);

            return author;
        }else return res;
    }

    static async createTable() {
        console.info("Creating database for authors");

        return await DB.createTable("authors",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `name` TEXT NOT NULL",
            " `desc` TEXT",
            " `user_id` INT NOT NULL UNIQUE",
            " `pp_id` INT NOT NULL UNIQUE DEFAULT -1",
            " PRIMARY KEY (`id`)",
            " FOREIGN KEY (`user_id`) REFERENCES users(id)",
            " FOREIGN KEY (`pp_id`) REFERENCES images(id)"
        ],[]
        );
    }

    static async new(name, desc, user_id, pp_id) {
        let response;
        if(pp_id!==undefined)
            response = await DB.insertInto("authors",[name,desc,user_id,pp_id],["name","`desc`","user_id","pp_id"]);
        else
            response = await DB.insertInto("authors",[name,desc,user_id],["name","`desc`","user_id"]);
        console.log(response);
        console.log(response.insertId)
        if(response!==undefined)
            if(response instanceof Error)
                return response;
            else
                return new Author(response.insertId,name,desc,user_id,pp_id);
        else return undefined;
    }

}