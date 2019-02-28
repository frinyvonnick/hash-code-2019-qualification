const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

// const photos = [
//   { tags: ["cat", "beach", "sun"], vertical: true },
//   { tags: ["selfie", "smile"], vertical: true },
//   { tags: ["garden", "selfie"], vertical: true },
//   { tags: ["garden", "cat"], vertical: false }
// ];

function mapId(photo) {
  return photo.id;
}

function solve(problem, file) {
  console.log(problem, 1);
  const horizontals = problem.filter(photo => !photo.vertical).map(mapId);
  const verticals = _.chunk(problem.filter(photo => photo.vertical), 2).map(
    mapId
  );

  return [
    // horizontals.length + verticals.length,
    // [...horizontals, ...verticals]
  ];
}

// console.log(solve(photos));

module.exports = solve;
