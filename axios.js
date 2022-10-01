const axios = require('axios').default;

const getUser = (id) => `https://jsonplaceholder.typicode.com/users/${id}`

const userIds = new Array(10).fill(0).map((_, index) => index)
console.log(userIds)


