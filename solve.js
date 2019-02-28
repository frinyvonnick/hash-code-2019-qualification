const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

// const photos = [
//   { tags: ["cat", "beach", "sun"], vertical: true },
//   { tags: ["selfie", "smile"], vertical: true },
//   { tags: ["garden", "selfie"], vertical: true },
//   { tags: ["garden", "cat"], vertical: false }
// ];

function solve(problem, file) {
  const horizontals = problem.filter(photo => !photo.vertical);
  const verticals = _.chunk(problem.filter(photo => photo.vertical), 2);

  return [
    horizontals.length + verticals.length,
    [...horizontals, ...verticals]
  ];
}

// console.log(solve(photos));

module.exports = solve;
