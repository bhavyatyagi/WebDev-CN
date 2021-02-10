var current=document.querySelector('.current');
var next=document.querySelector('.next')

function startCounter(){
  var interval=setInterval(animate,2000);

}
var countTarget=0;
function getValue(event)
{
  event.preventDefault();
  countTarget=event.target['box'].value;
}
var cunt=0;
function animate(){
  if(cunt>=countTarget){
      current.innerHTML=0;
  return;}
  next.classList.add('animate');
current.innerHTML=cunt;
  next.innerHTML=cunt+1;

  cunt++;
  setTimeout(function(){
    next.classList.remove('animate');
    current.innerHTML=next.innerHTML;
  },500);

}
startCounter();
// window.alert("chutiye");
