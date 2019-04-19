create database parallel;
use parallel;
create table room(
    room_id varchar(30) not null,
    primary key (room_id)
    );
create table join_room(
	user_name varchar(30),
    room_id varchar(30) references chat_room(room_id),
    primary key (user_name,room_id)
    );
