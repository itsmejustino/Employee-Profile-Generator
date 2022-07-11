const Apprentice = require('..lib/Apprentice')

describe("Apprentice", () => {
    describe("Apprentice constructor", () => {
        it("It should have a name, id, email, github", () => {
            const apprentice = new Apprentice("name", 1, "name@me.com", "luke");
            expect(apprentice.name).toEqual(typeof "string");
            expect(apprentice.id).toEqual(typeof "integer");
            expect(apprentice.email).toEqual(typeof any);
            expect(apprentice.gitHub).toEqual(typeof any);
        });
    });
});