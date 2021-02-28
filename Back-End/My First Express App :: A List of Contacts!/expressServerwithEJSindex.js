const express=require('express');
const port=786;
const path=require('path'); //inbuilt node module doesnt require installation
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(request,response)
{
    return response.render('home');
});

app.listen(port,function(error){
    if(error)
    {
        console.log("Check app.listen, problem running server. ", error);
    }
}); 

//steps
// 1. install ejs
// 2. App.set (view engine,view path)
// 3. views directory +file
// 4. render+response.render\
// 5. home.ejs and not home.html
// 6. check that home.ejs is in 'views' or mentioned folder
