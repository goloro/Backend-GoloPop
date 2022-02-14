const express = require('express');

const UsersService = require('./../services/usersService');

const router = express.Router();

const service = new UsersService();

// Get all users
router.get ('/', async (req, res) => {
    res.json(await service.findAll())
})

// Get by email
router.get('/:email', async (req, res) => {
    const { email } = req.params;
    const user = await service.findbyEmail(email);
    res.json(user)
})

// Add user
router.post('/add', async (req, res) => {
    const user = await service.addUser(req.body);
    if (user) {
        res.json({message: 'User added'})
    } else {
        res.json({message: 'Error'})
    }
})

// Update user
router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;

    const update = await service.updateUser(id, req.body)
    if (update) {
        res.json({message: 'User updated'})
    } else {
        res.json({message: 'Error'})
    }
})

// Delete user
router.delete('/delete/:id', async (req,res) => {
    const { id } = req.params;

    const deleted = service.deleteUser(id);
    if (deleted) {
        res.json({message: 'User deleted'})
    } else {
        res.json({message: 'Error'})
    }
})

module.exports = router;