const express = require("express")
const cors = require("cors")
const monk = require("monk")

const app = express()

const db = monk('localhost/SnakeBoards');
const dataSet = db.get("Scores")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) =>{
    res.json({
        message: "Poggers 😼"
    })
})

app.post("/snake", (req, res) => {
    if(req.body.PB > 0){
        const Data = {
            score: req.body.PB
        };
        console.log(Data)
        dataSet.insert(Data)
        .then(createdData => {
            res.json(createdData)
        })
    }
})

app.get("/snake", (req, res) => {
    dataSet.find()
    .then(data => {
        res.json(data);
    })
})

app.listen(8080, () => {
    console.log("listening")
})