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
    await queryInterface.bulkInsert('users', [
      {
        name: "Nguyễn Hùng",
        email: "nguyenhung@gmail.com",
        password: "abc@13579",
        phoneNumber: "0966970164",
        avatar: 'http://localhost:3350/public/images/avatars/1672107873057-banner.png',
        type: 'client',
        createdAt: '2022-12-26 16:22:36',
        updatedAt: '2022-12-26 16:22:36'
      },
      {
        name: "Nguyễn Vân Anh",
        email: "vananh@gmail.com",
        password: "abc@13579",
        phoneNumber: "0966970164",
        avatar: 'http://localhost:3350/public/images/avatars/1672107873057-banner.png',
        type: 'admin',
        createdAt: '2022-12-26 16:22:36',
        updatedAt: '2022-12-26 16:22:36'
      },
      {
        name: "Nguyễn Hải",
        email: "hainguyen@gmail.com",
        password: "abc@13579",
        phoneNumber: "0966970164",
        avatar: 'http://localhost:3350/public/images/avatars/1672107873057-banner.png',
        type: 'client',
        createdAt: '2022-12-26 16:22:36',
        updatedAt: '2022-12-26 16:22:36'
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
