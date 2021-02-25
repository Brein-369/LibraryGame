const express = require('express')
const app = express()
const port = 3000
const allRoutes = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use('/', allRoutes)

app.listen(port,()=>{
    console.log(`Server is on at port ${port}`);
})