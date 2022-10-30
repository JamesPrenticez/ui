from flask import Blueprint

blueprint = Blueprint('routes', __name__)

from .home import home
from .admin import admin