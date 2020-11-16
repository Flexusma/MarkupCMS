const { Database } = require("../database");

let DB = new Database();


exports.Post = class Post {

    constructor(id, title, ppublic, content, creation_date, author_id){
        this.id=id;
        this.title=title;
        this.ppublic=ppublic;
        this.content=content;
        this.creation_date=creation_date;
        this.author_id=author_id;
    }

//static functions

    static getByPage(pagenum, pagesize){
        if(pagesize===undefined) pagesize=5;
    }

    static async createTable() {
        console.info("Creating database for posts");

        return await DB.createTable("posts",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `title` TEXT NOT NULL",
            " `public` BOOLEAN NOT NULL",
            " `content` LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NOT NULL",
            " `creation_date` TIMESTAMP NOT NULL",
            " `author_id` INT",
            " PRIMARY KEY (`id`)",
            " FOREIGN KEY (author_id) REFERENCES authors(id)"
        ],[]
        );
    }
    static async new(title, content, author_id) {
        let response = await DB.insertInto("posts",[title,content, false, new Date().valueOf(),author_id]);
        console.log(response);
       // return new Post(response.id,title,content,response.creation_date,author_id);
    }

}