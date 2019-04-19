create database parallel;
use parallel;
create table chat_user(
    user_name varchar(30) not null,
    primary key (user_name)
    );
create table chat_room(
    room_name varchar(30) not null,
    primary key (room_name)
    );
create table join_room(
	user_name varchar(30) references chat_user(user_name),
    room_name varchar(30) references chat_room(room_name),
    primary key (user_name,room_name)
    );
