const squadMember = require('.././lib/squadMember')

describe('squadMember', () => {
    describe("squadMember constructor", () => {
        it("It should have a name, id, email, attribute1", () => {
            const eachSquad = new squadMember("string", 1, "name@me.com", "attribute");
            expect(eachSquad.name).toEqual("string");
            expect(eachSquad.id).toEqual(1);
            expect(eachSquad.email).toEqual("name@me.com");
            expect(eachSquad.attribute1).toEqual("attribute");
        });
    });
  });
  