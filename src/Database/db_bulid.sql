BEGIN;
DROP TABLE IF EXISTS users, items,views,saved CASCADE;
 CREATE TABLE users(
   id serial PRIMARY KEY,
   user_name varchar UNIQUE NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   password VARCHAR NOT NULL CHECK(char_length(password)>8),
   email VARCHAR(50) UNIQUE NOT NULL
 );
CREATE TABLE items (
	id serial PRIMARY KEY,
	name varchar(30) NOT NULL,
	shop_name varchar(30) NOT NULL,
	size varchar(10) NOT NULL,
	price FLOAT NOT NULL,
	location varchar(50) NOT NULL,
	gender varchar(20) NOT NULL,
	class  varchar(20) NOT NULL,
	img  varchar NOT NULL,
  views1 varchar(400) NOT NULL,
	views2 varchar(400) NOT NULL,
	views3 varchar(400) NOT NULL,
	views4 varchar(400) NOT NULL
);


CREATE TABLE saved (
	id serial PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  items_id INTEGER REFERENCES items(id) ON DELETE CASCADE
);

COMMIT;
