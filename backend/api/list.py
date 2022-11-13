from flask import jsonify
from . import blueprint

mockdata = [
  {'id': '1', 'title': 'one'},
  {'id': '2', 'title': 'two'},
  {'id': '3', 'title': 'three'},
  {'id': '4', 'title': 'four'},
  {'id': '5', 'title': 'five'}
]

@blueprint.route('/api/list') 
def list(): 
	list = mockdata
	return jsonify(list)
