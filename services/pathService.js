const graphService = require("./graphService");


async function getPath(start, object, end) {
    let graph = await graphService.createGraph();
    let toObject = graphService.getPath(graph, start, object);
    let toEnd = graphService.getPath(graph, object, end);


    return {
        time: toObject.distance + toEnd.distance, 
        path: {
            toObject: toObject.path,
            toEnd: toEnd.path,
        }
    }
}

module.exports = { getPath };
