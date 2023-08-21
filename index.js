const inquirer = require('inquirer')
const mysql = require('mysql2')
require('console.table')
require('dotenv').config()
// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // TODO: Add MySQL password here
  password: process.env.password,
  database: 'employee_tracker_db'
})

db.connect(function () {
  console.log(`Connected to the employee_tracker database.`)
  init()
})

function init () {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Please, select an option',
        choices: [
          'view Employee',
          'view Department',
          'view Role',
          'add Employee',
          'add Department',
          'add Role',
          'Exit App'
        ],
        name: 'user_name'
      }
    ])
    .then(response => {
      console.log(response)
      switch (response.user_name) {
        case 'view Employee':
          viewEmployees()
          break
        case 'view Department':
          viewDepartments()
          break
        case 'view Role':
          viewRoles()
          break
        case 'add Employee':
          addEmployee()
          break
        case 'add Department':
          addDepartment()
          break
        case 'add Role':
          addRole()
          break
        default:
          db.end()
          process.exit(0)
      }
    })
}

function viewDepartments () {
  console.log('Display all departments')
  db.query('select * from department;', function (err, result) {
    if (err) throw err
    console.table(result)
    init()
  })
}

function viewEmployees () {
  console.log('Display all employees')
  db.query('select * from employee;', function (err, result) {
    if (err) throw err
    console.table(result)
    init()
  })
}
function viewRoles () {
    console.log('Display all roles')
   db.query('select * from role;', function (err, result) {
      if (err) throw err
      console.table(result)
      init()
    }) 
  }

  function addEmployee (){
    inquirer.prompt([
      {
        type:"input", 
        massage: "Enter Employee's First Name", 
        name: "firstName"

      },
      {
        type:"input", 
        massage: "Enter Employee's Last Name", 
        name: "lastName"

      },
      {
        type:"list", 
        massage: "Enter Employee's Role ", 
        name: "roleID",
        choices:[
          {name:"Manager of Sales",value:1},
          {name:"Manager of IT ",value:2},
          {name:"Manager of HR",value:3},
          {name:"Full Stack Developer ",value:4},
          {name:"Sales Person",value:5},
          {name:"Chief Financial Officer",value:6},
        ]

      },
      {
        type:"list", 
        massage: "Enter Manager", 
        name: "managerID",
        choices: [
          {name:"John Osborne", value:1},
          {name:"Jeff Houke", value:2},
          {name:"Michael Fischman", value:3},
          {name:"Not Applicable", value: null},


        ]
        

      },
    ])
    .then(response => {
      db.query('INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);',
      [response.firstName, response.lastName, response.roleID, response.managerID]
      , function (err, result) {
        if (err) throw err
        console.table(result)
        init()
      })
    });

  }