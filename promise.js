// const promise = new Promise ((resolve, reject) => {
//     resolve(10)
// }).then(result => {
//     throw('SHIT SHIT SHIT!!!')
// })
// .then()
// .catch((r) => console.log(r))
// console.log(promise)

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('DONE')
        console.log('1 done')
    }, 1000);
}).then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('DONE')
            console.log('2 done')
        }, 3000);
}).then((result) => {
    console.log(result)
    })
})