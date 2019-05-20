use parallel;

#getAllRoom
SELECT room_name FROM room;

#checkRoom
SELECT * FROM room WHERE room_id = "room1";

#createRoom
INSERT INTO room(room_id) VALUES ("room1");

#deleteRoom
DELETE FROM room WHERE room_id = "room1";
DELETE FROM join_room WHERE room_id = "room1";

#memberInRoom
SELECT user_name FROM join_room WHERE room_id = "room1";

#checkMemberInRoom
SELECT * FROM join_room WHERE room_id = "room1" AND user_name = "A";

#JoinRoom
INSERT INTO join_room(room_id, user_name) VALUES ("room1","A");

#leaveRoom
DELETE FROM join_room WHERE user_name = "A" AND room_name = "room1";
DELETE FROM join_room WHERE room_id = "room1" AND user_name = "A";

#allUserInRoom
SELECT user_name FROM join_room







