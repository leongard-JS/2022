// const { firstNonConsecutive }  = require("../codewars/tasks");

// describe("test of task1", function () {
//     test('Test 1', () => {
//         expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6)
//     })
// })

const { stringClean  }  = require("../codewars/tasks");
    describe("test of task2", function () {
        test('empty string', () => {
            expect(stringClean('')).toBe('')
        })
            test('Test of exclamation', () => {
                expect(stringClean('Hello students Scillcrucal!!!')).toBe('Hello students Scillcrucal!!!')
            })
                test('Test of exclamation with numbers', () => {
                    expect(stringClean('Hel111lo students777 Scillcrucal!!!')).toBe('Hello students Scillcrucal!!!')
                })
                    test('Test of exclamation with numbers and other sings', () => {
                        expect(stringClean('Hel111lo students777*** Scillcrucal!!!!)))')).toBe('Hello students*** Scillcrucal!!!!)))'
                        )
                    })
                        test('Test of spaces', () => {
                            expect(stringClean('Hello        students          Scillcrucal!!!')).toBe('Hello        students          Scillcrucal!!!')
                    })
})