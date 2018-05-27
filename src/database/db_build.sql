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

INSERT INTO users (user_name,first_name, last_name, password, email) VALUES
('marwajomaa','marwa','jomaa','123456789','ma@gmail.com');

INSERT INTO items (name, shop_name, size, price, location, gender, class, img, views1 , views2, views3 ,views4) VALUES
('T_shirt','bestyle','medium',10,'Gaza','female','torso','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526976968/11911653755-12MC-sessun-itahoahanaiapa-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526976968/11911653755-12MC-sessun-itahoahanaiapa-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977024/11911653755-12MC-sessun-itahoahanaiapa-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977040/11911653755-12MC-sessun-itahoahanaiapa-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977052/11911653755-12MC-sessun-itahoahanaiapa-04.jpg'),

('handbag','bestyle','small',10,'Gaza','female','accessories','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527061362/22403769384-07RO-yvonneyvonne-saclauren-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527061417/22403769384-07RO-yvonneyvonne-saclauren-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg'),

('T_shirt','bestyle','medium',10,'Gaza','male','torso','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015567/12041154515-06NY-la-panoplie-teetery-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015678/12041154515-06NY-la-panoplie-teetery-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg');



COMMIT;
