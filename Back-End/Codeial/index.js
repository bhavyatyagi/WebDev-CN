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
const express=require('express');
const app=express();
const port=786;
const db=require('./config/mongoose');

const expressLayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));
// Give it before routes 
app.use(expressLayouts);
// extract styles and scripts from subpages (ejs files) into the layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router thru middleware
app.use('/',require('./routes'));


///////////////////////////////
// Setting up view engine
app.set('view engine','ejs'); 
app.set('views','./views');
/////////////////////////////////

app.listen(port,function(error){
    if(error)
    {
        console.log("Error in running the server:\nDetails:",error);
        return;
    }
    // Instead of using string ("") and , port we can use `` and ${variableName} to do it  
    // Known as interpolation
    console.log(`Server is up and running at port: ${port}`);
});
