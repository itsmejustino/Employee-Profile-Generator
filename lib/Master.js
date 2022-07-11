const SquadMember = require("./squadMember");

class Master extends SquadMember {
  constructor(id, name, email, officeNumber) {
    super(id, name, email, "Master");
    this.officeNumber = officeNumber;
  }
  squadMemberHTML() {
    return this.cardHTML();
  }
}

module.exports = Master;
