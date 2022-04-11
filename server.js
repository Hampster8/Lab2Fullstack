const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://hamps:hampspw@hampsfullstackdb.sarkc.mongodb.net/Lab2Fullstack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
