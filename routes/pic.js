const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

router.get("/list",(req,res)=>{
    var sql="SELECT `uid`, `uname`, `des`, `pic` FROM `t_pic`";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=router;