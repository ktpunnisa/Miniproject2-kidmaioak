const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    port: process.env.HTTP_PORT || 5000,
    db: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
}