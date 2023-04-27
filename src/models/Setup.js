const { Model, Datatypes, DataTypes} = require('sequelize')

class Setup extends Model {
    static init(sequelize) {
        super.init({
            _id: DataTypes.STRING,
            date: DataTypes.DATE,
            shift: DataTypes.NUMBER,
            bench: DataTypes.STRING,
            card_tag_operator: DataTypes.STRING,
            setup_start_time: DataTypes.DATE,
            setup_end_time: DataTypes.DATE,
            operator_id: DataTypes.STRING,
            bench_id: DataTypes.STRING,
            cod: DataTypes.STRING,
            FILIAL: DataTypes.STRING,
            D_E_L_E_T_E: DataTypes.STRING,

        }, {
            sequelize
        })
    }
}

module.exports = Setup