DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(16) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(280) NOT NULL,
  userID INT,
  roomID INT,
  PRIMARY KEY(id),
  FOREIGN KEY(userID) REFERENCES users(id),
  FOREIGN KEY(roomID) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

