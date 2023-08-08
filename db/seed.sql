USE employee_tracker_db;

INSERT INTO DEPARTMENT(department_name)VALUES
("IT"),("Sales"),("HR");

INSERT INTO ROLE(title, salary, department_id) VALUES ("Manager of Sales", 150000, 2),
("Manager of IT", 200000, 1), ("Manager of HR", 160000, 3),
("Full Stack Developer",250000, 1),("Sales Person",120000, 2), ("Chief Financial Officer", 280000,2);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id) VALUES
("John","Osborne",1, NULL),
("Jeff", "Houke", 2, NULL),
("Michael", "Fischman", 3, NULL),
("Rajshree", "Patel", 4, 2),
("Philip", "Fraser", 5, 1),
("Devan", "Karra", 6, 3);

