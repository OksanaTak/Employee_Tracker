USE employee_tracker_db;
select * from department;
select * from role;
select * from employee;

select d.id, d.department_name,e.first_name,e.last_name,e.role_id, r.title, r.salary from department d left join role r on r.department_id = d.id left join employee e on e.role_id = r.id ORDER BY d.id;