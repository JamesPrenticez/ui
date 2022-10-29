## Virtual Envirment
=======================
. venv/Scripts/activate
=======================

### Initial Setup
0. Open terminal as administrator
1. cd into your project
2. pip install virtualenv
3. virtualenv venv --python=python3.9.13
4. . venv/Scripts/activate
5. pip install -r requirements.txt

### Run 
0. cd frontend 
1. npm run dev 
OR 
1. npm run build
THEN serve from 
2.  flask run
OR 
func start / f5

### ENV
- Set debug to true when in dev and false when in prod (this captures change in hot reload and also swaps the mail server)