CREATE DATABASE storeTest;

CREATE TABLE users(
    idUser VARCHAR(100) NOT NULL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE products(
    idProduct VARCHAR(100) NOT NULL PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL,
    stock INT NOT NULL
);


CREATE TABLE receipts(
    idReceipt VARCHAR(100) NOT NULL PRIMARY KEY,
    dateSale Date NOT NULL,
    totalSale FLOAT NOT NULL
);

CREATE TABLE productSolds(
    idProductSold VARCHAR(100) NOT NULL PRIMARY KEY,
    idReceipt VARCHAR(100) NOT NULL,
    idProduct VARCHAR(100) NOT NULL,
    units VARCHAR(100) NOT NULL,    
    totalSale FLOAT NULL,

    CONSTRAINT fk_idReceipt_Receipts FOREIGN KEY (idReceipt) REFERENCES receipts(idReceipt),
    CONSTRAINT fk_idProduct_Products FOREIGN KEY (idProduct) REFERENCES products(idProduct)
);
