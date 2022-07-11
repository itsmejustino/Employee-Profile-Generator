const SquadMember = require("./squadMember");

class Master extends SquadMember {
  constructor( name, id, email, officeNumber) {
    super(name, id, email, "Master");
    this.officeNumber = officeNumber;
  }
  squadMemberHTML() {
    const officeNumber = `<li class="list-group-item">Office Number: ${this.officeNumber} </li>`
    return this.cardHTML(officeNumber);
  }


}

module.exports = Master;
