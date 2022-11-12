from . import blueprint
from flask import render_template

@blueprint.route('/table', methods=['GET'])
def table():
	return render_template("index.html")