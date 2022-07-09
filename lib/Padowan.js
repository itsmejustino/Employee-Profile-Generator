const SquadMember = require('./starting-html')

class Padowan extends SquadMember{
    constructor(id, name, email, position, officeNumber){
        super(id, name, email, 'Padowan')
        this.position = officeNumber;
    }
    renderchoiceHTML(){

        return this.renderchoiceHTML();
    }
}

module.exports = Padowan;