const User = require('../models/user')

module.exports.profile = function (request, response) {
    return response.render('user.ejs', {});
}

//these are actions we are making
module.exports.signup = function (request, response) {
    return response.render('user_sign_up', {
        title: "Codeial | Signup"
    });
}

// render/acition of sign in 
module.exports.signIn = function (request, response) {
    return response.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
}

//get the signup data
module.exports.create = function (request, response) {
    if (request.body.password != request.body.confirm_password) {
        return response.redirect('back');
    }

    User.findOne({ email: request.body.email }, function (error, user) {
        if (error) { console.log("Error in finding user in sign-up"); return; }

        if (!user) {
            User.create(request.body, function (error, user) {
                if (error) {
                    console.log('Error in creating new user while sign up');
                }
                console.log('You are signed up, please login to continue');
                return response.redirect('/users/sign-in');
            });
        }
        else {
            console.log('User already exists');
            return response.redirect('back');
        }
    });
}

//get the signin data//session
module.exports.createSession = function (request, response) {
    return response.redirect('/');
}

module.exports.destroySession = function (request, response) {
    request.logout();
    return response.redirect('/');
}