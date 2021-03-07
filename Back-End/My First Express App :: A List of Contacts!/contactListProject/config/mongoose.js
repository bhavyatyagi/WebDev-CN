// Requiring the library
const mongoose=require('mongoose');

// Making a connection to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//Acquire the connection to check if it is succesful
const db=mongoose.connection;

// Error handling, binding console to the error
db.on('error',console.error.bind(console,'error connecting to db'));

// Connection established, up and runnninf then print the following message
db.once('open',function(){
    console.log('Succesfully connected to the database');
});