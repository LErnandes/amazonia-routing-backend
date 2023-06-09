const apiService = require("./apiService");


/**
 * Dijkstra's algorithm is a fundamental graph traversal algorithm that efficiently finds the shortest path between nodes in a weighted graph.
 * https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 */

function PriorityQueue() {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({ key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}


function Graph() {
  var INFINITY = 1 / 0;
  this.vertices = {};

  this.addVertex = function (name, edges) {
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
      distances = {},
      previous = {},
      path = [],
      smallest,
      vertex,
      neighbor,
      alt;

    for (vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if (smallest === finish) {
        path = [];

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (!smallest || distances[smallest] === INFINITY) {
        continue;
      }

      for (neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return { distance: distances[finish], path: path.concat([start]).reverse() };
  };
}


async function createGraph() {
    var graph = new Graph();

    let matrix = (await apiService.getMatrix()).data;

    for (const [key, value] of Object.entries(matrix)) {
        graph.addVertex(key, value);
    }

    return graph
}


function getPath(graph, start, end) {
    return graph.shortestPath(start, end);
}

module.exports = { Graph, createGraph, getPath };
