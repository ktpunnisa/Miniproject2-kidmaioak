const express = require("express")
const bodyParser = require("body-parser")
const allRoomController = require("../controller/allRoom")
const roomController = require("../controller/room")
const userController = require("../controller/user")

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

//allRooms
router.get('/allRooms', allRoomController.getRoomList)
router.post('/allRooms', allRoomController.addNewRoom)
router.put('/allRooms', allRoomController.addRoomIfNotExist)
router.delete('/allRooms', allRoomController.deleteRoom)

//room
router.get('/room/:id', roomController.getRoomMember)

//users
router.get('/users', userController.getUser)

module.exports = router