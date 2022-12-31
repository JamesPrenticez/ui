from . import blueprint
from flask import render_template

@blueprint.route('/viewport', methods=['GET'])
def viewport():
	return render_template("index.html")