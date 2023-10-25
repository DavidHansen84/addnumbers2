const express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello! To use this add /add/:number1:/:number2: and it will add those 2 numbers")
})

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2  = parseInt(req.params.num2);
    let result = num1 + num2;
    res.send("The sum of " + num1 + " and " + num2 + " is " + result + "!")
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });