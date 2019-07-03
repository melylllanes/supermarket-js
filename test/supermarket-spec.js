/* eslint-disable no-undef */

var assert = require("assert")
var Supermarket = require("../src/supermarket")

describe("Supermarket", function () {
  describe("#scan", function () {
    it("charges 3.11 for Fruit tea", function () {
      var sut = new Supermarket()
      sut.scan("FR1")
      assert.strictEqual(sut.total(), 3.11)
    })
  })
})