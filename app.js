const express = require('express');
const Users = require('./Models/user');
const sequelize = require('./util/db');
const axios = require('axios');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://thorbolebalaji1997:BWjx3vZHJCbhD7J3@userss.xvktu9l.mongodb.net/'

const app = express();

mongoose.connect(URI);

app.get('/',async(req,res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
   
   response.data.forEach(element => {
    const user = new Users({id:element.id,name:element.title,email:element.body})
     user.save();
   });

    // if(data){   
//    const result =  await Users.create({id:data.id,title:data.title,body:data.body});
// const user = new Users({id:data.id,name:data.title,email:data.body})
// user.save();
    // }
    res.send(response.data)
});

// sequelize.sync().then(()=>app.listen(3000));
 app.listen(3000,()=>console.log('server is running'));