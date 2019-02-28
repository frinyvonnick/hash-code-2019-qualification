/* eslint-env mocha */

const assert = require("assert");
const group = require("./group");

describe("group", function() {
  it("groups", function() {
    assert.deepEqual(
      group([
        { id: 0, tags: ["cat", "dog"] },
        { id: 1, tags: ["selfie", "dog", "landscape"] },
        { id: 2, tags: ["cat", "selfie", "landscape"] },
        { id: 3, tags: ["selfie", "cat"] }
      ]),
      [
        [
          { id: 0, tags: ["cat", "dog"] },
          { id: 1, tags: ["selfie", "dog", "landscape"] }
        ],
        [
          { id: 2, tags: ["cat", "selfie", "landscape"] },
          { id: 3, tags: ["selfie", "cat"] }
        ]
      ]
    );
  });
});
