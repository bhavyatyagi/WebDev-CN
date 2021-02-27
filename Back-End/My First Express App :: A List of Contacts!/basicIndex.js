const { response } = require('express');
const express=require('express');
const port=786;
const app=express();

app.get('/',function(request,response)
{
    response.send('<h1>Bhavya Tyagi have been here!</h1>')
});

app.listen(port,function(error){
    if(error)
    {
        console.log("Check app.listen, problem running server. ", error);
    }
}); 
