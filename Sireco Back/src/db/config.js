import {createPool} from 'mysql2/promise'
import env from 'dotenv'

env.config();

export const pool = createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT
})






export default pool;
    