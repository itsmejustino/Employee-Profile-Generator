const SquadMember = require("./squadMember");
class Padowan extends SquadMember {
  constructor(id, name, email, attribute1, attribute2) {
    super(id, name, email, "Padowan", attribute2);
    this.attribute2 = attribute2;
  }

  squadMemberHTML() {
    const University = `University: <li class ='list-group-item'>${this.attribute2} </li>`;
    const positionIndicator = `<svg
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
  </svg>`;
    return this.cardHTML(University, positionIndicator);
  }
}

module.exports = Padowan;
