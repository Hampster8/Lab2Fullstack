const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const Router = require('./src/routes/router');
// ===============================
app.use(express.json());
app.use('/api', Router);


app.use(express.static(path.resolve(__dirname, '../dist')))   // Set static folder
app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname,'../dist') + '/index.html');
});



const connect = async () => {
    await mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    })
}

connect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})


