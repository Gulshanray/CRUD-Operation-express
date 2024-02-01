const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raygulshan960:sanjukumar@express.ndxrkkr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 })
    .then(() => {
        console.log('Connected successfully');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

const Schema = mongoose.Schema({
    name: String,
    mail: String,
    age: Number
});

console.log('Schema created');

const StudentModel = mongoose.model('student', Schema);

module.exports = StudentModel;
