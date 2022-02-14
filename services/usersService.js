const userSchema = require('../models/usersModel')

class UsersService {
    constructor() {

    }

    // Get all
    async findAll() {
        try {
            const users = await userSchema.find();
            return users;
        } catch(error) {
            return error;
        }
    }

    // Get by email
    async findbyEmail(email) {
        try {
            const user = await userSchema.findOne({email: email});
            return user;
        } catch(error) {
            return error;
        }
    }

    // Add user
    async addUser(user) {
        try {
            const newUser = new userSchema(user)
            await newUser.save()
            return true
        } catch(error) {
            return error
        }
    }

    // Update user 
    async updateUser(_id, changes) {
        try {
            await userSchema.updateOne({_id: _id}, changes)
            return true
        } catch(error) {
            return error
        }
    }

    // Delete user
    async deleteUser(_id) {
        let flag = false
        try {
            await userSchema.deleteOne({_id: _id})
            flag = true
        } catch (error) {
            next (err)
        }

        return flag
    }
}

module.exports = UsersService;