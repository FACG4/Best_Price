BEGIN;

DROP TABLE IF EXISTS users, items, saved,disconut CASCADE;

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
CREATE TABLE disconut(
  id SERIAL PRIMARY KEY,
  items_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  disconut_value FLOAT
);
  INSERT INTO users (user_name,first_name,last_name,password,email) VALUES
   ('Haneenshahwan','haneen','shahwan','123456','hanen@gmail.com');
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

INSERT INTO users(user_name,first_name,last_name,password,email)VALUES
('ishak52','ishak','kassab','123','ishak-3@hotmail.com'),
('farah','farah','zaqoot','123','farah-3@hotmail.com'),
('hannen','hannen','shahwan','123','hannen-3@hotmail.com'),
('marwa','marwa','gomaa','123','marwa-3@hotmail.com'),
('marwa4','marwa','jomaa','123456789','ma@gmail.com');

INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('t-shirt1','shop1','small',100.12,'gaza','female','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt2','shop1','larg',200.12,'gaza','male','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt3','shop2','small',300.12,'gaza','male','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt4','shop3','x-larg',400.12,'gaza','female','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('T_shirt','TurkeyStyle','M',10,'Gaza','Female','Top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg'),
('jeans','BeElegentShop','L',10,'Rafah','Female','Legs','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-02.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-03.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg');



-- INSERT INTO saved(user_id,items_id) VALUES
-- (1,1),
-- (1,2),
-- (2,1),
-- (2,2),
-- (3,2),
-- (3,4);

INSERT INTO disconut(items_id,disconut_value)VALUES(2,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(3,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(4,50);

-- INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ('marwa4','marwa','jomaa','123456789','ma@gmail.com');
--
-- INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4) VALUES
-- ('T_shirt','bestyle','M',10,'Gaza','female','torso','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526976968/11911653755-12MC-sessun-itahoahanaiapa-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526976968/11911653755-12MC-sessun-itahoahanaiapa-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977024/11911653755-12MC-sessun-itahoahanaiapa-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977040/11911653755-12MC-sessun-itahoahanaiapa-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1526977052/11911653755-12MC-sessun-itahoahanaiapa-04.jpg'),
--
-- ('handbag','bestyle','S',10,'Gaza','female','accessories','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527061362/22403769384-07RO-yvonneyvonne-saclauren-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527061417/22403769384-07RO-yvonneyvonne-saclauren-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527060917/22403769384-07RO-yvonneyvonne-saclauren-01.jpg'),
--
-- ('T_shirt','bestyle','M',10,'Gaza','male','torso','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015567/12041154515-06NY-la-panoplie-teetery-02.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015678/12041154515-06NY-la-panoplie-teetery-03.jpg','http://res.cloudinary.com/dbs4mr3ow/image/upload/v1527015518/12041154515-06NY-la-panoplie-teetery-01.jpg');


COMMIT;
