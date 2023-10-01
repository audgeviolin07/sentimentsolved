import base64
from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
#from boundshrink import crop_and_resize
#from infer import ASLInferrer
#from PIL import Image
from test import Emotion
import io
import numpy as np
import re
import random
import string
import cv2

def random_string(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["SECRET_KEY"] = "secret!"
socketio = SocketIO(app, cors_allowed_origins="*")


emotion = Emotion()
# yolo.size = 14 * 32 # Must be a multiple of 32
# yolo.confidence = 0.5


@app.route("/")
def root():
    return {"message": "Hello World"}


@socketio.on("send-frame")
def send_frame(data):
    image = data['image']
   
    # 5. send to frontend (Simon)
   
    data = {
        "emotions": emotion
    }

    socketio.emit("response", data)


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=8000)
