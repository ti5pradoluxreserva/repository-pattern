'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      _id: {
        type: Sequelize.STRING
      },
      EAN_code: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING,
      },
      box_number: {
        type: Sequelize.STRING
      },
      default_time_cycle: {
        type: Sequelize.NUMERIC
      },
      description: {
        type: Sequelize.STRING
      },
      product_image_name: {
        type: Sequelize.STRING
      },
      FILIAL: {
        type: Sequelize.STRING
      },
      D_E_L_E_T_E: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};