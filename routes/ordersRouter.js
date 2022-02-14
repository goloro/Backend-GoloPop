const express = require('express');

const OrdersService = require('./../services/ordersService');

const router = express.Router();

const service = new OrdersService();

// Create order
router.get ('/add', async (req, res) => {
    res.json(await service.addOrder(req.body))
})

// Update order
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;

    const update = await service.updateOrder(id, req.body)
    if (update) {
        res.json({message: 'Order updated'})
    } else {
        res.json({message: 'Error'})
    }
})

// Get by email
router.get ('/:email', async (req, res) => {
    const { email } = req.params
    res.json(await service.findByEmail(email ))
})

module.exports = router;