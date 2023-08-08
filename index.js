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