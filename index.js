const Padowan = require("./lib/Padowan.js");
const Apprentice = require("./lib/Apprentice.js");
const Master = require("./lib/Master.js");
const Squad = require("./lib/join-team.js");
const fs = require("fs");
const inquirer = require("inquirer");
//set variable for squad to hold each object of the array. new Squad() is similar to squad = [];
const squad = new Squad();

//generate index html
generateHTML = () => {
  let squadString = JSON.stringify(squad);
  fs.writeFile(`./dist/index.html`, squadString, "utf-8", (err) =>
    err
      ? console.log(err)
      : console.log("Successfully sent squad info to the squad deck!")
  );
};

//Apprentice card information. Name, ID#, Email, temple Name
bringonApprentice = () => {
  inquirer
    .prompt([
      {
        name: "apprenticeName",
        message: "What is the Apprentice's name?",
        type: "input",
      },
      {
        name: "apprenticeId",
        message: "What is the Apprentice's operator ID?",
        type: "input",
      },
      {
        name: "apprenticeEmail",
        message: "What is the Apprentice's transponder address?",
        type: "input",
      },

      {
        name: "apprenticeGhub",
        message: "What is the Apprentice's GitHub username?",
        type: "input",
      },
      {
        name: "newSquadMember",
        type: "list",
        message: "What squad member will be added next?",
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
        data.apprenticeName,
        data.apprenticeId,
        data.apprenticeEmail,
        data.apprenticeGhub
      );
      squad.addSquadMember(apprentice);
      initNext(data.newSquadMember);
    });
};
//Padowan card information. Name, ID#, Email, temple Name
bringonPadowan = () => {
  inquirer
    .prompt([
      {
        name: "padowanName",
        message: "What is the Padowan's name?",
        type: "input",
      },
      {
        name: "padowanId",
        message: "What is the Padowan's operator ID?",
        type: "input",
      },
      {
        name: "padowanEmail",
        message: "What is the Padowan's transponder address?",
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
        message: "What squad member will be added next?",
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
        data.padowanName,
        data.padowanId,
        data.padowanEmail,
        data.temple
      );
      squad.addSquadMember(padowan);
      initNext(data.newSquadMember);
    });
};

//initial question. master card information. Name, ID#, Email, Office#
bringonMaster = () => {
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
        message: "What is the operator ID?",
      },
      {
        name: "masterEmail",
        type: "input",
        message: "What is the master's transponder address?",
      },
      {
        name: "masterOfficeNumber",
        type: "input",
        message: "What is the this master's suite number?",
      },
      {
        name: "newSquadMember",
        type: "list",
        message: "What squad member will be added next?",
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
        data.employeeIdMaster,
        data.masterEmail,
        data.masterOfficeNumber
      );
      squad.addSquadMember(master);
      initNext(data.newSquadMember);
    });
};
//inits next choice list to inquirer. if statements checks for user select for next choice.
initNext = (input) => {
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
    squad.saveFile();
  }
};
//inits program
bringonMaster();
