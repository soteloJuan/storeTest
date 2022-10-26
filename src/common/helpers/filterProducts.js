const filterProducts = async (products = []) => {

    const count = {};

    products.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    return count;
}

module.exports = { filterProducts }
