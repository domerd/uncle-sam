from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity, verify_fresh_jwt_in_request
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
    return jsonify(['yossi', 'kobi'])


@app.route('/api/token/verify', methods=['POST'])
def verify_token():
    #import pdb; pdb.set_trace()
    verify_fresh_jwt_in_request()
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
    access_token = create_access_token(identity=username, expires_delta=timedelta(seconds=10, days=1))
    return jsonify(access_token=access_token), 200


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
