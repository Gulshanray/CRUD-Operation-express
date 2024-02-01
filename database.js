const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ibm', {
      // Use the new URL parser
      useNewUrlParser: true,
      // Use the new server discovery and monitoring engine
      useUnifiedTopology: true,
      // Use the new connection string parser
      serverSelectionTimeoutMS: 5000, // optional
    });
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};


connectDB();

const Schema = mongoose.Schema({
  name: String,
  mail: String,
  age: Number,
});

console.log('Schema created');

const StudentModel = mongoose.model('student', Schema);
module.exports = StudentModel;
