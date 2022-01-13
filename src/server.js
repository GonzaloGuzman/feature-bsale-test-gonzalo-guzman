const express = require('express')
const app = express()
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

require("dotenv").config();

const routes = require('./routes/routes')

const APP_URL = process.env.APP_URL ? process.env.APP_URL : 'localhost';
const APP_CONTEXT_PATH = process.env.APP_CONTEXT_PATH ? process.env.APP_CONTEXT_PATH : '';
const APP_PORT = process.env.APP_PORT ? process.env.APP_PORT : 9001;
const dev = process.env.NODE_ENV !== "production";

const HOST_MYSQL = process.env.DB_HOST ? process.env.DB_HOST : 'locahost';
const PORT_MYSQL = process.env.DB_PORT ? process.env.DB_PORT : 3306;
const USER_MYSQL = process.env.DB_USER ? process.env.DB_USER : 'xxx';
const PASS_MYSQL = process.env.DB_PASS ? process.env.DB_PASS : 'xxx';
const DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : 'xxx';

const dbOptions = {
    host: HOST_MYSQL,
    port: PORT_MYSQL,
    user: USER_MYSQL,
    password: PASS_MYSQL,
    database: DB_NAME
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Bienvenido a API Rest Tienda Bsale - Gonzalo Guzman')
})
app.use('/api', routes)
app.use('/api/categorias', routes)

// server running -----------------------------------
app.listen(APP_PORT, () => console.log(`Listen on port ${APP_URL}:${APP_PORT}${APP_CONTEXT_PATH}`));