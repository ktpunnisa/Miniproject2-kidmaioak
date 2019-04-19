const { getConnection } = require("./sqlConnection")

exports = module.exports = {}

exports.getRoomList = async () => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT room_id FROM chat_room")
        con.release()
        return result
    } catch (error) {
        throw "Cannot get all room"
    }
}

exports.hasRoom = async (room_id) => {
    const con = await getConnection()
    try {
        const result = await con.query("SELECT * FROM chat_room WHERE room_id = ?", [room_id])
        con.release()
        if(result.length == 0){
            return false
        } else {
            return true
        }

    } catch (error) {
        throw "Cannot get this room"
    }
}

exports.addNewRoom = async (room_id) => {
    const con = await getConnection()
    try {
        await con.query("INSERT INTO chat_room(room_id) VALUES (?)", [room_id])
        con.release()
        return {
            id: room_id,
        };

    } catch (error) {
        throw "Cannot add new room"
    }
}

exports.deleteRoom = async (room_id) => {
    const con = await getConnection()
    try {
        await con.query("DELETE FROM chat_room WHERE room_id = ?", [room_id])
        await con.query("DELETE FROM join_room WHERE room_id = ?", [room_id])
        con.release()
        return room_id + " is deleted"
    } catch (error) {
        throw "Cannot delete this room"
    }
}