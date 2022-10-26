const { Receipts } = require('../model/Receipts.Model');

class ReceiptsRepository{

    async create(idReceipt, dateSale, totalSale){
        try{
            await Receipts.create({idReceipt, dateSale, totalSale});
        }catch(error){
            throw new Error('Error in the System');
        }
    }

    async getAllReceipt(){
        try{
            const result = await Receipts.findAll();
            return result;
        }catch(error){
            throw new Error('Error in the System');
        }
    }
}

module.exports = { ReceiptsRepository };
