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
  // destructure this!
  return [1, problem.findIndex(photo => !photo.vertical)];
}

// console.log(solve(photos));

module.exports = solve;
