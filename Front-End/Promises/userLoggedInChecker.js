var userLoggedIn=true;

var promise=new Promise((resolve,reject)=>{
  
  //wait for 1 sec
  setTimeout(()=>{
    if(userLoggedIn)
      {
        resolve();
      }
    else
      {
        reject();
      }
  },1000);
});

setTimeout(()=>{
  userLoggedIn=false;
},500);

promise.then(()=>{
  alert('User Logged-in!');
}).catch(()=>{
  alert('User Logged-out');
});
