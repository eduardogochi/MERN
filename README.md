# MERN

Express
To run the app, type
 node webapp.js

To compile scr/app.js into static/app.js, run transform.sh


MongoDB 

On windows, install mongodb executable in C:/MongoDB
Create a c:/data/db folder
Add C:/MongoDB to the PATH enviroment variable

On a cmd window, start the MongoDB server by typing c:\MongoDB\bin\mongod
Leave this window open, and open a new cmd to start the mongo shell

To run this script in the mongo shell, type this:
mongo localhost:27017/bugsdb c:\<PATH_TO_YOUR_MERN_PROJECT>\scripts\init.mongo.js

Dependencies installed globally won't show in package.json

Browserify
install browserify globally
npm install -g browserify

Gulp
install gulp globally
npm install -g gulp

Note: Generate bundle.js by typing gulp bundle on the command line.

Install dev dependencies
npm install vinyl-source-stream gulp babelify browserify --save-dev
