const fs = require('fs');
// const SquadMember = require('./card');

//create squad class. set the constructor method to set the value of the team array.
class Squad {
  constructor() {
    this.squad = [];
  }

  addSquadMember(member) {
    this.squad.push(member);
  }
//created squad HTML after 
  renderSquad() {
    return this.squad.map((i) => i.squadMemberHTML()).join('');
  }

  boilerHTML() {
    return `<!DOCTYPE html>
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
    
        <title>Squad Generator</title>
      </head>
    
      <nav class="navbar static-top bg-light" id="nav-container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Squads Generator</a>
        </div>
      </nav>
    
      <body>
        <section class="Squads-container">
         ${this.renderSquad()}
        </section>
      </body>
    </html>
      `;
  }

  saveFile() {
    fs.writeFile('./dist/index.html', this.boilerHTML(),
      (err) => (err ? console.log(err) : console.log("Successfully Saved information to index.html."))
    );
  }
}

module.exports = Squad;