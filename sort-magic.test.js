/* eslint-env mocha */

const assert = require('assert')
const sortMagic = require('./sortMagic')

describe('sortMagic', function () {
  it('sortMagics', function () {
    assert.deepEqual(
      sortMagic(),
      undefined)
  })
})
