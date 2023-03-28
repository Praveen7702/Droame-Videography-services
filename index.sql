CUSTOMERS
- id (integer, primary key, auto increment)
- name (varchar(255))
- email (varchar(255))
- phone (varchar(255))

BOOKINGS
- id (integer, primary key, auto increment)
- customer_id (integer, foreign key references CUSTOMERS.id)
- drone_shot_name (varchar(255))
- booking_date (date)
- booking_time (time)
- booking_duration (integer)

CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER REFERENCES customers(id),
  drone_shot_name VARCHAR(255),
  booking_date DATE,
  booking_time TIME,
  booking_duration INTEGER
);
CREATE TABLE customers (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE bookings (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_id INT(11) NOT NULL,
    drone_shot_id INT(11) NOT NULL,
    customer_id INT(11) NOT NULL,
    created_time DATETIME NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);