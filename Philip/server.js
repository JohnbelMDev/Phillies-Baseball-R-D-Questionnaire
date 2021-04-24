const express = require('express')
const app = express()
const port = 3100;

app.get('/', (req,res) => {

})

app.listen(port, ()=> console.log(`listening on port ${port}`))
