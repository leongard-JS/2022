const { isTheBillCorrect }  = require("../helpers/bill");

describe("test of bill", function () {
    test("is the bill correct?", function () {
        expect(isTheBillCorrect(32)).toBe('32.00')
    })
})
