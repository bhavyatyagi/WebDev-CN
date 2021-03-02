const { Console } = require('console');
const express=require('express');
const port=786;
const path=require('path'); //inbuilt node module doesnt require installation
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); //using a middleware

// building a middleware
app.use(function(request,response,next){
    // console.log('middleware 1 called');
    request.myName="Arpan";
    next();
});

//middleware 2
app.use(function(request,response,next){
    console.log("My name from mw2", request.myName);
    // console.log('middleware 2 called');
    next();
});

var contactList=[
    {
        name: "Arpan",
        phone: "123456"
    },
    {
        name: "Arpan1",
        phone: "1234567"
    },
    {
        name: "Arpan2",
        phone: "12345678"
    }
]

app.get('/',function(req,res)
{
    console.log("from the get route controller",req.myName);
    return res.render('home',{
       title: "Contact List" ,
       contact_list: contactList
    });
});
app.get('/',function(request,response)
{
    return response.render('home',{title: 'Parser'});
});

app.post('/create-contact',function(request,response){
    //WAY 1
    // contactList.push({
    //     name: request.body.name,
    //     phone: request.body.phone
    // })
    // return response.redirect('/');

    //ANOTHER WAY

    contactList.push(request.body);
    return response.redirect('back');
});

app.listen(port,function(error){
    if(error)
    {
        console.log("Check app.listen, problem running server. ", error);
    }
    console.log("Server is up and running at port: ",port);
}); 

//steps
// 1. install ejs
// 2. App.set (view engine,view path)
// 3. views directory +file
// 4. render+response.render\
// 5. home.ejs and not home.html
// 6. check that home.ejs is in 'views' or mentioned folder
