BEGIN;

DROP TABLE IF EXISTS users, items, saved CASCADE;

 CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   user_name VARCHAR(60) UNIQUE NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   password VARCHAR NOT NULL,
   email VARCHAR(50) UNIQUE NOT NULL
 );

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	shop_name VARCHAR(30) NOT NULL,
	size varchar(10) NOT NULL,
	price FLOAT NOT NULL,
	location VARCHAR(50) NOT NULL,
	gender VARCHAR(10) NOT NULL,
	class VARCHAR(20) NOT NULL,
	img VARCHAR NOT NULL,
  views1 VARCHAR,
	views2 VARCHAR,
	views3 VARCHAR,
	views4 VARCHAR
);

CREATE TABLE saved (
	id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  items_id INTEGER REFERENCES items(id) ON DELETE CASCADE
);

INSERT INTO items (name, shop_name, size, price, location, gender, class, img) VALUES
('pants', 'shop', 'small', '145', 'Gaza', 'M', 'Shirt', 'https://i.imgur.com/aRLCUMR.jpg'),
('pants', 'shop', 'x-large', '20', 'Gaza', 'F', 'Shirt', 'https://i.imgur.com/1xF9y4D.jpg'),
('pants', 'shop', 'large', '200', 'Gaza', 'F', 'Shirt', 'https://i.imgur.com/VUflJaV.png'),
('pants', 'shop', 'medium', '70', 'Gaza', 'M', 'Shirt', 'https://i.imgur.com/94NEXyy.jpg'),
('pants', 'shop', 'large', '70', 'Gaza', 'M', 'Shirt', 'https://i.imgur.com/aRLCUMR.jpg'),
('pants', 'shop', 'large', '45', 'Gaza', 'F', 'Shirt', 'https://i.imgur.com/aRLCUMR.jpg'),
('pants', 'shop', 'large', '120', 'Gaza', 'F', 'Shirt', 'https://i.imgur.com/aRLCUMR.jpg');

COMMIT;
