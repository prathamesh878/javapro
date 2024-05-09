const express = require('express');
const asyncHandler = require('express-async-handler')
const bodyParser = require('body-parser')

const connectDb = require('./dbconnect');
const User = require('./UserModel')

const app = express();
const PORT = 9000;
connectDb();

app.use(bodyParser.json());


app.get('/', asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
}))

app.get('/:id', asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}))

app.post('/', asyncHandler(async(req,res)=>{
    const {name, email, password} = req.body;
    const users = await User.create({
        name, email, password });
    res.status(200).json(users);    
}));

app.put('/:id', asyncHandler(async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id, req.body, {new:true} );
    res.status(200).json(user);    
}))

app.delete('/:id', asyncHandler(async(req,res)=>{
    const user  = await User.findById(req.params.id);
    await user.deleteOne();
    res.status(200).json({"Message":"User deleted"});
}))

app.listen(PORT, ()=>{
    console.log(`Server Connected to port: ${PORT}`)
})