const http = require('http');
const app =require('./app');
const cors = require("cors");
require("dotenv").config();

//api for cross-origin resource sharing
app.use(cors()); 

const db = require("./models");

const server = http.createServer(app)
const port = process.env.PORT || 3001;


db.sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`server is running on PORT:${port}`);
    });
})
.catch((err) => {
    console.log(`Error connecting : ${err.message}`);
})

