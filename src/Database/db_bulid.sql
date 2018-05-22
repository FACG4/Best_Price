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
  views1 VARCHAR NOT NULL,
	views2 VARCHAR NOT NULL,
	views3 VARCHAR NOT NULL,
	views4 VARCHAR NOT NULL
);


CREATE TABLE saved (
	id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  items_id INTEGER REFERENCES items(id) ON DELETE CASCADE
);


INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ('marwa4','marwa','jomaa','123456789','ma@gmail.com');

INSERT INTO items (name,shop_name,size,location,gender,class,img,views1,views2,views3,views4) VALUES
('T_shirt','TurkeyStyle','M','Gaza','Female','Top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg'),

('jeans','BeElegentShop','L','Rafah','Female','Legs','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-02.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-03.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg');


COMMIT;
