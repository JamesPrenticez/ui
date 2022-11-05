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
6. cd frontend
7. npm i

### Run 
0. cd frontend 
1. npm run dev 
OR 
1. npm run build
THEN serve from 
2.  flask run
OR 
func start / f5

### Code splitting
(Webpack dev/prob configs)[https://webpack.js.org/guides/production/]
(Code Splitting with webpack)[https://www.codemzy.com/blog/react-bundle-size-webpack-code-splitting]
(Avoiding Fallbacks)[https://reactjs.org/docs/code-splitting.html#avoiding-fallbacks]

https://reactjs.org/docs/code-splitting.html#avoiding-fallbacks
https://stackoverflow.com/questions/66039626/react-lazy-suspens-react-router-dont-change-route-until-component-is-fetched
https://www.npmjs.com/package/react-router-loading

https://stackoverflow.com/questions/66039626/react-lazy-suspens-react-router-dont-change-route-until-component-is-fetched

LOADABLE?

https://www.robinwieruch.de/react-router-lazy-loading/
https://github.com/gregberge/loadable-components

### ENV
- Set debug to true when in dev and false when in prod (this captures change in hot reload and also swaps the mail server)