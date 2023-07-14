const express = require('express');
const app = express();
const cors = require('cors');


require('dotenv').config({ path: "./config.env"});
const port = process.env.PORT || 5000;
//const port = 5000;

//use middleware
app.use(cors());
app.use(express.json());

const con = require('./db/connection');

app.use(require("./routes/route"));

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);  
})

