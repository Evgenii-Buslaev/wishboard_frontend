# Wishboard Application (frontend)

## Desctiption

This is a Frontend-part of my new application for creating wishes cards.

- #### Technologies
  - HTML
  - SCSS
  - Firebase
  - JavaScript (ES6)
  - React
  - Redux, Redux-Thunk

* #### App features

1. CRUD for user - register, authorization, editind and deleting profile. User data also is saved into cookies, so user can be automatically logged in within an hour.

2. CRUD-operations with wishing cards for authorized users. Guests can only read existing cards and its information.

    Authorized users can:

    - Create a card;
    - Upload an image;
    - Like other cards;
    - Comment other cards;

* #### Architecture of Application

  This application has been built according to functional programming paradigm by using functional components.

  1. To get all user and cards data objects I'm using the API classes.
  2. As a global state store I'm using redux and redux thunk for async opearions.
  3. To store file I'm using firebase store. This store returns a downloading link after file uploading, then I save this link wish card object into db.

- #### API

To store user and cards data I used API: https://github.com/Evgenii-Buslaev/wishboard_backend - running backend server (MongoDB, Node.js, express.js).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
