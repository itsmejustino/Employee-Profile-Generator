const SquadMember = require("./squadMember");

class Master extends SquadMember {
  constructor( name, id, email, officeNumber) {
    super(name, id, email, "Master", attribute2);
    this.attribute2 = officeNumber;
  }
  squadMemberHTML() {
    const officeNumber = `<li class="list-group-item">Office Number: ${this.attribute2} </li>`
    return this.cardHTML(officeNumber);
  }


}

module.exports = Master;
