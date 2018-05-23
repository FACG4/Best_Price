BEGIN;
DROP TABLE IF EXISTS users, items,saved,disconut CASCADE;
 CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   user_name VARCHAR(60) UNIQUE NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   password VARCHAR NOT NULL CHECK(char_length(password)>5),
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
CREATE TABLE disconut(
  id SERIAL PRIMARY KEY,
  items_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  disconut_value FLOAT
);
  INSERT INTO users (user_name,first_name,last_name,password,email) VALUES
   ('Haneenshahwan','haneen','shahwan','123456','hanen@gmail.com');
   INSERT INTO disconut(items_id,disconut_value)VALUES(2,50);
   INSERT INTO disconut(items_id,disconut_value)VALUES(3,50);
   INSERT INTO disconut(items_id,disconut_value)VALUES(4,50);
   INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
   ('Worker Jacket','White','S L M',50,'Gaza','female','Jacket',
     'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
   'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
 'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('Shirt','White','S L M',50,'Gaza','male','Jacket',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066710/viewmen1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066711/viewmen2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066709/viewmen3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('T-Shirt','White','S L M',50,'Gaza','male','Jacket',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men1view1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('shose','White','S L M',50,'Gaza','female','shose',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068282/shoseview1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068283/shoseview2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg');


COMMIT;
