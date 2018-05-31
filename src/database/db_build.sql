BEGIN;

DROP TABLE IF EXISTS users, items, saved, contactus CASCADE;

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


CREATE TABLE contactus(
id SERIAL PRIMARY key,
email VARCHAR(50) UNIQUE NOT NULL,
name VARCHAR(50) NOT NULL,
message VARCHAR NOT NULL

);

INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('Shirt','Mahdi','L',50,'Gaza','male','top',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581236/men1111.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men11.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men111.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581255/men1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527581236/men1111.jpg');
  INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
  ('Shirt','PosterMan','M',80,'Gaza','male','top',
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
  ('Shirt','Mahdi','M',60,'Khan-Younis','male','top',
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
      ('trousers','de facto','M',60,'Gaza','male','legs',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men33.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men333.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582643/men3333.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582643/men3.jpg',
        'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527582644/men33.jpg');
        INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
        ('trousers','de facto','S',70,'Gaza','male','legs',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4444.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583147/men444.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583159/men44.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583146/men4.jpg');
          INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
        ('trousers','de facto','L',40,'Nusrirat','male','legs',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men55.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men555.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5555.jpg',
          'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527583543/men5.jpg');
   INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
   ('Worker Jacket','White','S L M',50,'Gaza','female','top',
     'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
   'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
 'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg',
'http://res.cloudinary.com/ddmnsmluf/image/upload/v1526909230/111412751060-05KH-mm6-vesteworker-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('Shirt','White','S L M',50,'Gaza','male','top',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066710/viewmen1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066711/viewmen2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066709/viewmen3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527066694/men-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('T-Shirt','White','S L M',50,'Gaza','male','top',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men1view1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527067164/men2view2.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('shose','White','S L M',50,'Gaza','female','shoes',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068282/shoseview1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068283/shoseview2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg');
INSERT INTO items(name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('t-shirt1','shop1','small',100.12,'gaza','male','top',
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
('t-shirt4','shop3','x-larg',400.12,'gaza','male','t-shirts','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-01.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-02.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-03.jpg','https://media.lexception.com/img/products/montlimart/11175568569-06BA-montlimart-chemisecolmontlimartmlenlin-04.jpg'),
('T_shirt','TurkeyStyle','M',50,'Gaza','female','top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg'),
('jeans','BeElegentShop','L',50,'Rafah','female','legs','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-02.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-03.jpg','https://media.lexception.com/img/products/notify/111725959085-01BC-notify-jeanscaprihellebora-01.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4)VALUES
('T_shirt','White','S L M',0,'Gaza','female','shoes',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068282/shoseview1.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews3.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068283/shoseview2.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg',
  'http://res.cloudinary.com/ddmnsmluf/image/upload/v1527068281/shoseviews4.jpg');
INSERT INTO items (name,shop_name,size,price,location,gender,class,img,views1,views2,views3,views4) VALUES
('T_shirt','TurkeyStyle','M',10,'Gaza','female','top','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-01.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-02.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-03.jpg','https://media.lexception.com/img/products/fabric-hc/11950957595-05ER-fabric-hc-zoe-04.jpg');



COMMIT;
