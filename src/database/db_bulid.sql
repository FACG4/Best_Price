BEGIN;

DROP TABLE IF EXISTS users, items, saved,disconut,contactus CASCADE;

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

CREATE TABLE contactus(
id SERIAL PRIMARY key,
email VARCHAR(50) UNIQUE NOT NULL,
name VARCHAR(50) NOT NULL,
message VARCHAR NOT NULL

);

INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('Shirt','Mahdi','L',50,'Gaza','female','top',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581236/men1111.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men11.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men111.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581236/men1111.jpg');
  INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
  ('Shirt','PosterMan','M',80,'Gaza','female','top',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581797/men2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581797/men22.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581797/men22.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581797/men222.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581792/men2222.jpg');
INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('Shirt','FOX','L',70,'Rafah','male','top',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066710/viewmen1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066711/viewmen2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066709/viewmen3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg');
  INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
  ('Shirt','Mahdi','M',40,'Khan-Younis','male','top',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men1view1.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg');
    INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
  ('Shirt','Mahdi','M',40,'Khan-Younis','male','top',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583748/men6666.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583747/men6.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583748/men66.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583748/men666.jpg',
    'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583748/men6666.jpg');
    INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
    ('Shirt','Shurafa','S',100.12,'Jabalia','male','top',
      'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg',
      'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg',
      'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg',
      'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg',
      'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg');
      INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
      ('trousers','de facto','M',60,'Gaza','male','leg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men33.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men333.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582643/men3333.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582643/men3.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men33.jpg');
        INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
        ('trousers','de facto','S',70,'Gaza','male','leg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4444.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583147/men444.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583159/men44.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4.jpg');
          INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
        ('trousers','de facto','L',40,'Nusrirat','male','leg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men55.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men555.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5555.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5.jpg');
   INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
   ('Worker Jacket','White','S L M',50,'Gaza','female','Jacket',
     'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
   'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
 'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('shose','White','S L M',50,'Gaza','female','shose',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068282/shoseview1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068283/shoseview2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg');

INSERT INTO users(user_name,first_name,last_name,password,email)VALUES
('ishak52','ishak','kassab','$2b$10$KVa2dtanmpFWl896SAnv4.jlM3mN6gtAWtVnxk4KZEFqeMle6QJlG','ishak-3@hotmail.com'),
('farah','farah','zaqoot','123','farah-3@hotmail.com'),
('hannen','hannen','shahwan','123','hannen-3@hotmail.com'),
('marwa','marwa','gomaa','123','marwa-3@hotmail.com');

INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('t-shirt1','shop1','small',100.12,'gaza','female','t-shirts',
  'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg',
  'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg',
  'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg',
  'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg',
  'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt2','shop1','larg',200.12,'gaza','male','t-shirts'
  ,'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg'
  ,'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg'
  ,'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg'
  ,'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg'
  ,'https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt3','shop2','small',300.12,'gaza','male','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('t-shirt4','shop3','x-larg',400.12,'gaza','female','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('T_shirt','TurkeyStyle','M',10,'Gaza','Female','Top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg'),
('jeans','BeElegentShop','L',10,'Rafah','Female','Legs','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-02.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-03.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg'),

INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('T_shirt','White','S L M',0,'Gaza','female','shose',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068282/shoseview1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068283/shoseview2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg');

INSERT INTO disconut(items_id,disconut_value)VALUES(2,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(3,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(4,50);

INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ('marwa4','marwa','jomaa','123456789','ma@gmail.com');
INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ('marwa44','marwa','jomaa','123456789','ma4@gmail.com');
INSERT INTO users (user_name,first_name,last_name,password,email) VALUES ('hanen','hanen','shahwan','2b$10$NqxpWjA9/t8enmn058aD7..ybEHREcb7vY8dVXKObb7M.qmBXRifm','hanen1@hotmail.com');

INSERT INTO saved(user_id,items_id) VALUES
(1,1),
(1,2),
(2,1),
(2,2),
(3,2),
(3,4),
(9,1),
(9,2),
(9,3);

INSERT INTO disconut(items_id,disconut_value)VALUES(2,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(3,50);
INSERT INTO disconut(items_id,disconut_value)VALUES(4,50);





INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4) VALUES
('T_shirt','TurkeyStyle','M',10,'Gaza','Female','Top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg'),

('jeans','BeElegentShop','L',10,'Rafah','Female','Legs','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-02.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-03.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg');


COMMIT;
