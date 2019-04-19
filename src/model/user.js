const { getConnection } = require("./sqlConnection")

exports = module.exports = {}

exports.getUser = async () => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT user_name FROM chat_user NATURAL JOIN join_room")
        return result
    } catch (error) {
        throw "Cannot get all rooms"
    }
}