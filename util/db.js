// const Sequelize = require('sequelize');
// const dotenv  = require('dotenv');
// dotenv.config();
// const sequelize = new Sequelize(process.env.DB_name,process.env.Db_Username,process.env.Db_Password,{
//     dialect:'mysql',
//     host:'localhost'
// });

// module.exports = sequelize;

const mongoose = require('mongoose');
const URI = 'mongodb+srv://thorbolebalaji1997:BWjx3vZHJCbhD7J3@userss.xvktu9l.mongodb.net/'
mongoose.connect(URI);