const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport 
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        // find a user and establish the identity
        // property: valueToSearch
        User.findOne({ email: email }, function (error, user) {
            if (error) {
                console.log('Error in finding user --->Passport');
                return done(error);
            }

            //if not found or passsword is wrong
            if (!user || user.password != password) {
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

// serilizing the user to decide which key is to be kept in the cookies 
// saving the encrypted information of user thru express session into cookies 
passport.serializeUser(function (user, done) {
    done(null, user.id);
})

// deserilizing the user from the key in the cookies 
// finding the user using key /
passport.deserializeUser(function (id, done) {
    User.findById(id, function (error, user) {
        if (error) {
            console.log('Error in deserilizing the user/finding the user --->Passport');
            return done(error);

        }
        return done(null, user);
    });
});

passport.checkAuthentication = function (request, response, next) {
    // if request is authenticated or the the user is signed in then pass on the request to the next function controllers action 
    if (request.isAuthenticated()) {
        return next();
    }
    // if the user is not signed in  
    return response.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function (request, response, next) {
    if (request.isAuthenticated()) {
        // request.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        response.locals.user = request.user;
    }
    next();
}

// export the model
module.exports = passport;