const SquadMember = require('./starting-html')

class Apprentice extends SquadMember{
    constructor(id, name, email, officeNumber){
        super(id, name, email, 'Apprentice')
        this.officeNumber = officeNumber;
    }
    renderSquadHTML(){

        return this.renderSquadHTML();
    }
}

module.exports = Apprentice;