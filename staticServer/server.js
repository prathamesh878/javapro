const express = require('express');
const path = require('path');
const PORT = 9000;

const app = express();

staticPath = path.join(__dirname, 'public');

app.use(express.static(staticPath));

app.get('/', (req,res)=>{
    res.sendFile(path.join(staticPath, 'index.js'))
})

app.listen(PORT, ()=>{
    console.log(`server connected: ${PORT} `)
})