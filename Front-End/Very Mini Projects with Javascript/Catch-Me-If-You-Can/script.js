var box=document.getElementById('box');

box.addEventListener('mouseover',function(){
    var boxCoordinates=box.getBoundingClientRect();
    
    var pos=getNewPosition(boxCoordinates.height,boxCoordinates.width);
    box.style.top= pos.y+"px";
    box.style.left= pos.x +"px";
});

function getNewPosition(boxHeight,boxWidth)
{
    var newY=Math.floor(Math.random()*window.innerHeight+1-boxHeight);
    var newX=Math.floor(Math.random()*window.innerWidth+1-boxWidth);
    
    if(newY<0)
        newY=0;
    if(newX<0)
        newX=0;
    
    return {x:newX,y:newY};
}
