const mongoose = require ("mongoose")
require('dotenv').config()

const connectMongoDb = async () =>{
    try {
        await mongoose.connect(
            //conexão buscando do .env 
            process.env.MONGO_URI_CONNECTION,
            //configs em modo de objeto
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongoDb