from . import blueprint
from flask import render_template

@blueprint.route('/admin', methods=['GET'])
def admin():
	return render_template("index.html")