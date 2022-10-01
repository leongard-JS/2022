exports.calcMultiply = function calc (a, b) {
   if (a === undefined || b === undefined) return "ERROR"
     if (a === Number.MAX_VALUE || b === Number.MAX_VALUE) return "ERROR. Incorrect data"
      if (a === Number.MAX_VALUE || b === Number.MAX_VALUE) return "ERROR. Incorrect data"
       if (isNaN(a) || isNaN(b)) return "you should input only digits"


   const result = a * b;
      if (result === undefined) {
         return "ERROR"
      }
   return result   
}

exports.calcSum = function calc (a, b) {
   if (a === undefined || b === undefined) return "ERROR"
   if (a === Number.MAX_VALUE || b === Number.MAX_VALUE) return "ERROR. Incorrect data"
    if (a === Number.MAX_VALUE || b === Number.MAX_VALUE) return "ERROR. Incorrect data"
     if (isNaN(a) || isNaN(b)) return "you should input only digits"
     
     const result = a * b;
      if (result === undefined) {
         return "ERROR"
      }
   return result   
}

// exports.calcSub = function calc (a, b) {
//     return a - b
// }

// exports.calcDivine = function calc (a, b) {
//     return a / b
// }


