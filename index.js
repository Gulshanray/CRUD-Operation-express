const express = require("express");
const app = express();
const port = 3000;
const student = require('./database');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => { console.log(`Running on port ${port}`); });

app.get('/', async (req, res) => {
    students = await student.find();
    res.render('home.ejs', {
        page: "CRUD with express and mongoose",
        title: "Read, & Delete Operations",
        students: students
    })
})

app.post('/register', async (req, res) => {
    const { name, mail, age } = req.body;
    const newstudent = new student({
        name, mail, age
    });
    const studentsave = await newstudent.save(); 
    res.redirect('/');
})

app.get('/register', (req, res) => {
    res.render('register');
})


app.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const deletedStudent = await student.findByIdAndDelete(id);
    return res.redirect('/');
   
  });

//   app.get('/edit/:id', async (req, res) => {
//     id = req.params.id; 
//     const editStudent = await student.findByIdAndDelete({ _id: id });
//     if (editStudent == null) {res.redirect('/');} 
//     else {res.render('edit.ejs', { students: editStudent });}
// });



//   app.post("/edit/:id",async(req,res)=>{
//     id = res.params;
//      const {name , mail, age} = req.body;
//      updateStudent =  await student.findByIdAndDelete({_id:id},
//      {name , mail, age} ,{new : true});
//      return res.redirect('/');
//   })
// GET request to render the edit form
app.get('/edit/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        const editStudent = await student.findById(id);
        if (!editStudent) {
            return res.redirect('/');
        } else {
            res.render('edit.ejs', { student: editStudent });
        }
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

// POST request to update the student
app.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { name, mail, age } = req.body;
    
    try {
        const updateStudent = await student.findByIdAndUpdate(
            id,
            { name, mail, age },
            { new: true } // To return the updated document
        );

        if (!updateStudent) {
            return res.redirect('/');
        }

        return res.redirect('/');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

  