// How did we made this project 
// 1. Make index.js
// 2. make npm init
// 3. npm install express
// 4. server started (required express, chose port,app.listen)
// 5. View engines like EJS (based on js) are used , npm install ejs
// 6. app.set to set view engines and views(for path)
// 7. <%=%> and <%%> are used in home.ejs to use JS in html file
// 8. Pass the data using a get route and res.render in controller function 
// 9. handle first post request, setup a middleware and accept data thru form using express.urlencoded middleware 
// 10. static files using middleware express.static and push the assets folder like 'assets'
// 12. Use databases, persitance storage, mongodb, mongoose robo3t

const { request } = require('express')
const express=require('express');
const port=786;
const path=require('path'); //inbuilt node module doesnt require installation
const { config } = require('process');

const db=require('./config/mongoose');
const Contact=require('./models/contact');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); //using a middleware

app.use(express.static('assets'));
// // building a middleware
// app.use(function(request,response,next){
//     // console.log('middleware 1 called');
//     request.myName="Arpan";
//     next();
// });

// //middleware 2
// app.use(function(request,response,next){
//     console.log("My name from mw2", request.myName);
//     // console.log('middleware 2 called');
//     next();
// });

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
    // console.log("from the get route controller",req.myName);
    Contact.find({},function(error,contacts)
    {
        if(error)
        {
            console.log('Error in fetching contacts from DB');
            return;
        }
        return res.render('home',{
            title: "Contact List" ,
            contact_list: contacts
         });
    });
    
});
// app.get('/',function(request,response)
// {
    
//     return response.render('home',
//         {
//             title: 'Parser',
//             contact_list: contacts
//         });
    
// });

app.post('/create-contact',function(request,response){
    //WAY 1
    // contactList.push({
    //     name: request.body.name,
    //     phone: request.body.phone
    // })
    // return response.redirect('/');

    //ANOTHER WAY

    // contactList.push(request.body);

    // NOW USING DATABASE
    Contact.create({
        name:request.body.name,
        phone: request.body.phone
    },function(error,newContact){
        if(error)
        {
            console.log('Error in creating a contact');
            return;
        }
        console.log('*********',newContact);
        return response.redirect('back');
    });
    // Now not needed 
    // return response.redirect('back');
});

// Delete Contact 

// using params only 
// app.get('/delete-contact/:phone',function(request,response)
// {
//     console.log(request.params.phone);
//     let phone=request.params.phone;

// });

// Using ?phone i.e. Query
app.get('/delete-contact/',function(request,response)
{
    // USING DATABSES
    // get the id from query in url 
    let id=request.query.id;
    // find the contact in DB using id 
    Contact.findByIdAndDelete(id,function(error){
        if(error)
        {
            console.log('Error in deleting object from DB');
            return;
        }
        return response.redirect('back');
    });

// Using Array nd not DB 
 //   // console.log(request.query.phone);
    // let phone=request.query.phone;

    // let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
    // // Contact is basically every object within contactList arary 
    // if(contactIndex!=-1)
    // {
    //     contactList.splice(contactIndex,1);
    // }

    // return response.redirect('back');
});

app.listen(port,function(error){
    if(error)
    {
        console.log("Check app.listen, problem running server. ", error);
    }
    console.log("Server is up and running at port: ",port);
}); 

//steps for making an ejs server & serving home.ejs
// 1. install ejs
// 2. App.set (view engine,view path)
// 3. views directory +file
// 4. render+response.render\
// 5. home.ejs and not home.html
// 6. check that home.ejs is in 'views' or mentioned folder

//Steps to Install mongoDB
// 1. Install MongoDB & Check
// 2. Install ROBO3T
// 3. Mongoose
// 4. Setup config
// 5. RUN Server & test
