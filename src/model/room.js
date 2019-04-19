const { getConnection } = require("./sqlConnection")

exports = module.exports = {}

exports.getRoomMember = async (room_id) => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT user_name FROM join_room WHERE room_id = ?", [room_id])
        return result
    } catch (error) {
        throw "Cannot get room members"
    }
}