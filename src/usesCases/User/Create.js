
const shajs = require('sha.js');
const { nanoid } = require('nanoid/async');
const { ApplicationException } = require('../../common/exceptions/ApplicationException');


const { UsersRepository } = require('../../persistance/inDatabaseUserRepository');

module.exports = () => ({

    Execute: async(email, password) => {
        const usersRepository = new UsersRepository();

        if(!email || !password){ throw new ApplicationException('The Email and Passowrd is Required', 401); }
        if(password.length < 6 ) throw new ApplicationException('The Password must have more than 6 characters', 400);
        
        
        const findByEmail = await usersRepository.getByEmail(email);
        if(findByEmail){ throw new ApplicationException('The Email Already Exists', 401); }
        
        const idUser = await nanoid();
        password = await shajs('sha256').update(password).digest('hex');

        await usersRepository.create(idUser, email, password);

        return {
            message: 'User created successfully',
            data: []
        }
    }

});
