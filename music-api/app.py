from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://mongo:27017/")
db = client.musicdb
contacts = db.contacts

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    contacts.insert_one(data)
    return jsonify({"status": "ok"})

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

