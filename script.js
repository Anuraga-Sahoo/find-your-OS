const express = require('express');
const path = require('path');
const os = require('os')


const app = express();
// const operatingSystem = os
let port = 8000

app.use('/',express.static(path.join(__dirname + '/public')))

app.use('/api', (req, res)=>{
 
   const osInfo = {
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    machine: os.machine(),
    type: os.type(),
  };
  res.send(osInfo);
  
})
app.use('/home', (req, res)=>{
  res.send("hello")
})
app.listen(port, ()=>{
   console.log(`Server is running on http://localhost:${port}`);
})
