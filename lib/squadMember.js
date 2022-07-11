//set class for each squad member in the squad array
class SquadMember {
  //sets values to the squadmember
  constructor(name, id, email, attribute1) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.attribute1 = attribute1;
  }

  cardHTML(i, j) {
    return `<div class="card" id="intern-card" style="width: 18rem">
        ${j}
      <div class="card-body">
        <h5 class="card-title">${this.attribute1}</h5>
     
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${this.name} </li>
        <li class="list-group-item">ID: ${this.id} </li>
        ${i}
      </ul>
      <div class="card-body">
        Email: <a href="mailto:${this.email}" class="card-link">Email</a><br>
      </div>
    </div>`;
  }

  squadMemberHTML() {
    return;
  }
}

module.exports = SquadMember;
