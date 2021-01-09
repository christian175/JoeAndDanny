const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) =>{
    res.json({
        message: "Poggers 😼"
    })
})

app.listen(8080, () => {
    console.log("listening")
})