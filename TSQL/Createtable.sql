drop table if exists photos;

CREATE TABLE photos (
	id int NOT NULL,
	albumId int NOT NULL,
	title VARCHAR ( 255 ) NOT NULL,
	url VARCHAR ( 255 ) NOT NULL,
	thumbnails VARCHAR ( 255 ) NOT NULL
);