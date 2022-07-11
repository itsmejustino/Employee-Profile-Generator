const SquadMember = require("./squadMember");

class Master extends SquadMember {
  constructor( name, id, email, officeNumber) {
    super(name, id, email, "Master");
    this.officeNumber = officeNumber;
  }
  squadMemberHTML() {
    return this.cardHTML();
  }


}

module.exports = Master;
