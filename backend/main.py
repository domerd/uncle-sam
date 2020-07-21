from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    verify_jwt_in_request
)

from datetime import timedelta

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
jwt = JWTManager(app)


@app.route('/')
def alive():
    return 'I am alive!'


@app.route('/api/farmers')
@jwt_required
def protected():
    return jsonify([
        {
            'name': 'Shlomi\'s Oranges',
            'id': 1,
            'source': 20,
            'size': 40,
            'country': '1',
        },
        {
            'name': 'Solomon and Sons',
            'id': 2,
            'source': 33,
            'size': 35,
            'country': '1',
        },
        {
            # 'name': 'Banana Farm',
            'id': 3,
            'source': 24,
            'size': 55,
            'country': '1',
        },
        {
            'name': 'Joe Jr Juices',
            'id': 4,
            'source': 90,
            'size': 23,
            'country': '2',
        },
        {
            'name': 'Lincoln Peaches',
            'id': 5,
            'source': 64,
            'size': 78,
            'country': '2',
        },
        {
            'name': 'God save the Queen',
            'id': 6,
            'source': 99,
            'size': 154,
            'country': '3',
        },
        {
            'name': 'Lord of Fruit',
            'id': 7,
            'source': 12,
            'size': 256,
            'country': '3',
        },
        {
            'name': 'Franque the Ice',
            'id': 8,
            'source': 6,
            'size': 58,
            'country': '4',
        },
    ])


@app.route('/api/countries')
@jwt_required
def countries():
    return jsonify([
        {
            'name': 'Israel',
            'country_id': '1'
        },
        {
            'name': 'United States',
            'country_id': '2'
        },
        {
            'name': 'United Kingdom',
            'country_id': '3'
        },
        {
            'name': 'Canada',
            'country_id': '4'
        }
    ])


@app.route('/api/token/verify', methods=['POST'])
def verify_token():
    verify_jwt_in_request()
    return jsonify(valid=True), 200


@app.route('/api/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    if username != 'test' or password != 'test':
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=username, expires_delta=timedelta(days=7))
    return jsonify(access_token=access_token), 200


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
