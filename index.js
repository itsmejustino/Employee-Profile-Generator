// WHEN I am prompted for my squad members and their information
// THEN an HTML file is generated that displays a nicely formatted squad roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the squad master’s name, employee ID, email address, and office number
// WHEN I enter the squad master’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an Apprentice or an Padowan or to finish building my squad
// WHEN I select the Apprentice option
// THEN I am prompted to enter the Apprentice’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the Padowan option
// THEN I am prompted to enter the Padowan’s name, ID, email, and temple, and I am taken back to the menu
// WHEN I decide to finish building my squad
// THEN I exit the application, and the HTML is generated

const Padowan = require("./lib/Padowan.js");
const Apprentice = require("./lib/Apprentice.js");
const master = require("./lib/Master.js");
const team = require("./lib/join-team.js");
const fs = require("fs");
const inquirer = require("inquirer");
//set variable for
const squad = [];

//adds next section of questions depending on answer selected by user.
const getNext = (option) => {
  if (option === "bringonApprentice") {
    bringonApprentice();
  }
  if (option === "bringonPadowan") {
    bringonPadowan();
  }
  if (option === "finish") {
    generateHtml();
  }
};
//Apprentice card information. Name, ID#, Email, temple Name
const bringonApprentice = () => {
  inquirer
    .prompt([
      {
        name: "ApprenticeName",
        messsage: "What is the Apprentice's name?",
        type: "input",
      },
      {
        name: "ApprenticeId",
        message: "What is the Apprentice's ID?",
        type: "input",
      },
      {
        name: "ApprenticeEmail",
        message: "What is the Apprentice's email?",
        type: "input",
      },

      {
        name: "ApprenticeGhub",
        message: "What is the Apprentice's GitHub username?",
        type: "input",
      },
      {
        name: "newSquadMember",
        type: "list",
        choices: [
          {
            value: "bringonApprentice",
            name: "Add Apprentice",
          },
          {
            value: "bringonPadowan",
            name: "Add Padowan",
          },
          {
            value: "finish",
            name: "Finish",
          },
        ],
      },
    ])
    .then((data) => {
      squad.push(data);
      getNext(data.newSquadMember);
    })
    .then((data) => { });
};
//Padowan card information. Name, ID#, Email, temple Name
const bringonPadowan = () => {
  inquirer
    .prompt([
      {
        name: "PadowanName",
        message: "What is the Padowan's name?",
        type: "input",
      },
      {
        name: "PadowanId",
        message: "What is the Padowan's ID?",
        type: "input",
      },
      {
        name: "PadowanEmail",
        message: "What is the Padowan's email?",
        type: "input",
      },
      {
        name: "temple",
        message: "What temple does the Padowan attend?",
        type: "input",
      },
      {
        name: "newSquadMember",
        type: "list",
        choices: [
          {
            value: "bringonApprentice",
            name: "Add Apprentice",
          },
          {
            value: "bringonPadowan",
            name: "Add Padowan",
          },
          {
            value: "finish",
            name: "Finish",
          },
        ],
      },
    ])
    .then((data) => {
      squad.push(data);
      getNext(data.newSquadMember);
    });
};

//master card information. Name, ID#, Email, Office#
inquirer
  .prompt([
    {
      name: "masterFirstName",
      type: "input",
      message: "What is the squad master's name?",
    },
    {
      name: "employeeIdmaster",
      type: "input",
      message: "What is the employee ID?",
    },
    {
      name: "masterEmail",
      type: "input",
      message: "What is the master's email address?",
    },
    {
      name: "masterOfficeNumber",
      type: "input",
      message: "What is the office number?",
    },
    {
      name: "newSquadMember",
      type: "list",
      choices: [
        {
          value: "bringonApprentice",
          name: "Add Apprentice",
        },
        {
          value: "bringonPadowan",
          name: "Add Padowan",
        },
        {
          value: "finish",
          name: "Finish",
        },
      ],
    },
  ])
  .then((data) => {
    squad.push(data);
    getNext(data.newSquadMember);
  });

generateHtml = () => {
  fs.writeFile(`./dist/index-test2.html`, ` `, "utf-8", (err) =>
    err
      ? console.log(err)
      : console.log("Successfully sent squad info to the squad deck!")
  );
};
// elemnts for each interpelated string to add to HTML
//
//   ${JSON.parse(JSON.stringify(ApprenticeEl))}
//   ${JSON.parse(JSON.stringify(PadowanEl))}
// ${JSON.parse(JSON.stringify(squad[0].PadowanName))}

// if(squad.PadowanName === null) {
//   squad.PadowanName[2] = "No input"
//   squad.PadowanId[2] = "No input"
//   squad.temple[2] = "No input"
//   squad.PadowanEmail[2] = "No input"
// }

// let i= 0;
// console.log(squad)
// let masterEl = squad[0].masterFirstName;
// let ApprenticeEl = squad[0].ApprenticeName;
// console.log(squad[0].masterFirstName)
// console.log(squad[1].ApprenticeName)
// console.log(squad[2].PadowanName)
// let PadowanEl = squad[0].PadowanName;

// for (i=0; i < squad.length; i++) {
//     masterEl
// }
