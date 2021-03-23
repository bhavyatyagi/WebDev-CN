// Steps TO MAKE ANY SCALABLE PROJECT
// 1. Make Index.js file in a new project folder and cd into it
// 2. npm init 
// 3. Make directories 
//     routes : All destinations from browsers / paths
//     controllers : Functions
//     views
//     models : Schemas / Files
//     config : configuration for mongoDB
// 4. Setup Express thru : npm i express
// 5. Declare constants, require express; and app=express(), declare ports, default port is 80, finally do app.listen
// 6. In package.json in scripts add nodemon index.js to "start"
// 7. Git init 
// 8. Create files in /routes and module.exports Route in /routes/file and app.use thru middleware in main index.js
// 9. So we created a route now we have to make a controller function in controller and in their specific routes we've to get /use them.
// 10. So basically /routes/index.js mein apne new route ko router.use kro and uske router mein uska controller access kro and controller banao na banaya hoto wo function export krega.
const express = require('express');
const app = express();
const port = 786;
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const mongoose = require('mongoose');
const { user } = require('./config/mongoose');

// for express-sessions to encrypt user infromation 
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// we are doing this because our logged in user is getting logged out
// after restarting of the server and hence we will save it using connect mongo package or called as mongo store
const MongoStore = require('connect-mongo');

// readin thru the post request 
app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
// Give it before routes 
app.use(expressLayouts);
// extract styles and scripts from subpages (ejs files) into the layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



///////////////////////////////
// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
/////////////////////////////////

// mongo store is used to store the session cookie in db 
// After views, use the middleware based authentication
app.use(session({
    name: 'codeial',
    // todo change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/codeial_development'
    })
}));

app.use(passport.initialize());
app.use(passport.session());

// this is done to call the function present in strategy.js file
// so that user can be set to locals and can be excessed in ejs views 
app.use(passport.setAuthenticatedUser);

//use express router thru middleware
app.use('/', require('./routes'));

app.listen(port, function (error) {
    if (error) {
        console.log("Error in running the server:\nDetails:", error);
        return;
    }
    // Instead of using string ("") and , port we can use `` and ${variableName} to do it  
    // Known as interpolation
    console.log(`Server is up and running at port: ${port}`);
});


// AUTHENTICATION STEPS 
// 1. Create user(signup)
// 2. Create session (signin)
// 3. show details of signed in user on profile page 
// 4. sign out 