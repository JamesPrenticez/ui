from . import blueprint
from flask import render_template

@blueprint.route('/animations', methods=['GET'])
def animations():
	return render_template("index.html")