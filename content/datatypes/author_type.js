const { Database } = require("../database");

let DB = new Database();


exports.Author = class Author {

    constructor(id, name, desc){
        this.id=id;
        this.name=name;
        this.desc=desc;
    }

//static functions

    static getByID(id){
        
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
    static async new(name, desc) {
        let response = await DB.insertInto("authors",[name,desc]);
        console.log(response);
       // return new Post(response.id,title,content,response.creation_date,author_id);
    }

}