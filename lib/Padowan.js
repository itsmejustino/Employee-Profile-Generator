const SquadMember = require("./card");
class Padowan extends SquadMember {
  constructor(id, name, email, temple) {
    super(id, name, email, "Padowan");
    this.temple = temple;
  }

  squadMemberHTML(){
    const gitHub = `<a href="https://www.github.com/${this.temple}">Github</a>`;
    return this.cardHTML(gitHub);
  };
}

module.exports = Padowan;
