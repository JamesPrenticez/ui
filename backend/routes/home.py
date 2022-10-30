from . import blueprint
from flask import render_template

@blueprint.route('/', methods=['GET'])
@blueprint.route('/home', methods=['GET'])
def home():
	return render_template("index.html")