const { getConnection } = require("./sqlConnection")

exports = module.exports = {}

exports.getUser = async () => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT user_name FROM join_room")
        return result.map(function(res) {
            return res.user_name
        });
    } catch (error) {
        throw "Cannot get all users in all rooms"
    }
}