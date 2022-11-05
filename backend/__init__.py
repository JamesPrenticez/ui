import os
from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from flask_login import LoginManager

from .config import config

# import logging
# from logging.handlers import SMTPHandler, RotatingFileHandler

# db = SQLAlchemy()
# migrate = Migrate()
# login = LoginManager()
# login.login_view = 'index.index'

def create_app(config_env):
	app = Flask(__name__, static_folder="./public", template_folder="./public")
	#app = Flask(__name__)
	app.config.from_object(config[config_env])

	# db.init_app(app)
	# migrate.init_app(app, db)
	#login.init_app(app)

	##############################################################
	# Routes
	##############################################################
	with app.app_context():
		from .routes import blueprint as routes_blueprint
		from .api import blueprint as api_blueprint
		app.register_blueprint(routes_blueprint)
		app.register_blueprint(api_blueprint)

		return app

# Create App - this could be split into a separate file but there is no point
app = create_app(os.getenv('FLASK_ENV'))

class colors:
    PURPLE = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    END = '\033[0m'

print(colors.PURPLE, "FlaskApp initalized in:", colors.GREEN, f"{os.getenv('FLASK_ENV')}", colors.END)
print(colors.PURPLE, "Connection String:", colors.YELLOW, f"{app.config['SQLALCHEMY_DATABASE_URI']}", colors.END)