const SquadMember = require("./squadMember");

class Master extends SquadMember {
  constructor( name, id, email, officeNumber) {
    super(name, id, email, "Master", officeNumber);
    this.officeNumber = officeNumber;
  }
  squadMemberHTML() {
    const office = ` Office Number: <li class ='list-group-item'>${this.officeNumber} </li>`
    return this.cardHTML(office);
  }


}

module.exports = Master;
