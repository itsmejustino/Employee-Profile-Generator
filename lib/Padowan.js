const SquadMember = require("./squadMember");
class Padowan extends SquadMember {
  constructor(id, name, email) {
    super(id, name, email, "Padowan", attribute2);
    this.attribute2 = attribute2;
  }

  squadMemberHTML(){
    const University = ` <li class ='list-group-item'>${this.attribute2} </li>`
    return this.cardHTML(University);
  };
}

module.exports = Padowan;
