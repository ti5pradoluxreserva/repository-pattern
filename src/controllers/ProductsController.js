const Products = require('../models/Products');

module.exports = {
    async store(req, res){
        const newProduct = req.body;

        const products = await Products.create({ newProduct });

        return res.json(products)
    }
}