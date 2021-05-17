"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "James",
        email: "james@gmail.com",
        password: "EcfQeh6JMvrJnu9Lxu5TNf8r",
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {})
  },
}
