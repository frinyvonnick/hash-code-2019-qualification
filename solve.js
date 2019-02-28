const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
const group = require("./group");

function mapId(photo) {
  return photo.id;
}

function solve(problem, file) {
  const horizontals = problem.filter(photo => !photo.vertical).map(mapId);
  const verticals = group(problem.filter(photo => photo.vertical));

  const slides = _.shuffle([
    ...horizontals,
    ...verticals.map(l => l.join(" "))
  ]);

  return [horizontals.length + verticals.length, ...slides];
}

module.exports = solve;
