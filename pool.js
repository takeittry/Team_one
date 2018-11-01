/**
 * Created by acer on 2018/8/22.
 */

const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'teamone',
    connectionLimit:10
})
module.exports=pool;
