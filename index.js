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
const Master = require("./lib/Master.js");
const Squad = require("./lib/join-team.js");
const fs = require("fs");
const inquirer = require("inquirer");
// const SquadMember = require("./lib/card.js");
// const { CompositionPage } = require("twilio/lib/rest/video/v1/composition.js");
// const { stringify } = require("querystring");
//set variable for squad to hold each object of the array.
const squad = new Squad();





//generate index html

generateHTML = () => {
  let squadString = JSON.stringify(squad);
  fs.writeFile(`./dist/index-test3.html`, squadString, "utf-8", (err) =>
    err
      ? console.log(err)
      : console.log("Successfully sent squad info to the squad deck!")
  );
};

//initializes each funcrtion. it takes in the user selection

//Apprentice card information. Name, ID#, Email, temple Name
bringonApprentice = ()=> {
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
            value: "newMaster",
            name: "Add Master",
          },
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
      //pushes apprentice info to the array
      const apprentice = new Apprentice(
        this.apprenticeName,
        this.apprenticeId,
        this.apprenticeEmail,
        this.temple
      );
     squad.addSquadMember(apprentice);
      initNext(data.newSquadMember);
    });
}
//Padowan card information. Name, ID#, Email, temple Name
bringonPadowan = () =>{
  inquirer
    .prompt([
      {
        name: "padowanName",
        message: "What is the Padowan's name?",
        type: "input",
      },
      {
        name: "padowanId",
        message: "What is the Padowan's ID?",
        type: "input",
      },
      {
        name: "padowanEmail",
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
            value: "newMaster",
            name: "Add Master",
          },
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
      //pushes padowan info to the array
      const padowan = new Padowan(
        this.padowanName,
        this.padowanId,
        this.padowanEmail,
        this.temple
      );
      squad.addSquadMember(padowan);
      initNext(data.newSquadMember);
    });
}

//initial question. master card information. Name, ID#, Email, Office#
bringonMaster = () =>{
inquirer
  .prompt([
    {
      name: "masterName",
      type: "input",
      message: "What is the squad master's name?",
    },
    {
      name: "employeeIdMaster",
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
          value: "newMaster",
          name: "Add Master",
        },
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
    //pushes padowan info to the array
    const master = new Master(
      data.masterName,
      data.masterEmail,
      data.masterOfficeNumber,
      data.employeeIdMaster,
    );
    console.log(master);
    squad.addSquadMember(master);
    initNext(data.newSquadMember);
  });
}

function initNext(input) {
  const { bringonMaster, bringonApprentice, bringonPadowan } = input;
  if (input === "newMaster") {
    bringonMaster();
  }
  if (input === "bringonApprentice") {
    bringonApprentice();
  }
  if (input === "bringonPadowan") {
    bringonPadowan();
  }
  
  if (input === "finish") {
    squad.saveFile();;
  }
}
bringonMaster();


//program init

