const express = require('express');

const ProductsService = require('./../services/productsService');

const router = express.Router();

const service = new ProductsService();

// Get all products
router.get ('/', async (req, res) => {
    res.json(await service.findAll())
})

// Get by id
router.get ('/:_id', async (req, res) => {
    const { _id } = req.params
    res.json(await service.findById(_id))
})

// Update Product
router.patch ('/update/:id', async (req, res) => {
    const { id } = req.params;

    const update = service.updateProduct(id, req.body);
    if (update) {
        res.json({message: "Product updated"})
    } else {
        res.json({message: "Error"})
    }
})

// Add product
router.post('/add', async (req, res) => {
    const product = await service.addProduct(req.body)
    if (product) {
        res.json({message: 'Product added'})
    } else {
        res.json({message: 'Error'})
    }
})

module.exports = router;