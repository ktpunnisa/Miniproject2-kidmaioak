const allRoomModel = require("../model/allRoom")

exports = module.exports = {}

exports.getRoomList = async (req, res) => {
    const result = await allRoomModel.getRoomList()
    res.status(200).json(result);
}

exports.addNewRoom = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.body.id)
    if(hasRoom){
        res.status(404).json(req.body.id + " already exists")
    } else {
        const result = await allRoomModel.addNewRoom(req.body.id)
        res.status(201).json(result);
    }
}

exports.addRoomIfNotExist = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.body.id)
    if(hasRoom){
        res.status(200).json({
            id: req.body.id
        })
    } else {
        const result = await allRoomModel.addNewRoom(req.body.id)
        res.status(201).json(result);
    }
}

exports.removeRoom = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.body.id)
    if(hasRoom){
        const result = await allRoomModel.deleteRoom(req.body.id)
        res.status(200).json(result)
    }
    else {
        res.status(404).json(req.body.id + " is not found")
    }
}

