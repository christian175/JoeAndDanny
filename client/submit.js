const form = document.getElementById("form");
const scoreDiv = document.getElementById("scores")
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:8080/snake' : 'https://joe-and-danny-api.christian175.vercel.app/snake';


showScores()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    Data = {
        PB: highScore
    }

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(Data),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
    .then(createdData => {
        console.log(createdData);
    })
    showScores()
})

function showScores(){
    let scoreArr = []
    scoreDiv.innerHTML = "Top Scores";
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(val => {
            scoreArr.push(val.score)
        })
        console.log(scoreArr)
        scoreArr.sort()
        scoreArr.reverse()
        scoreArr.forEach((val, index) =>{
            let place = index + 1;
            place.toString()
            const div = document.createElement("div")

            const content = document.createElement("p")
            content.textContent = place + ". " + val;

            div.appendChild(content)
            scoreDiv.appendChild(div)
        })
    })
}