const form = document.getElementById("form");
const API_URL = 'http://localhost:8080/snake';

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
})