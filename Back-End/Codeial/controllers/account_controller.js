module.exports.account=function(request,response)
{
    return response.end('<h1>Account Settings</h1>');
}

module.exports.privacy=function(request,response)
{
    return response.end('<h1>Account Privacy</h1>');
}