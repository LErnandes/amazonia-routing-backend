const pathService = require("../services/pathService");


describe('pathService Testing', () => {
    test('pathService getPath method', async () => {
        return pathService.getPath("A1", "F3", "A4").then(data => {
            expect(data).toBeInstanceOf(Object);
        });
    });
});
