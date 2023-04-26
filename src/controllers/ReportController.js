const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '@rocketseat.com.br%'
                }
            },

            include: [
                { association: 'addresses', where: { street: 'Rua Chapéu'}}, //endereços
                { association: 'techs',
            where: {
                name: {
                    [Op.iLike]: 'React%'
                }
            }}, //tecnologias
            ]
        })

        return res.json(users);
    }
}