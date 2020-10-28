const express = require('express')
const app = express()
const port = 4000

// GET function for the first mission (whos-there)
app.get('/whos-there', function (req, res) {
    res.send('Hi Trax! This is Shai Israeli')
})


//server is up and listening at port 4000(can change it manually in the code)
app.listen(port, function () {
    console.log(`Server is listening at http://localhost:${port}`)
})