const faker = require('faker')

var dataCount = 2000;
var users = [];
module.exports = {
  fakeDataGenerator(length = dataCount) {
    users = []
    for (let i = 0; i < length; i++) {
      users.push({
        name: faker.name.findName(),
        address: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.zipCode()} ${faker.address.country()}`,
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      })
    }

    return users
  },
}