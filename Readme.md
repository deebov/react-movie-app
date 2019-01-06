# REACT-MOVIES-APP

### INSTALL

To run the application you must install the dependencies. Go to the application folder and run one of these commands:

```sh
$ yarn
```

or

```sh
$ npm install
```

### RUN

In development mode the application is supposed to be used to improve or work on itself.
To run the application in development mode run this command:

```sh
$ yarn start
```

or

```sh
$ npm start
```

### BUILD

In production mode the application is optimized and minimized. You can use it for production.
To build the application in production mode run this command:

```sh
$ yarn build
```

or

```sh
$ npm build
```

To serve the app and use it you should instals `serve`. To install it run this command:

```sh
$ yarn global add serve
```

or

```sh
$ npm i -g serve
```

Then go the production folder ( `dist`) and run this command:

```sh
$ serve
```

## Features

- Lazy-loading components ( Code-splitting )
- Advanced list loading
  - Infinite scroll loading
  - Paginated loading
  - Handling erorrs
- Livesearch movies
- Handling unauthorized routes
- Beautiful and responsable UI/UX

### Tech Stack

- [React.js](https://reactjs.org/) - reactive UI library
- [Redux](https://redux.js.org/) - state management library
- [CSS Modules](https://github.com/css-modules/webpack-demo)
- [ESLint](https://eslint.org/) - linting for JavaScript
- [Babel](https://babeljs.io/) - compiler for writing next generation JavaScript
- [Webpack](https://webpack.js.org/) - module bundler
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [React-router](https://github.com/ReactTraining/react-router) - Declarative routing for React
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
- [Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) ( [react-hot-loader](https://github.com/gaearon/react-hot-loader) ) - a plugin that allows React components to be live reloaded without the loss of state
- [Prettier](https://prettier.io/) - code formatter

## Q&A

**Why I did not used CSS in JS library?**

> In this app I used CSS Modules because it is easy to read, reusable and allows us keep the app logic from style, allows to write styles without touching the **global scope**. It is easy to write media-queries and animations. It can be optimized and minimized well. Meanwhile CSS in JS libraries cannot really profide the benefits that CSS Modules profides. CSS in JS libraries make the code hard-readable than CSS Modules and make it difficult to write advanced styles. Here some articles on this topic: [Article 1](https://www.sparkpost.com/blog/why-chose-css-modules/) [Article 2](https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)

**Why I did not used Typescript and Redux-saga?**

> At the time of writing this application I didn't learned them. But I am going to learn them very soon. They are at the top of my task list.

**Why I did not write tests?**

> At the time of writing this application I am practicing to write supported tests. I didn't write tests because I should practice it well before applying it on production.

### Contacts

[Github](https://github.com/deebov)
Email: deebov@yandex.com
