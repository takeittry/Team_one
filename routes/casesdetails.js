const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

router.get("/info",(req,res)=>{
    console.log(req.query.cid);
    var {cid}=req.query;
    var sql="SELECT `cid`, `title`, `images`, `description`,`points` FROM `cases` WHERE cid=?";
    pool.query(sql,[cid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=router;