'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@chat91.com',
      password: 'adminuser',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Manager',
      email: 'manager@chat91.com',
      password: 'manageruser',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
