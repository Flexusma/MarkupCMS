const {Timestamp} = require("../encrypt/Timestamp");
const { Database } = require("../database");

let DB = new Database();


exports.Post = class Post {

    constructor(id, title, ppublic, content, creation_date, author_id){
        this.id=id;
        this.title=title;
        this.public=ppublic;
        this.content=content;
        this.creation_date=creation_date;
        this.author_id=author_id;
    }

//static functions

    static async getPagewise(pagenum, pagecount){
        let resp = await DB.getPagewise("posts",pagenum,pagecount);
        return resp;
    }
    static async search(query){
        let resp = await DB.getFromTable("posts","title","%"+query+"%",true);
        if(!(resp instanceof Error)){
            let imgs = [];
            resp.forEach(function (entr){
                let img = new Post(entr.id,entr.title,entr.public,entr.content,entr.creation_date,entr.author_id);
                imgs.push(img);
            });
            return imgs;
        }else return resp;
    }


    static async createTable() {
        console.info("Creating database for posts");

        return await DB.createTable("posts",[
            " `id` INT NOT NULL AUTO_INCREMENT",
            " `title` TEXT NOT NULL",
            " `public` BOOLEAN NOT NULL",
            " `content` LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NOT NULL",
            " `creation_date` TIMESTAMP NOT NULL DEFAULT 0",
            " `author_id` INT",
            " PRIMARY KEY (`id`)",
            " FOREIGN KEY (author_id) REFERENCES authors(id)"
        ],[]
        );
    }
    static async new(title, content, author_id) {
        let creation_date = Timestamp().getCurrentTimestamp();
        let response = await DB.insertInto("posts",[title,content, false, creation_date,author_id],["id","title","content","public","creation_date","author_id"]);
        console.log(response);
        if(response!==undefined)
            if(response instanceof Error)
                return response;
            else
                return new Post(response.insertId,title,false,content,creation_date,author_id);
        else return undefined;
    }

}