'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('trips', [{
      fromStation: 1,
      toStation: 2,
      startTime: "2022-12-27 11:00:50",
      price: 500000,
      createdAt:"2022-12-27 11:00:50",
      updatedAt: "2022-12-27 11:00:50"
    },
    {
      fromStation: 1,
      toStation:3,
      startTime: "2022-12-27 11:00:50", 
      price: 250000,
      createdAt:"2022-12-27 11:00:50",
      updatedAt: "2022-12-27 11:00:50"
  },
  {
    fromStation: 2,
    toStation:3,
    startTime: "2022-12-27 11:00:50", 
    price: 300000,
    createdAt:"2022-12-27 11:00:50",
    updatedAt: "2022-12-27 11:00:50"
}
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
