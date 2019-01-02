var express = require('express');
var app = express();
var axios = require('axios');
var blogs = [
    {
        title:"西游记",
        cate:"文体两开花",
        date:666,
        preview:"中美合拍"
    },
    {
        title:112,
        cate:223,
        date:334,
        preview:445
    }
];
app.get("/all",function(req,res){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.send(blogs);
})
app.listen(3001,()=>{
    console.log("服务器已开启");
});