CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

-- insert movies into table
INSERT INTO movies (title) VALUES ('Super Troopers'), ('Goonies'), ('Spaceballs');