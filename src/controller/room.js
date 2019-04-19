const roomModel = require("../model/room")
const allRoomModel = require("../model/allRoom")

exports = module.exports = {}

exports.getRoomMember = async (req, res) => {
    const hasRoom = await allRoomModel.hasRoom(req.params.id)
    if(hasRoom){
        const result = await roomModel.getRoomMember(req.params.id)
        res.status(200).json(result);
    } else {
        res.status(404).json("Room does not exist")
    }
    
}