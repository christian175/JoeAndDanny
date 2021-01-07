from flask import Flask, render_template
from pathlib import Path


dataFolder = Path(r"C:\Users\chris\OneDrive\Documents\GitHub\Bot\JoeAndDanny\client\index.html")



app = Flask(__name__)

# index
@app.route('/')
def index():
    return render_template("index.html")

# /me    
@app.route("/me", methods=["GET"])
def get_results():
    return "Dummy Result"

if __name__ == "__main__":
    app.run(debug=True)