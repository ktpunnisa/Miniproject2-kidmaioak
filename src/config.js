const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    port_server1: process.env.HTTP_PORT1 || 5000,
    port_server2: process.env.HTTP_PORT2 || 6000,
    db: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
}
