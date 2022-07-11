const Master = require('..lib/Master')

describe("Master", () => {
    describe("Master constructor", () => {
        it("Should have a name, id, email, officeNumber", () => {
            const master = new Master("name", 1, "email@me.com", "anynumber");
            expect(master.name).toEqual(typeof "string");
            expect(master.id).toEqual(typeof "integer");
            expect(master.email).toEqual(typeof any);
            expect(master.officeNumber).toEqual(typeof any);
        });
    });
});