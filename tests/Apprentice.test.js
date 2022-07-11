const Apprentice = require('../lib/Apprentice')

describe("Apprentice", () => {
    describe("Apprentice constructor", () => {
        it("It should have a name, id, email, gitHub", () => {
            const apprentice = new Apprentice("string", 1, "name@me.com", "gitHub");
            expect(apprentice.name).toEqual("string");
            expect(apprentice.id).toEqual(1);
            expect(apprentice.email).toEqual("name@me.com");
            expect(apprentice.attribute2).toEqual("gitHub");
        });
    });
});