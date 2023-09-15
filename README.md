# Employee Management System
The Employee Management System is a simple web-based application that simplifies employee management. Built using HTML, JavaScript, and CSS, it allows users to add employee records and view all employee details. It leverages classes, switch statements, and try-catch-finally statements to perform all this actions and more.

![Employee Management System Screenshot](./employee-management.png)

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Walkthrough](#walkthrough)
- [Usage](#usage)
- [Contributing](#contributing)

## Features:
### 1. Add Employee:
   - Users can easily add new employees to the system.
   - The application prompts users to enter essential employee details, such as the employee's name, email, and ID.
   - The system adapts to different employee roles, including intern, engineer, and manager, by dynamically displaying role-specific input fields.
   - For interns, users are prompted to provide the school name.
   - For engineers, users need to enter the employee's GitHub profile URL.
   - For managers, the system requests the employee's office number.
   - Once all required information is provided, users can click the "Add Employee" button to save the employee's details.
### 2. View Employee:
   - Users can easily access a list of all the employees saved in the system.
   - The system displays the employee details in a clear and organized tabular format.
   - Users can conveniently view all the employees' information at once, making it a valuable tool for HR personnel or managers.

## Prerequisites:
Before using the Employee Management System, ensure that you have the following prerequisites in place:
- A modern web browser (e.g., Google Chrome, Mozilla Firefox) to run the application.
- A text editor (e.g., Visual Studio Code, Sublime Text) for viewing and potentially editing the source code.

## Walkthrough
- **Classes**: The system utilizes a `Employee` class to represent employees with an `index`, `name`, `id` and `email` properties. This forms the parent class from which other classes were created from and this includes the `Manager`, `Engineer`, and `Intern` classes. Employee records are created as instances of these classes.
- **Switch Statements**: A switch statement is used on different occasions one of which is to determine the role selected and create the appropriate employee instance with the appropriate class, another is the determine the additional input to display still depending on the role selected.
- **Try-Catch-Finally Statements**: Error handling is implemented using try-catch-finally blocks. For example, if the user attempts to add an employee without providing a name or ID, a catch block will handle the error and display an alert with an error message.

## Usage
### 1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/ozo-vehe/Employee-Managemant-System.git
   ```

### 2. Open the Application
   - Locate the `index.html` file in the project folder and open it in your preferred web browser.

### 3. Add Employee
   - Select the employee's role (intern, engineer, or manager) from the dropdown menu.
   - Fill in the required employee details, such as name, email, and ID.
   - Depending on the selected role, provide additional role-specific information:
   - For interns, enter the school name.
   - For engineers, enter the GitHub profile URL.
   - For managers, specify the office number.
   - Click the "Add Employee" button to save the employee's information.

### 4. View Employee:
   - Click the "View Employees" button to access the list of all employees in a well-organized table.
   - Here, you can review and manage employee records with ease.

### 5. Enjoy using the Employee Management System!

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch with a descriptive name: `git checkout -b feature/your-feature-name`.
4. Make your changes and commit them: `git commit -m 'Add some feature'`.
5. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
6. Open a pull request on the original repository.
