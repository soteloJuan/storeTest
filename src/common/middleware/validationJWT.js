const jwt = require('jsonwebtoken');
const { UsersRepository } = require('../../persistance/inDatabaseUserRepository');


module.exports = () => ({

    validationJwtUser: async(req, res, next) => {
        try{
            const token = req.header('token') || "";
            const usersRepository = new UsersRepository();
            const privateKey = process.env.SECRETORPRIVATEKEY || 'helloworld';

            if(token?.length === 0 || token.trim() == "" || token === undefined || token === null) {
                return res.status(401).json({
                    ok:false,
                    message:'The Token Is Required!',
                    data:[]
                });
            }
            
            const { payload } = jwt.verify(token, privateKey) ; 
            const resultFindUser = await  usersRepository.getByIdUser(payload);

            if(!resultFindUser.dataValues) {
                return res.status(401).json({
                    ok:false,
                    message:'The User Does Not Exist!',
                    data:[]
                });
            }

            req.body.idUserFromToken = payload;
            next();
        }catch(error){
            return res.status(401).json({
                ok:false,
                message:'Token Validation Failed!',
                data:[]
            });
        }
    }
});
