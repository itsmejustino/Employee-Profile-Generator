const SquadMember = require('./starting-html')

class Master extends SquadMember{
    constructor(id, name, email, officeNumber){
        super(id, name, email, 'Master')
        this.officeNumber = officeNumber;
    }
    renderchoiceHTML(){

        return this.renderchoiceHTML();
    }
}

module.exports = Master;