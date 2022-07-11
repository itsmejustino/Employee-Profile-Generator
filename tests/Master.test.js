const Master = require('../lib/Master')

describe("Master", () => {
    describe("Master constructor", () => {
        it("Should have a name, id, email, officeNumber", () => {
            const master = new Master("name", 1, "email@me.com", "anynumber");
            expect(master.name).toEqual("name");
            expect(master.id).toEqual(1);
            expect(master.email).toEqual("email@me.com");
            expect(master.officeNumber).toEqual("anynumber");
        });
    });
});