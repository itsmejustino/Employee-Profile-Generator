const SquadMember = require('./squadMember')

class Apprentice extends SquadMember {
    constructor(name, id, email, attribute2) {
        super(name, id, email, 'Apprentice')
        this.attribute2 = attribute2;
    }
   
    squadMemberHTML(){
        const GitHub =  `<a href="https://www.github.com/${this.attribute2}">Github</a>`;
        return this.cardHTML(GitHub);
    }

}

module.exports = Apprentice;