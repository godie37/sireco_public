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


// pool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === "PROTOCOL_CONNECTION_LOST")
//       console.error("<-----* LA CONEXIÓN A LA BASE DE DATOS FUE CERRADA *---->");
//     if (err.code === "ER_CON_COUNT_ERROR")
//       console.error("<-----* LA BASE DE DATOS TIENE DEMASIADAS CONEXIONES *---->");
//     if (err.code === "ERR_CONNECTION_REFUSED")
//       console.error("<-----* SE RECHAZÓ LA CONEXIÓN A LA BASE DE DATOS *---->");
//   }
//   if (connection) connection.release();
//   console.log("<-----* DB is Connected *---->");
//   return;
// });



export default pool;
    