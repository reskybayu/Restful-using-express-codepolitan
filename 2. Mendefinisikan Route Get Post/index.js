import express from 'express';

const app = express();

app.get("/order", (req,res) => {
    res.send("GET Response");
})

app.post("/order", (req,res) => {
    res.send("POST Response");
})

app.listen(5555, () => {
    console.log('Server running at port 5555')
})