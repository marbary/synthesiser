var express = require('express');
const { join } = require("path");

var app = express();
const port = 3001;

app.use(express.static(join(__dirname, 'public')));
 

console.log(join(__dirname, 'css'));
console.log(join(__dirname, "index.html"));

app.get("/", (_, res) => {
    res.sendFile(join(__dirname, "index.html"))
});


/* app.get('/', (req, res) => {
    res.send("Hello World!")
  }); */
  
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })