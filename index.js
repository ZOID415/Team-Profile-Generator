var fs = require("fs");
var inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const path = require("path");
const { generateManager, generateEngineer, generateIntern } = require("./src/page-template");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

//Empty string for card HTML to fill after entered by user in CLI
var htmlCards = "";

//Function to create HTML document after user completes CLI prompts
function html() {
  //Header HTML
  const htmlHead = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Team Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class=bg-white>
<!--header-->
<header class="bg-blue-500">
<h1 class="text-5xl text-center py-20">Meet Our Team</h1>
</header>
<!--Grid layout-->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20 pt-5">`;

  //Closing HTML
  const htmlEnd = `</section>
</body>
</html>`;

  //Combines header, card data, and closing HTML to create complete HTML document
  let htmlFull = htmlHead + htmlCards + htmlEnd;

  //Writes message to CLI console log and creates new index.html file in folder
  console.log("File saved as index.html");
  fs.writeFile(distPath, htmlFull, function (err) {
    if (err) throw err;
  });
}

//Empty array for team member data input in CLI to crete employee cards
var outputAns = [];

//Welcome message in CLI when application is started
console.log(
  "\n***\n Welcome to Team Profile generator! \nAnswer each prompt accordingly and press enter to submit. \n***\n"
);

//User prompts
inquirer
  //Create a manager
  .prompt([
    {
      message: "Manager name:",
      type: "input",
      name: "manName",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a name");
        }
      },
    },
    {
      message: "Manager ID:",
      type: "input",
      name: "manId",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter an ID");
        }
      },
    },
    {
      message: "Manager email address:",
      type: "input",
      name: "manEmail",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter an email");
        }
      },
    },
    {
      message: "Manager office number:",
      type: "input",
      name: "manOffice",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter an office number");
        }
      },
    },
    {
      message: "Choose next employee below:",
      type: "list",
      name: "add",
      choices: ["Intern", "Engineer", "I am finished"],
    },
  ])
  //Push response data to outputAns array
  .then((r) => {
    outputAns.push(r);
    //Create a new instance of Manager
    var newMg = new Manager(r.manName, r.manId, r.manEmail, r.manOffice);

    let mgName = newMg.getName();
    let mgID = newMg.getId();
    let mgEmail = newMg.getEmail();
    let mgOffice = newMg.getOfficeNumber();
    let role = newMg.getRole();

    //Create new employee card with Manager data
    var card = generateManager(newMg)

    //Add new card to htmlCards string
    htmlCards += card;

    //If user selects to add an intern, run addIntern function
    if (r.add == "Intern") {
      addIntern();
    }
    //If user selects to add an engineer, run addEngineer function
    else if (r.add == "Engineer") {
      addEngineer();
    }
    //If user selects 'I am finished', run html function and create html document
    else {
      html();
    }
  });

function addIntern() {
  inquirer
    //Create an intern
    .prompt([
      {
        message: "Intern name:",
        type: "input",
        name: "intName",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name");
          }
        },
      },
      {
        message: "Intern ID:",
        type: "input",
        name: "intId",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an ID");
          }
        },
      },
      {
        message: "Intern email:",
        type: "input",
        name: "intEmail",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email");
          }
        },
      },
      {
        message: "Intern school:",
        type: "input",
        name: "intSchool",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a school");
          }
        },
      },
      {
        message: "Choose next employee below:",
        type: "list",
        name: "add",
        choices: ["Intern", "Engineer", "I am done"],
      },
    ])

    //Push response data to outputAns array
    .then((r) => {
      outputAns.push(r);
      //Create a new instance of Intern
      var newInt = new Intern(r.intName, r.intId, r.intEmail, r.intSchool);

      //Create new employee card with Intern data
      let intName = newInt.getName();
      let intID = newInt.getId();
      let intEmail = newInt.getEmail();
      let intSchool = newInt.getSchool();
      let role = newInt.getRole();

      var card = generateIntern(newInt)

      //Add new card to htmlCards string
      htmlCards += card;

      //If user selects to add an intern, run addIntern function
      if (r.add == "Intern") {
        addIntern();
      }
      //If user selects to add an engineer, run addEngineer function
      else if (r.add == "Engineer") {
        addEngineer();
      }
      //If user selects 'I am finished', run html function and create html document
      else {
        html();
      }
    });
}

function addEngineer() {
  inquirer
    //Create an engineer
    .prompt([
      {
        message: "Engineer name:",
        type: "input",
        name: "engName",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name");
          }
        },
      },
      {
        message: "Engineer ID:",
        type: "input",
        name: "engId",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an ID");
          }
        },
      },
      {
        message: "Engineer email:",
        type: "input",
        name: "engEmail",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email");
          }
        },
      },
      {
        message: "Engineer GitHub username:",
        type: "input",
        name: "engGH",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a GitHub username");
          }
        },
      },
      {
        message: "Choose next employee below:",
        type: "list",
        name: "add",
        choices: ["Intern", "Engineer", "I am finished"],
      },
    ])

    //Push response data to outputAns array
    .then((r) => {
      outputAns.push(r);
      //Create a new instance of Engineer
      var newEng = new Engineer(r.engName, r.engId, r.engEmail, r.engGH);

      //Create new employee card with Intern data
      let engName = newEng.getName();
      let engID = newEng.getId();
      let engEmail = newEng.getEmail();
      let engGH = newEng.getGithub();
      let role = newEng.getRole();

      var card = generateEngineer (newEng)

      //Add new card to htmlCards string
      htmlCards += card;

      //If user selects to add an intern, run addIntern function
      if (r.add == "Intern") {
        addIntern();
      }
      //If user selects to add an engineer, run addEngineer function
      else if (r.add == "Engineer") {
        addEngineer();
      }
      //If user selects 'I am finished', run html function and create html document
      else {
        html();
      }
    });
    //Ask tutor about connecting index.js to template
}
