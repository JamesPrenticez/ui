from . import blueprint
from flask import render_template

@blueprint.route('/inputs', methods=['GET'])
def inputs():
	return render_template("index.html")