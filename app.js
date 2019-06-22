const express=require('express');
const userRouter=require('./routes/user.js')
const proRouter=require('./routes/pro.js')
const bodyParser=require('body-parser')
const cors=require("cors")
var server=express();
server.listen(4000);
server.use(cors({
    origin:["http://127.0.0.1:5500" ,"http://localhost:5500"]
}))
server.use(bodyParser.urlencoded({
    extended:false}));
server.use(express.static('public'));
server.use(express.static('mypro'));

//使用bodyParser中间件将post请求数据转为对象
//所有中间件都服务器下
server.use('/user',userRouter);
server.use('/pro',proRouter)
