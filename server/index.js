const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./model/users')


const url = 'mongodb+srv://rishurajcreative:BiOqT4TU2eJS4u7k@cluster0.n7tbcpz.mongodb.net/crud-basic?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(url)

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

// post method 
app.post('/create',(req,resp)=>{
    userModel.create(req.body)
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))
})
//get method
app.get('/', (req,resp)=>{
    userModel.find({})
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))
})

// get user by id
app.get('/getUser/:id', (req, resp)=>{
    const id = req.params.id;
    userModel.findById(id)
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))
})
// update method
app.put('/update/:id', (req,resp)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, phone:req.body.phone})
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))
})

//delete method

app.delete('/delete/:id', (req, resp)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(users=>resp.json(users))
    .catch(err=>resp.json(err))

})
app.listen(3000)