const mysql = require("mysql")
const util = require("util")
const { db } = require("../config")

const con = mysql.createPool(db)

exports = module.exports = {}

exports.getConnection = () => {
    return new Promise((resolve, reject) => {
        con.getConnection((err, conn) => {
            if (err) return reject(err)
            conn.query = util.promisify(conn.query)
            resolve(conn)
        })
    })
}
