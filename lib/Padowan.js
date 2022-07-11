const SquadMember = require("./squadMember");
class Padowan extends SquadMember {
  constructor(id, name, email, attribute2) {
    super(id, name, email, "Padowan", attribute2);
  }

  squadMemberHTML(){
    const University = `
    <div class="card-body">
    <li>${this.attribute2} </li>
    </div>`;
    return this.cardHTML(University);
  };
}

module.exports = Padowan;
