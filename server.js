const express = require('express')
const app = express()
const path = require('path');
const port = 3000
app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

})
app.post('/login', (req, res) => {
    const { txtUserName, txtpassword } = req.body;
    if (txtUserName == "admin" && txtpassword == "admin") {
        res.sendFile(path.join(__dirname, '/login.html'));
    }
    res.sendFile(path.join(__dirname, '/fail.html'));

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})