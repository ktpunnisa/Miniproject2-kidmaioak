use parallel;

#getAllRoom
SELECT room_name FROM chat_room;

#checkRoom
SELECT * FROM chat_room WHERE room_name = "room1";

#createRoom
INSERT INTO chat_room(room_name) VALUES ("room1");

#deleteRoom
DELETE FROM chat_room WHERE room_name = "room1";
DELETE FROM join_room WHERE room_name = "room1";

#createMember
INSERT INTO chat_user(user_name) VALUES ("A");

#memberInRoom
SELECT user_name FROM join_room WHERE room_name = "room1";

#checkMemberInRoom
SELECT * FROM join_room WHERE room_name = "room1" AND user_name = "A";

#JoinRoom
INSERT INTO join_room(user_name,room_name) VALUES ("A","room1");

#checkMemberInRoom
SELECT * FROM join_room WHERE user_name = "A" and room_name = "room1";

#leaveRoom
DELETE FROM join_room WHERE user_name = "A" AND room_name = "room1";

#allUserInRoom
SELECT user_name FROM chat_user NATURAL JOIN join_room; 








