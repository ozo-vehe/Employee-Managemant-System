// Create a class called Employee that includes the following properties: name, id, email, getName(), getId(), getEmail(), getRole() (returns 'Employee')
class Employee {
  constructor(index, name, id, email) {
    this.index = index;
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Define the getIndex() method that returns the employee's index
  getIndex() {
    return this.index;
  }
  // Define the getName() method that returns the employee's name
  getName() {
    return this.name;
  }
  // Define the getId() method that returns the employee's id
  getId() {
    return this.id;
  }
  // Define the getEmail() method that returns the employee's email
  getEmail() {
    return this.email;
  }
}

// An employee's role will be determined by their class (i.e. Manager, Engineer, or Intern), which will be the parent class containing the shared properties and methods of the child classes.
// Create a class called Manager that extends the Employee class and adds the following properties: officeNumber, getRole()
class Manager extends Employee {
  constructor(index, name, id, email, officeNumber) {
    // Call parent constructor here:
    super(index, name, id, email);
    this.officeNumber = officeNumber;
  }
  // Define the getRole() method that returns 'Manager'
  getRole() {
    return "Manager";
  }
  // Define additional method that returns the manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}
// Create a class called Engineer that extends the Employee class and adds the following properties: github (GitHub username), getGithub(), getRole() (overridden to return 'Engineer')
class Engineer extends Employee {
  constructor(index, name, id, email, github) {
    // Call parent constructor here:
    super(index, name, id, email);
    this.github = github;
  }
  // Define the getGithub() method that returns the engineer's GitHub username
  getGithub() {
    return this.github;
  }
  // Define the getRole() method that returns 'Engineer'
  getRole() {
    return "Engineer";
  }
}
// Create a class called Intern that extends the Employee class and adds the following properties: school, getSchool(), getRole() (overridden to return 'Intern')
class Intern extends Employee {
  constructor(index, name, id, email, school) {
    // Call parent constructor here:
    super(index, name, id, email);
    this.school = school;
  }
  // Define the getSchool() method that returns the intern's school
  getSchool() {
    return this.school;
  }
  // Define the getRole() method that returns 'Intern'
  getRole() {
    return "Intern";
  }
}

// An array to hold all the employees, be it a manager, engineer, or intern
const employees = [];

// Function to add an employee to the employees array
function addEmployee(index, name, id, email, data, role) {
  // Create a variable to hold the new employee object based on the role
  let newEmployee;
  // Use a switch statement to create the new employee object based on the role
  switch (role) {
    case "manager":
      newEmployee = new Manager(index, name, id, email, data);
      break;
    case "engineer":
      newEmployee = new Engineer(index, name, id, email, data);
      break;
    case "intern":
      newEmployee = new Intern(index, name, id, email, data);
      break;
    default:
      throw new Error("Invalid role.");
  }

  // Add the new employee to the employees array
  employees.push(newEmployee);
  // Call the listEmployees() function to display the saved employees
  listEmployees();
}

// Function to generate the employee table
function employeeTable(employee) {
  // Use the return statement to return the table body containing the employee's information
  return `
    <tbody>
      <tr>
        <td>${employee.getIndex()}.</td>
        <td>${employee.getName()}</td>
        <td>${employee.getId()}</td>
        <td>${employee.getEmail()}</td>
        <td>${employee.getRole()}</td>
        ${
          employee.getRole() === "Manager"
            ? `<td>${employee.getOfficeNumber()}</td>`
            : ""
        }
        ${
          employee.getRole() === "Engineer"
            ? `<td>${employee.getGithub()}</td>`
            : ""
        }
        ${
          employee.getRole() === "Intern"
            ? `<td>${employee.getSchool()}</td>`
            : ""
        }
      </tr>
    </tbody>
  `;
}

// Function to list all employees saved in the employees array on the page
function listEmployees() {
  // Check first if the employees array is empty, if it is not, carry out the below functions
  if (employees.length > 0) {
    // Get the employee list element
    const employeeList = document.querySelector("#employeeList");
    // Get the no employee text element
    const noEmployeeText = document.querySelector(".employees p");

    // Add the hide class to the no employee text element
    noEmployeeText.classList.add("hide");
    // Set the innerHTML of the employee list element to an empty string
    employeeList.innerHTML = "";
    // Create a table head
    const tableHead = `
      <thead>
        <tr>
          <th colspan="2">Name</th>
          <th>ID</th>
          <th>Email</th>
          <th>Role</th>
          <th>Office Number/GitHub/School</th>
        </tr>
      </thead>
    `;
    // Set the innerHTML of the employee list element to the table head
    employeeList.innerHTML = tableHead;
    // Loop through the employees array and call the employeeTable() function to generate the table body for each employee
    employees.forEach((employee) => {
      employeeList.innerHTML += employeeTable(employee);
    });
  }
}

// Select employee role
const employeeRole = document.querySelector("#action");
employeeRole.addEventListener("change", function (e) {
  const role = e.target.value;
  // Get input fields for each role
  const officeNumberInput = document.querySelector(".employeeOfficeNumber");
  const githubInput = document.querySelector(".github");
  const schoolInput = document.querySelector(".school");

  // Use a switch statement to show the input field for the selected role and hide the others
  switch (role) {
    case "manager":
      githubInput.classList.add("hide");
      schoolInput.classList.add("hide");
      officeNumberInput.classList.remove("hide");
      break;
    case "engineer":
      officeNumberInput.classList.add("hide");
      schoolInput.classList.add("hide");
      githubInput.classList.remove("hide");
      break;
    case "intern":
      officeNumberInput.classList.add("hide");
      githubInput.classList.add("hide");
      schoolInput.classList.remove("hide");
      break;
    default:
      officeNumberInput.classList.add("hide");
      githubInput.classList.add("hide");
      schoolInput.classList.add("hide");
  }
  console.log(e.target.value);
});

// Add employee from the form
const employeeForm = document.querySelector("#employeeForm");
employeeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const employeeName = document.querySelector("#employeeName").value;
  const employeeID = document.querySelector("#employeeID").value;
  const employeeEmail = document.querySelector("#employeeEmail").value;
  const employeeRole = document.querySelector("#action").value;

  console.log(employeeName, employeeID, employeeEmail, employeeRole);
  let index;

  try {
    switch (employeeRole) {
      case "manager":
        const officeNumber = document.querySelector(
          "#employeeOfficeNumber"
        ).value;
        index = employees.length + 1;
        addEmployee(
          index,
          employeeName,
          employeeID,
          employeeEmail,
          officeNumber,
          employeeRole
        );
        break;
      case "engineer":
        const github = document.querySelector("#github").value;
        index = employees.length + 1;
        addEmployee(
          index,
          employeeName,
          employeeID,
          employeeEmail,
          github,
          employeeRole
        );
        break;
      case "intern":
        const school = document.querySelector("#school").value;
        index = employees.length + 1;
        addEmployee(
          index,
          employeeName,
          employeeID,
          employeeEmail,
          school,
          employeeRole
        );
        break;
      default:
        alert("Invalid action.");
        throw new Error("Invalid action.");
    }
    document.querySelector("#employeeName").value = "";
    document.querySelector("#employeeID").value = "";
    alert("Employee added successfully.");
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// View employees
const viewEmployees = document.querySelector(".view");
const employeesContainer = document.querySelector(".employees");
viewEmployees.addEventListener("click", function (e) {
  employeesContainer.classList.toggle("hide");
});
