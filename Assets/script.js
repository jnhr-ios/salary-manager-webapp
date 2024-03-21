// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  //organize everything into an array
  
  const employees = [];

    let addEmployee = true;

    while (addEmployee) {
      //ask for first name, last name and salary
        const firstName = prompt("Enter employee's first name:");
        const lastName = prompt("Enter employee's last name:");
        let salary = prompt("Enter employee's salary:");
        
        // Check if salary is a number, otherwise default to 0
        if (isNaN(salary)) {
            salary = 0;
        } else {
            salary = parseInt(salary);
        }

        employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });
        //ask to add another employee
        const continueInput = prompt("Do you want to add another employee? (yes/no)");
        if (continueInput.toLowerCase() !== 'yes') {
            addEmployee = false;
        }
    }
    
    //sort by last name
    employees.sort();
    //return the array
    return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  
  
  //add all of the added salaries
  if (employeesArray.length === 0) {
    console.log("No employees to calculate average salary.");
    return;
  }
  //add all of the added salaries
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  //divide the salary total by the number of salaries
    const averageSalary = totalSalary / employeesArray.length;

//log the total on the console
    console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employeesArray.length} employees.`);
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //use math.random to display a random employee
  
  if (employeesArray.length === 0) {
    console.log("No employees to select from.");
    return;
  }
  //use math.random to display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];

    console.log(`Congratulation to: ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
