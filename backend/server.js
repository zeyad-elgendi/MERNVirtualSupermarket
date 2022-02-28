require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./config/db.js');

const productsRouter = require('./routes/productsRoutes');
connectDB();

app.use(express.json());

app.use("/api/products", productsRouter);



const PORT = process.env.PORT || 3101 ;

app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`));


