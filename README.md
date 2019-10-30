# messageboard_backend

Simple node.js demonstration with Postgres database

#To run:
npm start



#db creating script:
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
   
   
 CREATE TABLE public.comments (
   id BIGSERIAL NOT NULL,
   user_name VARCHAR NOT NULL,
   date TIMESTAMP WITH TIME ZONE NOT NULL,
   comment_text VARCHAR NOT NULL,
   message_id BIGINT NOT NULL
   PRIMARY KEY(id)
 ) 
 WITH (oids = false);
 
 ALTER TABLE public.comments
   OWNER TO messageboard_user;  

ALTER TABLE public.comments
  ADD CONSTRAINT comments_fk FOREIGN KEY (message_id)
    REFERENCES public.messages(id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    NOT DEFERRABLE;
