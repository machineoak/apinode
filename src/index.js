const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("proxy get")
})

app.delete('/', (req, res) => {
    res.send("proxy delete")
})

app.listen(PORT, () => {
    console.log(`online at ${PORT}`)
});
