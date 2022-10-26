const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const databaseConexion = require('./database/config');

// models
require('./model/Users.Model');
require('./model/Products.Model');
require('./model/Receipts.Model');
require('./model/ProductSolds.Model');

// Routes
const Routes = require('./routes');
const { errorHandler } = require('./common/customError/errorHandler');

class App{

    port;

    constructor(){
        this.port = process.env.PORT  || 300;
        this.app = express();
        this.middlewares();
        this.routes();
        this.initDatabase();
    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
    }
    
    routes(){
        this.app.use('/api', Routes);

        this.app.use(errorHandler);
    }

    async initDatabase(){
        try{
            
            // await databaseConexion.authenticate();
            await databaseConexion.sync({force: false});

            
        }catch(error){
            throw new Error('Error on Databse Conexion');
        }
    }

    init(){
        this.app.listen(this.port);
    }
}

module.exports = { App };
