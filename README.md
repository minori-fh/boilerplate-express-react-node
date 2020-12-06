#  :star: EXPRESS-REACT-NODE BOILERPLATE
:zap: Front-End Back-End housed together  
:zap: [Boilerplate Site](https://bp-expressreactnode.herokuapp.com/)  
:zap: download repo || follow steps for set-up

# :star: STEPS
## Back-end (Express.js) set up
1. Create the following files: 
    + server.js
    + .gitignore (optional)
    + README.md (optional)

2. Add contents to .gitignore (optional)

3. Initialize node package to create package.json file: 
```
$ npm init --yes
```
4. Install the following node packages:
```
$ npm i express
$ npm i path
```
5. Copy down contents of server.js and routes directory

## Client (React) set up
1. In the same directory at root level create react app:
```
$ npx create-react-app "app-name-here"
```
2. Rename react-app directory to "client"
3. Create-react-app will automatically create a connection to git. Remove the hidden .git file to prevent submodules in your app.
4. Create react content or copy down contents of "components" and "pages" directory in the "src" folder.

At this point, starting the server and client locally should render the webpage. Push to github repository (MANDATORY before heroku deployment).

## Deploy to Heroku
1. Create heroku app
```
$ heroku create "heroku-app-name-here"
```
2. Add following script to the server package.json 
```json
   "heroku-postbuild": "cd client && npm install && npm run build"
```
3. Add following script to the client package.json 
```json
   "homepage": "https://{heroku-app-name}.herokuapp.com/"
```
4. Make sure github main branch is up to date and then deploy on heroku through the terminal: 
```json
   $ git push heroku main
```

## Author(s): 
1. [Minori Hashimoto](https://github.com/minori-fh)