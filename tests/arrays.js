const casual = require("casual");


const adresses = new Array(200).fill(null).map(() => {
    return {
        street: casual.street,
        country: casual.country,
        city: casual.city,
        name: casual.name,
        age: casual.integer((from = 18), (to = 80)),
        buildingNum: casual.building_number,
        firstName: casual.first_name,
        lastName: casual.last_name,
        namePrefix: casual.name_prefix,
        nameSuffix: casual.name_suffix,
        phoneNum: casual.phone
    }
})

console.dir(adresses)