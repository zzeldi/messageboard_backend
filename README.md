# messageboard_backend

Simple node.js demonstration with Postgres database

#To run:
npm start



#To create db:
CREATE DATABASE messageboard
  WITH ENCODING = 'UTF8';

CREATE ROLE messageboard_user
 NOINHERIT NOREPLICATION LOGIN PASSWORD 'RA;l2PL./3';
 
 CREATE TABLE public.message (
   id BIGSERIAL NOT NULL,
   user_name VARCHAR NOT NULL,
   date TIMESTAMP(0) WITH TIME ZONE NOT NULL,
   message VARCHAR NOT NULL,
   PRIMARY KEY(id)
 ) 
 WITH (oids = false);
 
 ALTER TABLE public.messages
   OWNER TO messageboard_user;
   
