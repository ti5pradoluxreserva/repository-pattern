const Products = require('../models/Products');

module.exports = {
    async index(req, res) {
        const products = await Products.findAll();

        return res.json(products)
    },
    async store(req, res){
        const newProduct = req.body;

        const product = await Products.create({ newProduct });

        return res.json(product)
    }
}