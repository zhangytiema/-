const express=require('express')
//导入连接池
const pool=require('../pool.js')
//创建路由器
var router=express.Router();
//注册路由
router.post('/login',(req,res)=>{
   var $uname=req.body.uname;
   var $upwd=req.body.upwd;
   console.log($uname,$upwd);
  pool.query("SELECT * FROM user WHERE uname=? AND upwd=?",[$uname,$upwd],(err,result)=>{
		 if(err)throw err;
		 console.log(result);
		 if (result.length>0)
		 {res.send("1")
		 }else{res.send("0")}
		
	}) 
})
router.post('/reg',function(req,res){
	var obj=req.body;
	pool.query('INSERT INTO user SET ?',[obj],function(err,result){
	if(err) throw err;
	if(result.affectedRows>0){
	res.send("注册成功")}
	});
	})
module.exports=router;