const SquadMember = require('./card')

class Apprentice extends SquadMember {
    constructor(id, name, email, gHub) {
        super(id, name, email, 'Apprentice')
        this.gHub = gHub;
    }
   
    squadMemberHTML(){
        const GitHub =  `<a href="https://www.github.com/${this.gHub}">Github</a>`;
        return this.cardHTML(GitHub);
    }

}

module.exports = Apprentice;