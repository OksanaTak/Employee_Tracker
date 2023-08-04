DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE mployee_tracker_db;

USE mployee_tracker_db;

CREATE TABLE Department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);

CREATE TABLE Role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id),
    REFERENCES department(id),
    ON DELETE SET NULL,
);

create table employee (
  id int not null auto_increment,
  first_name VARCHAR(30),
  last_name varchar(30),
  role_id INT,
  manager_id INT,
)