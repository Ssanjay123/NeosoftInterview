const express = require('express');
const User = require('./Models/user');
const sequelize = require('./util/db');
const axios = require('axios');

const app = express();

app.get('/',async(req,res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
   
    let data = response.data[2]
    console.log(data.id,data.title);

    if(data){   
   const result =  await User.create({id:data.id,title:data.title,body:data.body});
    }
    res.send(response.data)
});

sequelize.sync().then(()=>app.listen(3000));
// app.listen(3000,()=>console.log('server is running'));