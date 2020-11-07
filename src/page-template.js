const generateTeamCards = () => {
  // generate manager card
  // ${managerCard()}
  const managerCard = () => {};

  // generate engineer card
  const engineerCard = () => {};

  // generate intern card
  const internCard = () => {};
};

module.exports = () => {
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
        <link rel="stylesheet" href="./dist/style.css" />
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
              <div class="team-cards col-12 d-flex justify-content-center">
              ${managerCard()}
              ${engineerCard()}
              ${internCard()}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
    `;
};
