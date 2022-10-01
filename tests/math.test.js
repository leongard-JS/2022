
const { sum } = require("../helpers/math");

describe('tests of sum', function () {
    test('sum two 0', function () {
       expect(sum(0, 0)).toBe(0)         
    })
    test('sum two numbers', function () {
    expect(sum(100, 1000)).toBe(1100)         
     })
})

