const assert = require("assert");
const debug = require("debug")("sortMagic");
const _ = require("lodash");
const ProgressBar = require("progress");

function getBestMatch(slide, slideshow) {
  let bestScore = 0;
  let bestIndex = 0;

  for (let i = 0; i < slideshow.length; i++) {
    const currentSlide = slideshow[i];
    const tags1 = slide.tags;
    const tags2 = currentSlide.tags;
    const tagInCommon = _.intersection(tags1, tags2);
    const tagsExclusiveFrom1 = _.difference(tags1, tagInCommon);
    const tagsExclusiveFrom2 = _.difference(tags2, tagInCommon);
    const result = Math.min(
      tagInCommon.length,
      tagsExclusiveFrom1.length,
      tagsExclusiveFrom2.length
    );
    if (result >= 5) {
      return i;
      // bestScore = result;
      // bestIndex = i;
    }
  }

  return bestIndex;
}

module.exports = function sortMagic(slideshow) {
  const bar = new ProgressBar(":reste", {
    total: slideshow.length
  });

  const result = [];
  const length = slideshow.length;
  let previousElement = slideshow.pop();
  result.push(previousElement);
  do {
    bar.tick({ reste: slideshow.length });
    const index = getBestMatch(previousElement, slideshow);
    previousElement = slideshow.splice(index, 1)[0];
    result.push(previousElement);
  } while (result.length < length);

  return result;
};
