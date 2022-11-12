from flask import Blueprint

blueprint = Blueprint('routes', __name__)

from .home import home
from .table import table
from .inputs import inputs
from .animations import animations