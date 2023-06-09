const { Model, DataTypes } = require('sequelize');

class Products extends Model {
    static init(sequelize) {
        super.init({
            EAN_code: DataTypes.STRING,
            _id: DataTypes.STRING,
            cod: DataTypes.STRING,
            box_number: DataTypes.STRING,
            default_time_cycle: DataTypes.NUMERIC,
            description: DataTypes.STRING,
            product_image_name: DataTypes.STRING,
            FILIAL: DataTypes.STRING,
            D_E_L_E_T_E: DataTypes.STRING
        },
        {
            sequelize
        })
    }
}

module.exports = Products;