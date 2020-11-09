const generateTeamCards = (teamProfile) => {
  // generate manager card
  const managerCard = (manager) => {
    return `
    <div class="card border-secondary mb-3 mx-1" style="max-width: 18rem">
              <div class="card-header">
                <i class="far fa-user"></i> ${manager.getRole()}
              </div>
              <div class="card-body text-secondary">
                <h5 class="card-title">${manager.getName()}</h5>
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
            </div>`;
  };
  // generate engineer card
  const engineerCard = (engineer) => {
    return `<div class="card border-secondary mb-3 mx-1" style="max-width: 18rem">
    <div class="card-header">
    <i class="fas fa-user-cog"></i> ${engineer.getRole()}
    </div>
    <div class="card-body text-secondary">
      <h5 class="card-title">${engineer.getName()}</h5>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
  </div>`;
  };
  // generate intern card
  const internCard = (intern) => {
    return `<div class="card border-secondary mb-3 mx-1" style="max-width: 18rem">
    <div class="card-header">
    <i class="fas fa-user-graduate"></i> ${intern.getRole()}
    </div>
    <div class="card-body text-secondary">
      <h5 class="card-title">${intern.getName()}</h5>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>`;
  };
  // sort page cards
  const finalProfiles = [];
  finalProfiles.push(
    teamProfile
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  finalProfiles.push(
    teamProfile
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );
  finalProfiles.push(
    teamProfile
      .filter((intern) => intern.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );
  return finalProfiles.join("");
};

module.exports = (teamProfile) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
        ></script>
      </head>
      <body>
        <!-- Header -->
        <header class="jumbotron">
          <h1 class="display-3">TEAM PROFILE</h1>
          <p class="lead">Quick Team Management Tool</p>
        </header>
        <!-- Page Content -->
        <main>
          <div class="container">
            <div class="row">
              <div class="team-cards col-12 d-flex flex-wrap justify-content-center">
              ${generateTeamCards(teamProfile)}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
    `;
};
