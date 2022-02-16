const orderSchema = require('../models/ordersModel')

class OrdersService {
    contructor() {

    }
    
    // Create order
    async addOrder(order) {
        try {
            const newOrder = new orderSchema(order)
            await newOrder.save()
            return true
        } catch(error) {
            return error
        }
    }

    // Update order
    async updateOrder(_id, changes) {
        try {
            await orderSchema.updateOne({_id: _id}, changes)
            return true
        } catch(error) {
            return error
        }
    }

    // Get by email
    async findByEmail(email) {
        try {
            const order = await orderSchema.find({email: email});
            return order;
        } catch(error) {
            return error;
        }
    }
}

module.exports = OrdersService;