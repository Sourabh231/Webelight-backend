const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//API Documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('swagger-jsdoc')


//env config
dotenv.config();

//route are imported
const userRoutes = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const product = require('./routes/productRoute')

    ;

//mongodb connection
connectDB();

//Swagger API config
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
                title: 'Webelight Backend Application',
                description: 'Using Express js I Make the app'
            },
        servers:[
            {
               url:'http://localhost:8080',  
            }
        ]

    },
    apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);

//rest objects
const app = express();

//add middlewares 
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Welcome Sourabh'
    })
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin',adminRoute)
app.use('/api/v1', product);

//Homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec))

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})