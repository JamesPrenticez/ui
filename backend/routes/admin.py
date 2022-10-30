from . import blueprint
import os 
from flask import render_template, current_app

@blueprint.route('/admin', methods=['GET'])
def admin():
	# print(current_app.config["BASE_DIR"])
	# x = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
	return render_template("index.html")