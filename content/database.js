const e = require('express');
const { query } = require('express');
const mysql = require('mysql2/promise');



exports.Database = class Database{
// edit the login information to connect to the database


    conn;

    async setupConn(){
            this.conn = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS
            });
    }

    constructor(){}

    //universal prepared statements

    async insertInto(table_name,values,fields) {
        if(this.conn==undefined)
            await this.setupConn();

        let prepstate = "INSERT INTO "+table_name+" ("+fields+") VALUES(";
         if(values.length===0) throw new Error("Amount of values can't be zero!");
        let count = 0;
        for(let value in values){
            if(count==0)prepstate+="? ";
            else prepstate+=", ?";
            count++;
        }
        prepstate+=");";

        console.log("Inserting data into "+table_name+" with Statement: \n\t"+prepstate);
        console.log(values);
        let err;
        let rows, fieldsresp;
        try{
           [rows, fieldsresp] = await this.conn.query(prepstate, values);
        console.log(rows,fieldsresp)
        }catch(e){
            err =e;
            //console.log(e);
        }

        if(err!=undefined)
            return err;
        return rows;
        
    }

    async createTable(table_name,fields,extras){
        if(this.conn===undefined) return this.setupConn().then(async() =>{
            let prepstate = "CREATE TABLE IF NOT EXISTS "+table_name+" ("+fields+")"+extras+";";
            if(fields.length===0) throw new Error("Amount of Fields can't be zero!");

            console.log(prepstate);

            const [rows, fieldsresp] = await this.conn.query(prepstate);

            //console.log(rows,fieldsresp);
            return rows;
        });
    }

    async getFromTable(table_name,field,value) {
        if(this.conn==undefined)
            await this.setupConn();

        let prepstate = "SELECT * FROM "+table_name+" WHERE "+field+"= ?;";
         if(value===undefined) throw new Error("Value to compare can't be undefined!");


        console.log("Getting data from "+table_name+" where "+field+" = "+value);
        let err;
        let rows,fieldsresp;
        try{
            [rows,fieldsresp] = await this.conn.query(prepstate, value);
        //console.log(rows,fieldsresp)
        }catch(e){
            err =e;
            //console.log(e);
        }

        if(err!=undefined)
            return err;
        console.info("Data was pulled succesfully");
        return rows;
    }
    async getPagewise(table_name, pagenum, pagecount, condition){
        if(this.conn==undefined)
        await this.setupConn();

        let prepstate_get = "SELECT * FROM "+table_name+" "+condition+" LIMIT "+pagenum*pagecount+", "+(pagecount*pagenum)+pagecount;
        let prepstate_count = "SELECT count(*) as `count` FROM "+table_name+";";

        let [count_res, fieldsresp1] = await this.conn.query(prepstate_count);
        


        console.log("Getting data from "+table_name+" between ...");
        let err;
        let rows,fieldsresp;
        
        try{
            [rows,fieldsresp] = await this.conn.query(prepstate_get);
        //console.log(rows,fieldsresp)
        }catch(e){
            err =e;
            //console.log(e);
        }
        rows.push(count_res[0]);
        console.log(rows);


        if(err!=undefined)
            return err;
        console.info("Data was pulled succesfully");
        return rows;
    }


}