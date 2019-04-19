const { getConnection } = require("./sqlConnection")

exports = module.exports = {}

exports.getRoomMember = async (room_id) => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT user_name FROM join_room WHERE room_id = ?", [room_id])
        con.release()
        return result
    } catch (error) {
        throw "Cannot get members in this room"
    }
}

exports.isJoin = async (room_id, user_name) => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT * FROM join_room WHERE room_id = ? AND user_name = ?", [room_id, user_name])
        con.release()
        if(result.length == 0){
            return false
        } else {
            return true
        }
    } catch (error) {
        throw "Cannot know about this join"
    }
}

exports.joinRoom = async (room_id, user_name) => {
    const con = await getConnection()
    try {
        await con.query("INSERT INTO join_room(room_id, user_name) VALUES (?,?)", [room_id, user_name])
        con.release()
        return {}

    } catch (error) {
        throw "This member can not join this room"
    }
}

exports.deleteJoin = async (room_id, user_name) => {
    const con = await getConnection()
    try {
        await con.query("DELETE FROM join_room WHERE room_id = ? AND user_name = ?", [room_id, user_name])
        con.release()
        return user_name + " leaves the room"

    } catch (error) {
        throw "Cannot delete this join"
    }
}