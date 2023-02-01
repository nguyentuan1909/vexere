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
    await queryInterface.bulkInsert('stations', [{
      name: 'Bến Xe Mỹ Đình',
      address: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
      province: "Hà Nội",
      createdAt: "2022-12-26 03:11:57",
      updatedAt: "2022-12-26 03:11:57"
    },
    {
      name: 'Bến Xe Nam Thăng Long',
      address: "Nam Thăng Long, Bấc Từ Liêm, Hà Nội",
      province: "Hà Nội",
      createdAt: "2022-12-26 03:11:57",
      updatedAt: "2022-12-26 03:11:57"
    },
    {
      name: 'Bến Xe Giáp Bát',
      address: "Giáp Bát, Hai Bà Trưng, Hà Nội",
      province: "Hà Nội",
      createdAt: "2022-12-26 03:11:57",
      updatedAt: "2022-12-26 03:11:57"
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};
