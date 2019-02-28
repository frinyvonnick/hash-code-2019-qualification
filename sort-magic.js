const assert = require("assert");
const debug = require("debug")("sortMagic");
const _ = require("lodash");

function getBestMatch(slide, slideshow) {
  let bestScore = 0;
  let bestIndex = -1;
  const slides = slideshow.filter(currentSlide => !currentSlide.isPlaced);

  if (slides.length === 1) {
    slides[0].isPlaced = true;
    return slides[0];
  }

  slideshow.forEach((currentSlide, index) => {
    if (currentSlide.isPlaced || slide === currentSlide) {
      return;
    }
    if (bestIndex === -1) {
      bestIndex = index;
    }
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
    if (result > 2) {
      bestScore = result;
      bestIndex = currentSlide.index;
    }
  });

  return slideshow[bestIndex];
}

module.exports = function sortMagic(param) {
  const slideshow = param.map((slide, index) => ({ ...slide, index: index }));

  return slideshow.reduce((acc, slide, index) => {
    if (index === 0) {
      acc.push(slide);
      slide.isPlaced = true;
      return acc;
    }
    const bestMatch = getBestMatch(slide, slideshow);
    bestMatch.isPlaced = true;
    acc.push(bestMatch);
    return acc;
  }, []);
};
