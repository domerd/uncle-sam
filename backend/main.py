from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    create_access_token,
    verify_jwt_in_request,
)

from datetime import timedelta

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


@app.route("/")
def alive():
    return "I am alive!"


@app.route("/api/farmers")
@jwt_required
def protected():
    return jsonify(
        [
            {
                "name": "Shlomi's Oranges",
                "id": 1,
                "source": 20,
                "size": 40,
                "country": "1",
            },
            {
                "name": "Solomon and Sons",
                "id": 2,
                "source": 33,
                "size": 35,
                "country": "1",
            },
            {
                # 'name': 'Banana Farm',
                "id": 3,
                "source": 24,
                "size": 55,
                "country": "1",
            },
            {
                "name": "Joe Jr Juices",
                "id": 4,
                "source": 90,
                "size": 23,
                "country": "2",
            },
            {
                "name": "Lincoln Peaches",
                "id": 5,
                "source": 64,
                "size": 78,
                "country": "2",
            },
            {
                "name": "God save the Queen",
                "id": 6,
                "source": 99,
                "size": 154,
                "country": "3",
            },
            {
                "name": "Lord of Fruit",
                "id": 7,
                "source": 12,
                "size": 256,
                "country": "3",
            },
            {
                "name": "Franque the Ice",
                "id": 8,
                "source": 6,
                "size": 58,
                "country": "4",
            },
        ]
    )


@app.route("/api/roads")
@jwt_required
def roads():
    return jsonify(
        [
            {"name": 6, "max_weight": 300, "toll": True,},
            {"name": 2, "max_weight": 200, "toll": True,},
            {"name": 1, "max_weight": 100, "toll": True,},
            {"name": 4, "max_weight": 250, "toll": True,},

            {"name": 10, "max_weight": 100, "toll": True, },
            {"name": 11, "max_weight": 100, "toll": True, },
            {"name": 13, "max_weight": 100, "toll": True, },
            {"name": 14, "max_weight": 100, "toll": True, },
            {"name": 15, "max_weight": 100, "toll": True, },
            {"name": 16, "max_weight": 100, "toll": True, },
            {"name": 10, "max_weight": 100, "toll": True, },
            {"name": 11, "max_weight": 100, "toll": True, },
            {"name": 13, "max_weight": 100, "toll": True, },
            {"name": 14, "max_weight": 100, "toll": True, },
            {"name": 15, "max_weight": 100, "toll": True, },
            {"name": 16, "max_weight": 100, "toll": True, },
            *[{"name": i, "max_weight": 100, "toll": True, } for i in range(300, 320)],

            {"name": 5, "toll": False,},
            {"name": 90, "toll": False,},
        ]
    )


@app.route("/api/map")
@jwt_required
def get_map():
    return jsonify(
        {
            2: ["HOME"],
            3: ["HOME"],
            4: [2],
            5: ["HOME"],
            6: [2, 3],
            7: ["HOME"],
            8: [2, 4],
            9: [3],
            10: [2, 5],
            11: ["HOME"],
            12: [2, 3, 4, 6],
            13: ["HOME"],
            14: [2, 7],
            15: [3, 5],
            16: [8, 2, 4],
            17: ["HOME"],
            18: [9, 2, 3, 6],
            19: ["HOME"],
            20: [2, 10, 4, 5],
            21: [3, 7],
            22: [2, 11],
            23: ["HOME"],
            24: [2, 3, 4, 6, 8, 12],
            25: [5],
            26: [2, 13],
            27: [9, 3],
            28: [2, 4, 14, 7],
            29: ["HOME"],
            30: [2, 3, 5, 6, 10, 15],
            31: ["HOME"],
            32: [8, 16, 2, 4],
            33: [3, 11],
            34: [17, 2],
            35: [5, 7],
            36: [2, 3, 4, 6, 9, 12, 18],
            37: ["HOME"],
            38: [2, 19],
            39: [3, 13],
            40: [2, 4, 5, 8, 10, 20],
            41: ["HOME"],
            42: [2, 3, 6, 7, 14, 21],
            43: ["HOME"],
            44: [2, 11, 4, 22],
            45: [9, 3, 5, 15],
            46: [2, 23],
            47: ["HOME"],
            48: [2, 3, 4, 6, 8, 12, 16, 24],
            49: [7],
            50: [25, 2, 10, 5],
            51: [17, 3],
            52: [2, 26, 4, 13],
            53: ["HOME"],
            54: [2, 3, 6, 9, 18, 27],
            55: [11, 5],
            56: [2, 4, 7, 8, 14, 28],
            57: [3, 19],
            58: [2, 29],
            59: ["HOME"],
            60: [2, 3, 4, 5, 6, 10, 12, 15, 20, 30],
            61: ["HOME"],
            62: [2, 31],
            63: [9, 3, 21, 7],
            64: [32, 2, 4, 8, 16],
            65: [5, 13],
            66: [33, 2, 3, 6, 11, 22],
            67: ["HOME"],
            68: [17, 2, 34, 4],
            69: [3, 23],
            70: [2, 35, 5, 7, 10, 14],
            71: ["HOME"],
            72: [2, 3, 4, 36, 6, 8, 9, 12, 18, 24],
            73: ["HOME"],
            74: [2, 37],
            75: [25, 3, 5, 15],
            76: [2, 19, 4, 38],
            77: [11, 7],
            78: [2, 3, 6, 39, 13, 26],
            79: ["HOME"],
            80: [2, 4, 5, 8, 40, 10, 16, 20],
            81: [27, 9, 3],
            82: [41, 2],
            83: ["HOME"],
            84: [2, 3, 4, 6, 7, 42, 12, 14, 21, 28],
            85: [17, 5],
            86: [2, 43],
            87: [3, 29],
            88: [2, 4, 8, 11, 44, 22],
            89: ["HOME"],
            90: [2, 3, 5, 6, 9, 10, 45, 15, 18, 30],
            91: [13, 7],
            92: [2, 4, 46, 23],
            93: [3, 31],
            94: [2, 47],
            95: [19, 5],
            96: [32, 2, 3, 4, 6, 8, 12, 16, 48, 24],
            97: ["HOME"],
            98: [49, 2, 14, 7],
            99: [11, 33, 3, 9],
        }
    )


@app.route("/api/countries")
@jwt_required
def countries():
    return jsonify(
        [
            {"name": "Israel", "country_id": "1"},
            {"name": "United States", "country_id": "2"},
            {"name": "United Kingdom", "country_id": "3"},
            {"name": "Canada", "country_id": "4"},
        ]
    )


@app.route("/api/token/verify", methods=["POST"])
def verify_token():
    verify_jwt_in_request()
    return jsonify(valid=True), 200


@app.route("/api/login", methods=["POST"])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    access_token = create_access_token(
        identity=username, expires_delta=timedelta(days=7)
    )
    return jsonify(access_token=access_token), 200


if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
