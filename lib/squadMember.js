
//set class for each squad member in the squad array 
class SquadMember {
  //sets values to the squadmember
    constructor(name, id, email, attribute1, attribute2) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.attribute1 = attribute1;
      this.attribute2 = attribute2;
    }
  
    cardHTML(i) {
      return `<div class="card" id="intern-card" style="width: 18rem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-mortarboard-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
        />
        <path
          d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
        />
      </svg>

      <div class="card-body">
        <h5 class="card-title">${this.attribute1}</h5>
     
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${this.name} </li>
        <li class="list-group-item">ID: ${this.id} </li>
      </ul>
      <div class="card-body">
        Email: <a href="mailto:${this.email}" class="card-link">Email</a>
      </div>
    </div>`;
    }
  
    squadMemberHTML() {
      return;
    }
  }

  module.exports = SquadMember;