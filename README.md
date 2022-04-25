
Accounts to log in with:
honorables.unregistered@maildrop.cc
pq: !234Easy

honorables.student@maildrop.cc
pq: !234Easy


How to build the project:
1. Must have Node.js installed
2. git clone https://github.com/jtrosty/Honorables.git 
3. Perform a npx create-react-app extra. (Yes craete, a react app otuside the git clone repo.  We were unable to have the 'node_modules' folder in the github.
4. Copy the 'node_modules' director from app you just created, called extra in this case, to the client directory within 'Honorables'.  
5. Go to the 'client' directory and install the following dependencies.
    npm install react-router-dom
    npm install react-bootstrap
    npm install bootstrap
    npm install node-fetch@2
    npm install axios
    npm install jest
    npm install @auth0/auth0-react
    npm install react-places-autocomplete
    npm install google-maps-react (may need to use --force)

6. cd .., and go into the server directory. 
7. In server 
    npm init -y
    npm install express cors mongoose nodemon
8. Open a terminal for the front end. and the node terminal for the server. 
9. Take the node termianl and navigate to the server directory (honorables/server) and use the command 'nodemon server.'  The server should be running.
10. With the ohter terminal, navigate to the client directory (honorables/client) and type npm start.  The website should be running on port 3000. 


4/15/22
This is done in the same directory as the 'client' folder in the project

npm install react-router-dom
npm install google-maps-react
npm install react-places-autocomplete
npm install bootstrap
npm install react-bootstrap
npm install node-fetch@2
npm install axios
npm install @auth0/auth0-react

This is done in the directory 'server'

npm install mongoose express cors nodemon 


4/4/2022 - in client npm install axios npm install node-fetch@2

4.2.2022 - Use npm install jest to run app.test.js

3.31.2022 - Please use these dependencies for the back end
npm install express mongoose cors nodemon (INSTALL IN SERVER DIRECTORY)

nodemon is optional, but it will cause the server to automatically re-start anytime you make changes to the backend, effectivly verifying that each time you save, the changes dont break the code)
If you dont want to use nodemon, you will need to change the package.json in the server folder from "start": "nodemon server.js" to "start": "server.js"

Videos the group has watched to implement parts of the code:

https://www.youtube.com/watch?v=7CqJlxBYj-M - MERN exercise tracker (2 hour)
https://www.youtube.com/watch?v=I7EDAR2GRVo – MERN tutorial backend connect to front (1 hour)
https://www.youtube.com/watch?v=CdDXbvBFXLY&t=771s - Google Maps API custom map
https://www.youtube.com/watch?v=h_d4HNwEleo - Google Maps Search Bar
https://www.youtube.com/watch?v=8pKjULHzs0s – Bootstrap react tutorial
https://www.youtube.com/watch?v=UjHT_NKR_gU – React router
https://www.youtube.com/watch?v=4dp4JFpOpX0 - Using circleCI and adding test
https://www.youtube.com/watch?v=ML5egqL3YFE - Jest + React testing library
https://www.youtube.com/watch?v=slGMKIDg7gM - Very useful tutorial for testing React on CircleCI (Replace 'yarn' with 'npm')

# To setup work enviorment, in a fresh folder perform git clone, then:
This is done in the 'client' directory
npm install react-router-dom
npm install google-maps-react
npm install react-places-autocomplete
npm install bootstrap
npm install react-bootstrap
npm install axios
npm install node-fetch@2
npm install @auth0/auth0-react

In the 'server' directory
npm install mongoose

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Chekcing out a branch and merging
1. Before starting a new feature/bug - pull main - git pull
2. checkout your new branch - git checkout -b your-branch
3. make your changes and commit to your branch using
4. When all changes are done, git push to make sure everything is on remote and create a pull request
5. we all code review the pull request once its approved, make sure its up to date with main by rebasing.
6. resolve any merge conflicts that might occur during the rebase
7. merge it into main so everyone else now has your code
