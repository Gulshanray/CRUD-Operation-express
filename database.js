const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gulshan', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
