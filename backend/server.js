const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3000;
const router = express();

const courseRoutes = require('./src/routes/Course.routes');
const registrationRoutes = require('./src/routes/Registration.routes');
const studentRoutes = require('./src/routes/Student.routes');

const dbURL = "mongodb+srv://hamps:hampspw@hampsfullstackdb.sarkc.mongodb.net/Lab2Fullstack?retryWrites=true&w=majority"

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

router.use(express.urlencoded({ extended: false }))
router.use(express.json());
router.use(express.static('public'));
router.use('/api/students', courseRoutes);
router.use('/api/registrations', registrationRoutes);
router.use('/api/courses', studentRoutes);


router.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})