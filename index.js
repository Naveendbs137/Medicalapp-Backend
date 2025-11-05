const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// import routes
const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes');

// use routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get("/",(req,res)=>{
  res.send("this is root server api is working")
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));

