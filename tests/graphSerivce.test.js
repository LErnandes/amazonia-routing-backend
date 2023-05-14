const graphService = require("../services/graphService");


describe('graphService Testing', () => {
    const graph = graphService.createGraph();

    test('graphService createGraph method', async () => {
        return expect(await graph).toBeInstanceOf(graphService.Graph);
    });

    test('graphService getPath method', async () => {
        return expect(graphService.getPath(await graph, "A1", "F3", "A4")).toBeInstanceOf(Object);
    });
});
