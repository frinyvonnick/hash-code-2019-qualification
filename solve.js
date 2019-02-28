const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
const group = require("./group");

function mapId(photo) {
  return photo.id;
}

function solve(problem, file) {
  const horizontals = problem.filter(photo => !photo.vertical).map(mapId);
  const verticals = _.chunk(
    problem.filter(photo => photo.vertical).map(mapId),
    2
  );

  return [
    horizontals.length + verticals.length,
    ...[...horizontals, ...verticals.map(l => l.join(" "))]
  ];
}

module.exports = solve;
