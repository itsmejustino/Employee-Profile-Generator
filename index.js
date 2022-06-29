// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = rclequire('fs');
const inquirer = require('inquirer');

const team = [];

function getNext(option) {
  if (option === 'addEngineer') {
    addEngineer();
  }
  if (option === 'addIntern') {
    addIntern();
  }
  if (option === 'finish') {
    generateHtml();
  }
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'engineerName',
        messsage: "What is the engineer's name?",
        type: 'input',
      },
      {
        name: 'engineerId',
        message: "What is the engineer's ID?",
        type: 'input',
      },
      {
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        type: 'input',
      },
      {
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?",
        type: 'input',
      },
      {
        name: 'addMore',
        type: 'list',
        choices: [
          {
            value: 'addEngineer',
            name: 'Add engineer',
          },
          {
            value: 'addIntern',
            name: 'Add intern',
          },
          {
            value: 'finish',
            name: 'Finish',
          },
        ],
      },
    ])
    .then((data) => {
      team.push(data);
      getNext(data.addMore);
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: 'internName',
        messsage: "What is the intern's name?",
        type: 'input',
      },
      {
        name: 'internId',
        message: "What is the intern's ID?",
        type: 'input',
      },
      {
        name: 'internEmail',
        message: "What is the intern's email?",
        type: 'input',
      },
      {
        name: 'internSchool',
        message: 'What school does the intern attend?',
        type: 'input',
      },
      {
        name: 'addMore',
        type: 'list',
        choices: [
          {
            value: 'addEngineer',
            name: 'Add engineer',
          },
          {
            value: 'addIntern',
            name: 'Add intern',
          },
          {
            value: 'finish',
            name: 'Finish',
          },
        ],
      },
    ])
    .then((data) => {
      team.push(data);
      getNext(data.addMore);
    });
}

function generateHtml() {
  const stringifiedTeam = JSON.stringify(team);
  fs.writeFile('./', `${stringifiedTeam.input}`, 'utf-8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('team successfully written');
    }
  });
}

// get the manager's name, employee ID, email address and office number
inquirer
  .prompt([
    {
      name: 'managerName',
      type: 'input',
      message: "What is the team manager's name?",
    },
    {
      name: 'employeeId',
      type: 'input',
      message: 'What is the employee ID?',
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email address?",
    },
    {
      name: 'officeNumber',
      type: 'input',
      message: 'What is the office number?',
    },
    {
      name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    },
  ])
  .then((data) => {
    team.push(data);
    getNext(data.addMore);
  });