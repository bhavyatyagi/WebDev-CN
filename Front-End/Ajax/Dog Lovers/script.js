var dropDown=$('#breeds');
var breedImageDiv=$('#breedimage');
var nextButton=$('#next-image');
var getButton=$('#get-image');
var imageObj=$('#dog-image');
var isAllowed=true;
var breed;

$.get('https://dog.ceo/api/breeds/list/all',function(data,status){
    var breeds=data.message;
    for(let b in breeds)
        {
            dropDown.append('<option value="'+b+'">'+b+'</option>');
        }
});
dropDown.change(function(){
   isAllowed=true;
});

getButton.click(function(){
	if(isAllowed)
        {
            breed=dropDown.val();
    		displayDog(breed);
   			isAllowed=false; 
        }
});

nextButton.click(function(){
   breed=dropDown.val();
    if(breed!==undefined)
    displayDog(breed);
});

function displayDog(breed)
{
    var urlDog="https://dog.ceo/api/breed/"+breed+"/images/random";
    // $("#breedImageDiv img").remove();
    
    $.get(urlDog,function(data)
         {
        var source=data.message;
        imageObj.attr('src',source);
        // breedImageDiv.append('<img src="'+source+'">');
});
}