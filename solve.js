const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
const sortMagic = require("./sort-magic");
const group = require("./group");

function mapId(photo) {
  return photo.id;
}

function solve(problem, file) {
  const horizontals = problem
    .filter(photo => !photo.vertical)
    .map(photo => ({ tags: photo.tags, ids: [photo.id] }));
  const verticals = group(problem.filter(photo => photo.vertical)).map(
    slide => {
      return {
        ids: [slide[0].id, slide[1].id],
        tags: _.uniq([...slide[0].tags, ...slide[1].tags])
      };
    }
  );

  const slides = sortMagic([...verticals, ...horizontals]);
  return [slides.length, ...slides.map(l => l.ids.join(" "))];
}

module.exports = solve;
