const fs = require("fs");
const readline = require("readline");

let employees = [];

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load data from file
function loadData() {
  if (fs.existsSync("data.json")) {
    employees = JSON.parse(fs.readFileSync("data.json"));
  }
}

// Save data to file
function saveData() {
  fs.writeFileSync("data.json", JSON.stringify(employees, null, 2));
}


function menu() {
  console.log("\n===== Employee Management System =====");
  console.log("1. Add Employee");
  console.log("2. View Employees");
  console.log("3. Update Employee");
  console.log("4. Delete Employee");
  console.log("5. Exit");

  rl.question("Choose option: ", handleMenu);
}


function handleMenu(choice) {
  switch (choice) {
    case "1":
      addEmployee();
      break;
    case "2":
      viewEmployees();
      break;
    case "3":
      updateEmployee();
      break;
    case "4":
      deleteEmployee();
      break;
    case "5":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice");
      menu();
  }
}


function addEmployee() {
  rl.question("Enter ID: ", (id) => {
    rl.question("Enter Name: ", (name) => {
      employees.push({ id, name });
      saveData();
      console.log("Employee added!");
      menu();
    });
  });
}


function viewEmployees() {
  console.log("\nEmployee List:");
  if (employees.length === 0) {
    console.log("No employees found.");
  } else {
    employees.forEach((emp) => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  menu();
}


function updateEmployee() {
  rl.question("Enter ID to update: ", (id) => {
    let emp = employees.find(e => e.id === id);

    if (emp) {
      rl.question("Enter new name: ", (newName) => {
        emp.name = newName;
        saveData();
        console.log("Employee updated!");
        menu();
      });
    } else {
      console.log("Employee not found!");
      menu();
    }
  });
}


function deleteEmployee() {
  rl.question("Enter ID to delete: ", (id) => {
    let newList = employees.filter(e => e.id !== id);

    if (newList.length === employees.length) {
      console.log("Employee not found!");
    } else {
      employees = newList;
      saveData();
      console.log("Employee deleted!");
    }
    menu();
  });
}

// Start program
loadData();
menu();