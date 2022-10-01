const car = {
    name: 'ferrari',
    color: 'green',
    wheels: 4,
    driver: {
        name: 'Her s gori',
        age: 25,
    },
}

console.log(car.wheels)
console.log(car.driver.age)

const car2 = car
car2.name = 'Mersedes'
console.log(car["name"])
 

