const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raygulshan960:sanjukumar@express.ndxrkkr.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connect successfully')
}).catch((error)=>{console.log(error)})

Schema = mongoose.Schema({
    name:String,
    mail: String,
    age:Number
})
console.log('schema created')


StudentModel = mongoose.model('student',Schema)
module.exports =StudentModel
