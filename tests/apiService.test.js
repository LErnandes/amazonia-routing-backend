const apiService = require("../services/apiService");


describe('apiService Testing', () => {
    test('get apiService method', async () => {
        return apiService.getMatrix().then(res => {
            expect(res.status).toBe(200);
        });
    });
});
