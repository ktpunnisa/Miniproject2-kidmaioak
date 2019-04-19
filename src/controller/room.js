const roomModel = require("../model/room")
const allRoomModel = require("../model/allRoom")

exports = module.exports = {}

exports.getRoomMember = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.params.id)
    if (hasRoom) {
        const result = await roomModel.getRoomMember(req.params.id)
        res.status(200).json(result);
    } else {
        res.status(404).json("Room does not exist")
    }
}

exports.joinRoom = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.params.id)
    if (hasRoom) {
        const isJoin = await roomModel.isJoin(req.params.id, req.body.user)
        if (isJoin) {
            res.status(200).json({})
        } else {
            const result = await roomModel.joinRoom(req.params.id, req.body.user)
            res.status(201).json(result)
        }
    } else {
        res.status(404).json(req.params.id + " is not found")
    }
}

exports.leaveRoom = async (req, res) => {
    const isJoin = await roomModel.isJoin(req.params.id, req.body.user)
    if (isJoin) {
        const result = await roomModel.deleteJoin(req.params.id, req.body.user)
        res.status(200).json(result)
    } else {
        res.status(404).json(req.body.user + " is not found")
    }
}
