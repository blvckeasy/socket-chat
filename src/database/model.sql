create database chat;

create table if not exists users (
  id serial not null primary key,
  username varchar not null,
  password varchar not null,
  img_url varchar not null,
  online boolean not null default true
);

create table if not exists messages (
  id serial not null primary key,
  user_id int not null references users(id),
  chat_send_time timestamptz default now(),
  message varchar not null
);