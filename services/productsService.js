const productSchema = require('../models/productsModel')

class ProductsService {
    constructor() {

    }

    // Get all
    async findAll() {
        try {
            const products = await productSchema.find();
            return products;
        } catch(error) {
            return error;
        }
    }

    // Get by Id
    async findById(_id) {
        try {
            const product = await productSchema.findOne({_id: _id});
            return product;
        } catch(error) {
            return error;
        }
    }

    // Update product
    async updateProduct(_id, changes) {
        try {
            await productSchema.updateOne({_id: _id}, changes);
            return true;
        } catch(error) {
            return error
        }
    }

    // addProduct
    async addProduct(product) {
        try {
            const newProduct = new productSchema(product)
            await newProduct.save()
            return true
        } catch (error) {
            return error
        }
    }
}

module.exports = ProductsService;