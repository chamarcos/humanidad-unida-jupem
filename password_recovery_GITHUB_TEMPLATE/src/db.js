const mongoose = require('mongoose');
const mysql = require('mysql2/promise');

let pool;

async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('🟢 Conectado a MongoDB');
}

async function connectMySQL() {
  pool = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 5
  });
  console.log('🟢 Conectado a MySQL');
}

function getPool() { return pool; }

module.exports = { connectMongo, connectMySQL, getPool };
