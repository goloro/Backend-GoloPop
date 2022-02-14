const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

// MongoDB - CONECCTION
mongoose.connect('mongodb+srv://goloro:goloro@golopop.5soj7.mongodb.net/GoloPop?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/golopop')

app.use(express.json());

const whitelist = ["http://127.0.0.1:5500/index.html?", "http://127.0.0.1:5500/index.html"]
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback (new Error('no permitido'), false)
        }
    }
};
// app.use(cors(options));
app.use(cors())

routerApi(app);

app.listen(port);