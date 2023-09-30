import base64
from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
from boundshrink import crop_and_resize
from infer import ASLInferrer
from PIL import Image
import io
import numpy as np
import re
import random
import string
import cv2
