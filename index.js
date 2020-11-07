// initial require
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/page-template");
// const validateAnswer = (input) => {
//   if (input) {
//     return true;
//   } else {
//     console.log("Please provide the required info!");
//     return false;
//   }
// };

const showMenu = () => {
  const askManager = () => {
    return inquirer.prompt([
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
    ]);
  };
  askManager().then((response) => {
    console.log(response);
    // fs.writeFile("./README.md", generateMarkdown(response), (err) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    // });
    console.log("Manager Info Ready!");
  });
};

showMenu();
