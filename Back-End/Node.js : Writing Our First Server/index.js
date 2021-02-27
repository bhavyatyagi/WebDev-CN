const http=require('http');
const port='786';
const fs=require('fs');

function httpHandler(request,response)
{
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'});

    let filePath;
    // if(request.url==='/')
    // filePath='./index.html'
    // if(request.url==='/styles.css')
    // filePath='./styles.css'
    switch(request.url)
    {
        case '/':
            filePath='./index.html'
            break;
        case '/styles.css':
            filePath='./styles.css'
            break;
        default: filePath='./404.html';

    }
    fs.readFile(filePath,function(error,data){
        if(error)
        {
            console.log(error);
            return response.end('ERROR while parsing file check fs.readFile');;

        }
        return response.end(data);
    });

}

const server=http.createServer(httpHandler);

server.listen(port,function(error){
if(error)
{
    console.log('Error while making server, please check server.listen');
}
console.log("Server is ready and healthy at port ", port);
});
