const { ApplicationException } = require('../../common/exceptions/ApplicationException');

const totalPricePants = (objectProduct) => {

    //	2 por 1 en los artículos de PANTS.
    let priceToPay = 0;
    let priceProduct = objectProduct.price;
    const units = objectProduct.units;
    if(units > 1){
        const pairs = Math.floor(units/2);
        const residue = units%2;
    
        priceToPay = pairs * priceProduct;
        if(residue) priceToPay += priceProduct;
    }else{
        priceToPay = priceProduct;
    }

    return priceToPay;
};

const totalPriceTShirt = (objectProduct) => {
    // 3 o más artículos de TSHIRT, el precio por unidad debe ser de 19,00
    let priceToPay = 0;
    (objectProduct.units >= 3) ? (priceToPay = 19.00) : (priceToPay = objectProduct.price);

    return (objectProduct.units * priceToPay);
}

const totalPriceHat = (objectProduct) => {
    const priceToPay = objectProduct.price;
    return (objectProduct.units * priceToPay);
}

const totalPriceProduct = async(objectProduct) => {

    let value = 0;

    switch(objectProduct.name){
        case 'PANTS':
            value = totalPricePants(objectProduct);
            break;
        case 'TSHIRT':
            value = totalPriceTShirt(objectProduct);
            break;
        case 'HAT':
            value = totalPriceHat(objectProduct);
            break;
        default:
            throw new ApplicationException('Unknown Product Entered', 400);
    }

    return value;
}

module.exports = {
    totalPriceProduct
}


// "PANTS", "TSHIRT", "HAT","PANTS"
// "PANTS", "TSHIRT", "PANTS"
// "TSHIRT", "TSHIRT", "TSHIRT", "PANTS", "TSHIRT"
// "PANTS", "TSHIRT", "PANTS", "PANTS", "HAT", "TSHIRT", "TSHIRT" 
