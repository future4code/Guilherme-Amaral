CREATE TABLE User_labecommerce (
id VARCHAR (255) PRIMARY KEY NOT NULL,
name VARCHAR (255) NOT NULL,
age INT NOT NULL
);

CREATE TABLE Products_labecommerce (
id VARCHAR (255) PRIMARY KEY NOT NULL,
name  VARCHAR (255) NOT NULL,
description VARCHAR (255) NOT NULL,
price INT
);

CREATE TABLE Ticket_labecommerce (
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
description VARCHAR (255) NOT NULL,
price INT NOT NULL,
origin VARCHAR (255) NOT NULL,
destination VARCHAR (255) NOT NULL
);

CREATE TABLE Purchase_labecommerce (
id VARCHAR(255) PRIMARY KEY NOT NULL,
total_price INT,
user_id VARCHAR (255),
product_id 	VARCHAR (255),
FOREIGN KEY (user_id) REFERENCES User_labecommerce(id),
FOREIGN KEY (product_id) REFERENCES Products_labecommerce(id)
);