const inquirer = 'inquirer'
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
  database: 'employee_tracker'
})

db.connect(function () {
  console.log(`Connected to the employee_tracker database.`)
  init()
})


function init(){
    inquirer.prompt([{

    
        type:"list",
        message:"Please, select an option",
        choices: ["view_employee","view_department", "view _role" , "add_employee","add_department", "add_role"], 
                name:"user_name",
    }]).then(response =>{
        console.log(response)
    })
   
}
