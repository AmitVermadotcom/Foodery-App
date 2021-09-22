const { request } = require('express');
const express = require('express');

const app = express(); // server create

let port = '8080';

app.listen(port,function(){
    console.log("port is listening at 8080");
});
// types of request -> get, post, put, delete
app.get('/',(req,res) => {
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    // return <h1>Hello</h1>;
    res.send('<h1>Hello</h1>');
});

let obj = {
    "Name" : "Amit Verma"
}
app.get('/user',(req,res) => {
    console.log('users');
    res.send(obj);
});

app.get('/home',(req,res) => {
    res.sendFile('./views/index.html',{root : __dirname});
})