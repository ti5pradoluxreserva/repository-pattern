'use strict';


module.exports = {
   up (queryInterface, Sequelize) {

    return queryInterface.createTable('setup', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      _id: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      shift: {
        type: Sequelize.NUMERIC
      },
      bench: {
        type: Sequelize.STRING
      },
      card_tag_operator: {
        type: Sequelize.STRING
      },
      setup_start_time: {
        type: Sequelize.DATE
      },
      setup_end_time: {
        type: Sequelize.DATE
      },
      operator_id: {
        type: Sequelize.STRING
      },
      bench_id: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING
      },
      FILIAL: {
        type: Sequelize.STRING
      },
      D_E_L_E_T_E: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
       }
       });
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
