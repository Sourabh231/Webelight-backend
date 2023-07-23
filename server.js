const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//env config
dotenv.config();

//route are imported
const userRoutes = require('./routes/userRoute');
const product = require('./routes/productRoute')

const errorMiddleware = require('./middleware/error');

//mongodb connection
connectDB();

//rest objects
const app = express();

//add middlewares 
app.use(cors());
app.use(express.json());

//middleware for Errors
app.use(errorMiddleware);


app.get('/',(req,res)=>{
    return res.status(200).send({
        message:'Welcome Sourabh'
    })
});

app.use('/api/v1/user',userRoutes);
app.use('/api/v1',product);

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})