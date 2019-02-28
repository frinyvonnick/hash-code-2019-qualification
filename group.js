const assert = require("assert");
const debug = require("debug")("group");
const _ = require("lodash");

module.exports = function group(photos) {
  return _.chunk(photos.sort((a, b) => _.intersection(b.tags, a.tags)), 2);
};
