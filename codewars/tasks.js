//task1

// function firstNonConsecutive (arr) {
//     const result = arr.find((item, index) => item !== index + arr[0])
//     // если айтем не равен индекс + элемент массива, например [1,2,3,4,6,7,8,9], 
//     // айтем 4, у него индекс 3, индекс 3 + 0 = 3
//     if (result !== undefined) {
//       return result
//     }
//   return null
// }

//task1

exports.firstNonConsecutive = function NonConsecutive (arr) {
    const result = arr.find((item, index) => item !== index + arr[0])
        if (result !== undefined) {
      return result
    }
  return null
}


//task2

exports.stringClean = function stringCleaner(s) {
  const arr = s.split('')
  const result = arr.reduce((acc, rec) => {
    if (rec === ' ' || isNaN(rec)) {
      return [...acc, rec]
    }
    return acc
  }, [])
  return result.join('')
}

// console.log(stringClean('He11llo student777s Sci111llcruc11ial'))