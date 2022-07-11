const Padowan = require('..lib/Padowan')


describe("Padowan", () => {
    describe("Padowan constructor", () => {
        it("It should have a name, id, email, temple", () => {
            const padowan = new Padowan("name", 1, "name@me.com", "anytemplename");
            expect(padowan.name).toEqual("name");
            expect(padowan.id).toEqual(1);
            expect(padowan.email).toEqual("name@me.com");
            expect(padowan.attribute1).toEqual("luke");
        });
    });
});