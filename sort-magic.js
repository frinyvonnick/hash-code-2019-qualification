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
    const result = Math.min(
      tagInCommon.length,
      tags1.length - tagInCommon.length,
      tags2.length - tagInCommon.length
    );
    if (result >= bestScore) {
      // return i;
      bestScore = result;
      bestIndex = i;
    }
  }

  return bestIndex;
}

module.exports = function sortMagic(slideshow) {
  const bar = new ProgressBar(":reste", {
    total: slideshow.length
  });

  const filteredSlideShow = slideshow.filter(() => true);

  const result = [];
  const length = filteredSlideShow.length;
  let previousElement = filteredSlideShow.pop();
  result.push(previousElement);
  do {
    bar.tick({ reste: filteredSlideShow.length });
    const index = getBestMatch(previousElement, filteredSlideShow);
    previousElement = filteredSlideShow.splice(index, 1)[0];
    result.push(previousElement);
  } while (result.length < length);

  return result;
};
