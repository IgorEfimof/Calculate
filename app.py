from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Теннисный Калькулятор API"

if __name__ == '__main__':
    app.run(debug=True)
