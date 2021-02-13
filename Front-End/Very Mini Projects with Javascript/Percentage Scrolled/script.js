var percentage=document.getElementById('perc');
var filler=document.getElementById('filler');
function getDocHeight(){
    var d=document;
    return Math.max(d.body.offsetHeight,d.body.scrollHeight,d.body.clientHeight);
}
var docHeight=getDocHeight();
var windowHeight=window.innerHeight;
window.addEventListener('resize',function(){
   	docHeight=getDocHeight();
    windowHeight=window.innerHeight;
});
window.addEventListener('scroll',function(){
   	docHeight=getDocHeight();
     var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    
    percentage.innerHTML=scrolled;
    filler.style.width=scrolled+"%";
});