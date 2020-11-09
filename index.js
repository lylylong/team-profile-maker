// initial require
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeamCards = require("./src/page-template");
const teamProfile = [];

const validateInputs = (checksIfHasInputs) => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide the required info!";
    }
    return checksIfHasInputs ? checksIfHasInputs(input) : true;
  },
});

const validateNumbers = (checksIfANum) => ({
  validate: (input) => {
    if (isNaN(input) || input === "") {
      return "Please provide a valid number!";
    }
    return checksIfANum ? checksIfANum(input) : true;
  },
});

const validateEmails = (checksIfEmail) => ({
  validate: (input) => {
    if (!input.match(/\S+@\S+\.\S+/)) {
      return "Please provide a valid email!";
    }
    return checksIfEmail ? checksIfEmail(input) : true;
  },
});

const process = () => {
  console.log(`
  
Build your team profile following the process:`);
  const askManager = () => {
    console.log(`
=================
Team Manager Info
=================
`);
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Provide team manager's name:",
          ...validateInputs(),
        },
        {
          type: "input",
          name: "managerId",
          message: "Provide team manager's ID:",
          ...validateNumbers(),
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Provide team manager's email:",
          ...validateEmails(),
        },
        {
          type: "input",
          name: "officeNum",
          message: "Provide office number:",
          ...validateNumbers(),
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
          message: "Provide engineer's name:",
          ...validateInputs(),
        },
        {
          type: "input",
          name: "engineerId",
          message: "Provide engineer's id:",
          ...validateNumbers(),
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Provide engineer's email:",
          ...validateEmails(),
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Provide engineer's github user name:",
          ...validateInputs(),
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
          message: "Provide intern's name:",
          ...validateInputs(),
        },
        {
          type: "input",
          name: "internId",
          message: "Provide intern's ID:",
          ...validateNumbers(),
        },
        {
          type: "input",
          name: "internEmail",
          message: "Provide intern's email:",
          ...validateEmails(),
        },
        {
          type: "input",
          name: "internSchool",
          message: "Provide intern's school name:",
          ...validateInputs(),
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
