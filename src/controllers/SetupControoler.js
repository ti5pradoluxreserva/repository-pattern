const Setup = require('../models/Setup');

module.exports = {
    async index(req, res) {
        const setups = await Setup.findAll();

        return res.json(setups)
    },


    async store(req, res) {
        const newSetup = req.body;

        const setup = await Setup.create({ newSetup });

        return res.json(setup)
    }
}