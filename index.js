// initial require
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeamCards = require("./src/page-template");
const teamProfile = [];
// const validateAnswer = (input) => {
//   if (input) {
//     return true;
//   } else {
//     console.log("Please provide the required info!");
//     return false;
//   }
// };

const process = () => {
  console.log(`
  
Build your team profile following the process:`);
  const askManager = () => {
    console.log(`
================
Add Team Manager
================
`);
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Provide team manager's name (Required)",
          // validate: validateAnswer(),
        },
        {
          type: "input",
          name: "managerId",
          message: "Provide team manager's id (Required)",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Provide team manager's email (Required)",
        },
        {
          type: "input",
          name: "officeNum",
          message: "Provide office number (Required)",
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.officeNum
        );
        teamProfile.push(manager);
        createTeamCards();
      });
  };

  const createTeamCards = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "continue",
          message: "Choose one of the following options?",
          choices: [
            "Build An Engineer Profile",
            "Build An Intern Profile",
            "Finish the Page",
          ],
        },
      ])
      .then((choices) => {
        switch (choices.continue) {
          case "Build An Engineer Profile":
            askEngineer();
            break;

          case "Build An Intern Profile":
            askIntern();
            break;

          case "Finish the Page":
            writeHtml();
            break;
        }
      });
  };

  const askEngineer = () => {
    console.log(`
===============
Add An Engineer
===============
`);

    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Provide engineer's name (Required)",
          // validate: validateAnswer(),
        },
        {
          type: "input",
          name: "engineerId",
          message: "Provide engineer's id (Required)",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Provide engineer's email (Required)",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Provide engineer's github (Required)",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        teamProfile.push(engineer);
        createTeamCards();
      });
  };

  const askIntern = () => {
    console.log(`
=============
Add An Intern
=============
`);

    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Provide intern's name (Required)",
          // validate: validateAnswer(),
        },
        {
          type: "input",
          name: "internId",
          message: "Provide intern's id (Required)",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Provide intern's email (Required)",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Provide intern's school (Required)",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        teamProfile.push(intern);
        createTeamCards();
      });
  };

  const writeHtml = () => {
    console.log(
      `
    
Here are your inputs:`
    );
    console.log(teamProfile);
    fs.writeFileSync(
      "./dist/index.html",
      generateTeamCards(teamProfile),
      "utf-8"
    );
    console.log(`
======================================================================
The building process is done, check your page at ("./dist/index.html")
======================================================================
`);
  };

  askManager();
};

process();
