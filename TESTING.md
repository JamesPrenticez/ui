npm i @testing-library/jest-dom 
@testing-library/react
@testing-library/user-event
react-test-renderer
--save-dev

scripts:{
  "test": "react-scripts test",
}

must be called src otherwise its to fucking stupid to figure it out

===========================
npm dedupe
===========================
npm ls eslint
===========================
https://www.youtube.com/watch?v=xinJSYiOB6Q
===========================

ES LINT
npm i eslint -D
npm i eslint-plugin-react -D
npm i eslint-plugin-react-hooks -D

eslintrc.json
  {
    "extends": [
      "react-app",
      "react=app/jest",
      "prettier" //important this is at the end so it can override
    ]
  }


PRETTIER
npm i prettier -D

prettierrc.json

.prettierignore
  /node_modules

npm i eslint-config-prettier -D

```
npx prettier --write .
```

