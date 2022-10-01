const { calcSum }  = require("../helpers/calc");

describe("test of calc", function () {
    test("sum of two numbers", function () {
        expect(calcSum(2,2)).toBe(4)
    })
    test("sum of two numbers with undefined", function () {
        expect(calcSum(undefined,2)).toBe("ERROR")
    })
    test("sum of two numbers with MAX_VALUE", function () {
       expect(calcSum(Number.MAX_VALUE, Number.MAX_VALUE)).toBe("ERROR. Incorrect data")
    })
    test("sum of two numbers with NaN", function () {
        expect(calcSum(NaN, 2)).toBe("you should input only digits")
    })
})

const { calcMultiply } = require("../helpers/calc");

describe("test of calc", function () {
        test("multiplication of two zeroes", function () {
        expect(calcMultiply(0,0)).toBe(0)
    })
    test("multiplication of two numbers with undefined", function () {
        expect(calcMultiply(undefined,2)).toBe("ERROR")
    })
    test("multiplication of two numbers with MAX_VALUE", function () {
        expect(calcMultiply(Number.MAX_VALUE, Number.MAX_VALUE)).toBe("ERROR. Incorrect data")
    })
    test("multiplication of two numbers with NaN", function () {
        expect(calcMultiply(NaN, 2)).toBe("you should input only digits")
    })
})

// const { calcSub } = require("../helpers/calc");

// describe("test of calc", function () {
//     test("subtraction of two numbers", function () {
//         expect(calcSub(5,2)).toBe(3)
//     })
// })


// const { calcDivine } = require("../helpers/calc");

// describe("test of calc", function () {
//     test("divine of two numbers", function () {
//         expect(calcDivine(8,2)).toBe(4)
//     })
// })