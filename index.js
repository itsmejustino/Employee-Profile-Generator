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

const fs = require('fs');
const inquirer = require('inquirer');

const team = [];

function getNext(option) {
  if (option === 'bringonEngineer') {
    bringonEngineer();
  }
  if (option === 'addIntern') {
    addIntern();
  }
  if (option === 'finish') {
    generateHtml();
  }
}
//Intern card information. Name, ID#, Email, School Name
function bringonEngineer() {
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
        name: 'engineerGhub',
        message: "What is the engineer's GitHub username?",
        type: 'input',
      },
      {
        name: 'newteamMember',
        type: 'list',
        choices: [
          {
            value: 'bringonEngineer',
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
      getNext(data.newteamMember);
    });
}
//Intern card information. Name, ID#, Email, School Name
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
        name: 'school',
        message: 'What school does the intern attend?',
        type: 'input',
      },
      {
        name: 'newteamMember',
        type: 'list',
        choices: [
          {
            value: 'bringonEngineer',
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
      getNext(data.newteamMember);
    });
}

//manager card information. Name, ID#, Email, Office#
inquirer
  .prompt([
    {
      name: 'managerFirstName',
      type: 'input',
      message: "What is the team manager's name?",
    },
    {
      name: 'employeeIdManager',
      type: 'input',
      message: 'What is the employee ID?',
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email address?",
    },
    {
      name: 'managerOfficeNumber',
      type: 'input',
      message: 'What is the office number?',
    },
    {
      name: 'newteamMember',
      type: 'list',
      choices: [
        {
          value: 'bringonEngineer',
          name: 'Add Engineer',
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
    getNext(data.newteamMember);
  });

  function generateHtml() {
    // let i= 0;
    console.log(team)
    // let managerEl = team[0].managerFirstName;
    // let engineerEl = team[0].engineerName;
    console.log(team[0].managerFirstName)
    console.log(team[1].engineerName)
    console.log(team[2].internName)
    // let internEl = team[0].internName;
    
    // for (i=0; i < team.length; i++) {
    //     managerEl
    // }
      fs.writeFile(`./dist/index-test2.html`,`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="../dist/styles.css" type="text/css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
      
          <title>Team Generator</title>
        </head>
      
        <nav class="navbar static-top bg-light" id="nav-container">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Teams Generator</a>
          </div>
        </nav>
      
        <body>
          <section class="teams-container">
            <div class="card" id="intern-card" style="width: 18rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
                />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
                />
              </svg>
      
              <div class="card-body">
                <h5 class="card-title">Intern</h5>
             
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${team[2].internName} </li>
                <li class="list-group-item">ID: ${team[2].internId} </li>
                <li class="list-group-item">School: ${team[2].school} </li>
              </ul>
              <div class="card-body">
                Email: <a href="${team[2].internEmail}" class="card-link">Email</a>
              </div>
            </div>
            <div class="card" id="manager-card" style="width: 18rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 515 215"
              >
                <path
                  fill-rule="nonzero"
                  d="M83.66 156.17a35.511 35.511 0 0 1-2.96-3.63c-2.18-3-4.23-6.12-6.21-9.26l-9.84-15.68c-3.74-5.45-5.7-10.42-5.7-14.36 0-3.94 2.23-9.08 6.68-10.23-.36-5.89-.59-11.88-.59-17.81 0-3.51.07-7.05.2-10.53.2-2.2.6-4.38 1.19-6.5 2.73-8.92 8.7-16.5 16.72-21.25a43.77 43.77 0 0 1 9.08-4.34c5.72-2.16 2.96-10.9 9.27-11.02 14.72-.38 38.93 12.22 48.37 22.44a37.375 37.375 0 0 1 9.64 24.21l-.6 25.79c2.62.64 4.67 2.68 5.32 5.3.79 3.16 0 7.48-2.75 13.58 0 .2-.21.2-.21.4l-11.22 18.51c-2.54 4.17-5.17 8.44-8.13 12.36-3.51 4.69-6.4 3.85-3.4 8.34.59.81 1.22 1.57 1.87 2.32-19.11 13.06-22.23 30.69-25.59 49.71-.56 3.17-1.13 6.39-1.79 9.47-.63 2.39-.71 5.56-1.02 8.12H0c0-58.76 63.16-40.09 84.62-69.62 2.47-3.63 1.82-3.36-.96-6.32zm135.62-3.31 20.9 54.87 10.5-29.91-5.15-5.63c-3.87-5.66-2.54-12.08 4.64-13.24 2.75-.45 13.74-.4 16.31.17 6.66 1.48 7.36 7.93 4.04 13.07l-5.15 5.63 10.51 29.91 18.9-54.87c13.64 12.27 50.35 14.74 65.37 23.12 20.82 11.65 20.25 34.27 24.8 55.12H129.1c4.52-20.66 4.05-43.66 24.8-55.12 18.47-10.29 50.26-9.51 65.38-23.12zm-3.86-36.8c-1.89.04-3.43-.2-5.12-1.13-2.24-1.25-3.81-3.38-4.89-5.78-2.25-5.05-4.04-18.33 1.64-22.13l-1.06-.69-.12-1.47c-.22-2.66-.27-5.9-.33-9.29-.21-12.49-.46-27.62-10.78-30.65l-4.42-1.31 2.91-3.51c8.34-10.02 17.04-18.79 25.81-25.52C228.99 6.97 239.09 1.9 248.95.44c10.16-1.5 20 .77 29.08 7.92 2.68 2.11 5.28 4.65 7.8 7.62 9.68.92 17.61 6 23.27 13.25 3.37 4.34 5.94 9.46 7.57 14.9 1.63 5.42 2.34 11.2 2.04 16.88-.56 10.18-4.37 20.12-12.08 27.37 1.35.04 2.63.35 3.76.94 4.3 2.24 4.43 7.11 3.31 11.18-1.12 3.41-2.53 7.36-3.87 10.69-1.63 4.48-4.01 5.32-8.6 4.83-10.33 45.17-72.76 46.72-85.81.04zm162.02 42.76c-1.02-1.1-1.99-2.28-2.86-3.51-2.1-2.89-4.08-5.9-5.99-8.93l-9.5-15.13c-3.61-5.26-5.5-10.06-5.5-13.86 0-3.81 2.15-8.76 6.45-9.87-.34-5.69-.57-11.47-.57-17.19 0-3.39.07-6.81.2-10.17.18-2.12.57-4.22 1.14-6.27 2.63-8.6 8.4-15.92 16.14-20.51a41.69 41.69 0 0 1 8.76-4.18c5.53-2.09 2.86-10.52 8.94-10.64 14.21-.37 37.58 11.79 46.69 21.66a36.08 36.08 0 0 1 9.31 23.36l-.58 24.89c2.53.62 4.5 2.59 5.13 5.11.76 3.05 0 7.23-2.66 13.12v-.01c0 .2-.2.2-.2.39l-10.83 17.86c-2.45 4.03-4.99 8.15-7.85 11.93-3.38 4.53-6.17 3.72-3.27 8.05C451.12 193.41 512 175.5 512 232.18H402.25l-1.05-7.43c-.73-3.35-1.35-6.88-1.96-10.33-3.17-18.01-6.1-34.55-22.56-47.39.59-.68 1.16-1.38 1.69-2.11 2.38-3.51 1.75-3.24-.93-6.1z"
                ></path>
              </svg>
              <div class="card-body">
                <h5 class="card-title">Manager</h5>
              
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${team[0].managerFirstName}</li>
                <li class="list-group-item">ID: ${team[0].employeeIdManager}</li>
                <li class="list-group-item">Office#: ${team[0].managerOfficeNumber}</li>
              </ul>
              <div class="card-body">
                Email:  <a href="${team[0].managerEmail}" class="card-link"> Email </a>
              </div>
            </div>
            <div class="card" id="engineer-card" style="width: 18rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                height="75"
                width="100"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 102.73 122.88"
                style="enable-background: new 0 0 102.73 122.88"
                xml:space="preserve"
              >
                <style type="text/css"></style>
                <g>
                  <path
                    class="st0"
                    d="M31.25,37c-1.12,0.04-1.96,0.27-2.54,0.66c-0.33,0.22-0.57,0.5-0.73,0.84c-0.17,0.37-0.25,0.83-0.24,1.35 c0.04,1.53,0.85,3.53,2.4,5.83l0.02,0.03l5.03,8c2.02,3.21,4.13,6.48,6.76,8.88c2.53,2.31,5.59,3.87,9.65,3.88 c4.39,0.01,7.6-1.61,10.21-4.05c2.71-2.54,4.85-6.02,6.96-9.49l5.67-9.33c1.06-2.41,1.44-4.02,1.2-4.97 c-0.14-0.56-0.76-0.84-1.82-0.89c-0.22-0.01-0.46-0.01-0.69-0.01c-0.25,0.01-0.52,0.02-0.79,0.05c-0.15,0.01-0.3,0-0.44-0.03 c-0.5,0.03-1.02-0.01-1.55-0.08l1.94-8.59c-14.4,2.27-25.17-8.42-40.38-2.14L33,37.06C32.36,37.1,31.78,37.08,31.25,37L31.25,37 L31.25,37L31.25,37L31.25,37z M35.45,98.09h3.21c2.07,0,3.47,0.1,4.2,0.29c0.73,0.19,1.29,0.5,1.67,0.94 c0.38,0.43,0.62,0.92,0.71,1.45c0.1,0.54,0.14,1.58,0.14,3.15v5.78c0,1.48-0.07,2.47-0.21,2.97c-0.14,0.5-0.38,0.89-0.73,1.17 c-0.35,0.28-0.77,0.48-1.29,0.59c-0.51,0.11-1.28,0.17-2.3,0.17h-5.41V98.09L35.45,98.09z M39.75,100.91v10.87 c0.61,0,0.98-0.13,1.12-0.37c0.14-0.25,0.21-0.92,0.21-2.03v-6.42c0-0.75-0.03-1.23-0.07-1.44c-0.05-0.21-0.15-0.37-0.32-0.46 C40.52,100.96,40.21,100.91,39.75,100.91L39.75,100.91z M47.71,98.09h7.15v3.3H52v3.15h2.67v3.13H52v3.63h3.15v3.3h-7.45V98.09 L47.71,98.09z M67.28,98.09l-2.17,16.5h-6.5l-2.49-16.5h4.53c0.51,4.55,0.88,8.4,1.12,11.54c0.23-3.18,0.48-6,0.71-8.47l0.28-3.08 H67.28L67.28,98.09z M31.66,97.21v3.11h-0.43c-0.39,0-0.69,0.08-0.89,0.25c-0.2,0.17-0.34,0.42-0.42,0.78 c-0.05,0.19-0.07,0.71-0.08,1.56c-0.01,0.85-0.1,1.53-0.27,2.02c-0.13,0.38-0.31,0.68-0.54,0.91c-0.18,0.17-0.47,0.34-0.88,0.52 c0.42,0.2,0.74,0.4,0.94,0.62c0.21,0.21,0.38,0.54,0.53,0.97c0.15,0.43,0.22,1.13,0.22,2.08c0,0.86,0.05,1.41,0.13,1.67 c0.09,0.26,0.23,0.45,0.44,0.55c0.21,0.11,0.62,0.16,1.24,0.16v3.07h-1.19c-1.23,0-2.11-0.14-2.63-0.41 c-0.52-0.27-0.89-0.66-1.11-1.18c-0.22-0.52-0.33-1.29-0.33-2.33c0-0.23,0.01-0.46,0.02-0.68c0.01-0.14,0.01-0.28,0.01-0.43 c0-0.74-0.07-1.26-0.2-1.57c-0.13-0.31-0.32-0.54-0.58-0.68c-0.25-0.14-0.61-0.21-1.09-0.23v-3.25c0.49,0,0.86-0.08,1.1-0.23 s0.43-0.39,0.56-0.7c0.13-0.31,0.19-0.85,0.19-1.59v-0.32c-0.01-0.15-0.01-0.29-0.01-0.44c0-1.12,0.09-1.94,0.28-2.43 c0.19-0.5,0.44-0.89,0.77-1.15c0.25-0.21,0.58-0.36,1.01-0.46c0.56-0.13,1.2-0.2,1.92-0.2H31.66L31.66,97.21z M71.07,97.21v3.11 h0.42c0.39,0,0.69,0.08,0.89,0.25c0.2,0.17,0.34,0.42,0.42,0.78c0.05,0.19,0.07,0.71,0.08,1.56c0.01,0.85,0.1,1.53,0.27,2.02 c0.13,0.38,0.31,0.68,0.54,0.91c0.18,0.17,0.47,0.34,0.88,0.52c-0.42,0.2-0.74,0.4-0.94,0.62c-0.21,0.21-0.38,0.54-0.53,0.97 c-0.15,0.43-0.22,1.13-0.22,2.08c0,0.86-0.04,1.41-0.13,1.67c-0.09,0.26-0.23,0.45-0.44,0.55c-0.21,0.11-0.62,0.16-1.24,0.16v3.07 h1.19c1.24,0,2.11-0.14,2.63-0.41c0.52-0.27,0.89-0.66,1.11-1.18c0.22-0.52,0.33-1.29,0.33-2.33c0-0.23-0.01-0.46-0.02-0.68 c-0.01-0.14-0.01-0.28-0.01-0.43c0-0.74,0.07-1.26,0.2-1.57c0.13-0.31,0.32-0.54,0.58-0.68c0.25-0.14,0.61-0.21,1.09-0.23v-3.25 c-0.49,0-0.86-0.08-1.1-0.23c-0.25-0.15-0.43-0.39-0.56-0.7c-0.13-0.31-0.19-0.85-0.19-1.59v-0.32c0.01-0.15,0.01-0.29,0.01-0.44 c0-1.12-0.09-1.94-0.28-2.43c-0.19-0.5-0.45-0.89-0.77-1.15c-0.25-0.21-0.58-0.36-1.01-0.46c-0.56-0.13-1.2-0.2-1.92-0.2H71.07 L71.07,97.21z M75.72,35.19L75.72,35.19L75.72,35.19c0.21-8.77,1.82-17.63-4.42-24.82C66.86,5.25,55.28,0.42,47.77,0.01 c-3.17-0.17-1.96,2.41-5.09,3.49c-6.46,2.23-12.11,6.97-13.96,13.55c-0.3,1.08-0.51,2.17-0.62,3.26 c-0.21,4.58-0.09,10.04,0.24,14.38c-0.45,0.17-0.86,0.38-1.22,0.62c-0.78,0.52-1.35,1.2-1.73,2.01c-0.36,0.77-0.52,1.65-0.49,2.62 c0.06,2.06,1.01,4.56,2.85,7.31l5.03,8c1.76,2.8,3.6,5.65,5.84,8.06c-0.11,0.32,0.01-0.03-0.06,0.18 c-0.62,1.88-1.66,5.02-2.59,6.78c-6.11,4-20.1,5.03-25.53,8.06c-14.82,8.26-9.47,25.29-9.65,39.35c0.29,3.14,2.07,4.94,5.57,5.21 h3.79l-4.15-31.5c-0.32-2.45,1.42-4.46,3.56-4.46h19.47h22.98c-0.79-5.1-13.98-10.02-14.45-13.86c0.13-0.09,0.25-0.21,0.35-0.35 c1.12-1.56,2.28-4.81,3.08-7.18c2.83,2.29,6.23,3.79,10.6,3.8c3.92,0.01,7.05-1.08,9.68-2.85c0.26,0.37,0.52,0.76,0.8,1.17 c1.25,1.84,2.71,3.97,4.07,5.49c-0.29,4.37-11.73,4.42-13.03,13.78h40.73c2.14,0,3.89,2.01,3.56,4.46l-4.15,31.5h3.79 c3.5-0.27,5.28-2.07,5.58-5.21c-0.99-13.29,3.99-31.75-9.65-39.35c-5.36-2.99-19.06-4.03-25.29-7.9c-1.05-1.3-2.18-2.96-3.18-4.42 c-0.32-0.48-0.63-0.93-0.92-1.34l0.15-0.13c2.99-2.8,5.24-6.45,7.45-10.09L76.92,45c0.03-0.05,0.06-0.11,0.09-0.16l0,0 c1.34-3.05,1.78-5.29,1.38-6.87C78.01,36.5,77.13,35.62,75.72,35.19L75.72,35.19L75.72,35.19z"
                  />
                </g>
              </svg>
      
              <div class="card-body">
                <h5 class="card-title">Engineer</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${team[1].engineerName}</li>
                <li class="list-group-item">ID: ${team[1].engineerId} </li>
                <li class="list-group-item">Github Username: ${team[1].engineerGhub}</li>
              </ul>
              <div class="card-body">
                Email: <a href="https://github.com/${team[1].engineerGhub}" class="card-link">Email</a>
                Github: <a type='email'href="${team[1].engineerEmail}" class="card-link"> Github </a>
              </div>
            </div>
          </section>
        </body>
      </html>
      ` , 'utf-8', (err) => (err ? console.log(err) : console.log("Successfully sent team info to the team deck!"))
    );
    }


// elemnts for each interpelated string to add to HTML
    // 
    //   ${JSON.parse(JSON.stringify(engineerEl))}
    //   ${JSON.parse(JSON.stringify(internEl))}
    // ${JSON.parse(JSON.stringify(team[0].internName))}