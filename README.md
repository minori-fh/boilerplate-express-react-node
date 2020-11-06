# EXPRESS-REACT-NODE BOILERPLATE
Primary use is for personal projects. 

How this boilerplate was set up:

## Client (React) set up
1. Initialize new directory and create react app
```
# navigate to destination directory and...
$ npx create-react-app "app-name-here"
```
2. Create a client directory and insert react-app files into the directory


## Back-end (Express.js) set up
1. Touch the following files in the parent directory: 
    + server.js
    + .gitignore (optional)
    + README.md (optional)

2. In the .gitignore add node_modules and other relevant files (.DS_Store, .env, etc.)(optional)

3. Initialize node package to create package.json file: 
```
# navigate to destination directory and...
$ npm init --yes
```

4. Install the following node packages to use for the server (at root directory) 
    + express
    + path

5. Copy down contents of server.js and routes directory
