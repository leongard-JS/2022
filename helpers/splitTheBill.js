// function splitTheBill(moneySplitted) {
//   const amountPerPerson =
//     (moneySplitted.A + moneySplitted.B + moneySplitted.C) / 3;

//   const moneyOwed = {
//     ...moneySplitted,
//     A: moneySplitted.A - amountPerPerson,
//     B: moneySplitted.B - amountPerPerson,
//     C: moneySplitted.C - amountPerPerson,
//   };
//   return moneyOwed;
// }

// console.log(
//   splitTheBill({
//     A: 50,
//     B: 42,
//     C: 20,
//   })
// );

// function splitTheBill(dude) {
//   const averageDudesMoney = (dude.A + dude.B + dude.C) / 3
//   const dudeOweToGroup = {
//     ...dude,
//     B: dude.B - averageDudesMoney,
//     A: dude.A - averageDudesMoney,
//     C: dude.C - averageDudesMoney,
//   }
// return dudeOweToGroup
// }

// console.log(splitTheBill({A: 50, B: 45, C: 35}))

function splitTheBill(dude) {
  const averageDudesMoney = (dude.One + dude.Second + dude.Third) / 3
  const dudeOweToGroup = {
    ...dude,
    One: dude.One - averageDudesMoney,
    Second: dude.Second- averageDudesMoney,
    Third: dude.Third - averageDudesMoney,
  }
return dudeOweToGroup
}

console.log(splitTheBill({One: 50, Second: 45, Third: 35}))