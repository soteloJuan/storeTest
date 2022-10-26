
const { Users } = require('../model/Users.Model');

class UsersRepository{

    async create(idUser, email, password){
        try{
            await Users.create({idUser, email, password});
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getByIdUser(idUser){
        try{
            const result = await Users.findByPk(idUser);
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getByEmail(email){
        try{
            const result = await Users.findOne({
                where:{
                    email
                }
            });
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async login(email, password){
        try{
            const result = await Users.findOne({
                where:{
                    email,
                    password
                }
            });
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }
}

module.exports = { UsersRepository };
