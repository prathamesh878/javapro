const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 9000;

let users = [];
app.use(cors());

app.use(bodyParser.json());

app.post('/register', (req,res)=>{
    const formData = req.body;
    // console.log('New user registered:', formData);
    users.push(formData);
    res.status(200).send('server: Resister successful');
});

app.get('/user', (req,res)=>{
    res.json(users);
})

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});