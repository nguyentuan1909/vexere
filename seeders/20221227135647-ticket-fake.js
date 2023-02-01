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
    await queryInterface.bulkInsert('tickets', [
      {
        trip_id: 1,
        user_id: 1,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 1,
        user_id: 2,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 1,
        user_id: 3,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 2,
        user_id: 1,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 2,
        user_id: 2,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 3,
        user_id: 1,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
      {
        trip_id: 3,
        user_id: 3,
        createdAt:"2022-12-27 11:00:50",
        updatedAt: "2022-12-27 11:00:50"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
