$('#p-button').prop('disabled',true);
$('#n-button').prop('disabled',true);
function updateButtons(photos)
{
    if (pageNo === 1) {
        $('#p-button').prop('disabled',true);
        $('#n-button').prop('disabled',false);
    } else if (photos.length === 5) {
        $('#n-button').prop('disabled',true);
        $('#p-button').prop('disabled',false);
        // --pageNo;
    } else {
        $('#n-button').prop('disabled',false);
        $('#p-button').prop('disabled',false);
    }
}
function someFunc(data)
{
    // $('<img>',{
    //    src: data.photos[0].img_src,
    // 	width: '100px',
    //     height: '100px',
    // }).appendTo('#image-div');
    let obj=data.photos;
    updateButtons(obj);
    if(obj.length===0)
        {
            alert('No images found for this day');
            return;
        }
    for(let photo of obj)
        {
			$('<img>',{
       src: photo.img_src,
    	width: '100px',
        height: '100px',
    }).appendTo('#image-div');
        }
}
var pageNo=1;
function displayImages(pageNo)
                  {
	
    $('#image-div img').remove();
   if($('#date').val()==""||$('#page-number').val()==""){
    alert("Details to dal bhai!") ;
       return;
   }
    var solNo=$('#date').val();
    
    
    var urlMade="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solNo+"&page="+pageNo+"&api_key=DEMO_KEY";
    
    $.ajax({
       url: urlMade,
        method: 'GET',
        success: someFunc
    });
}
$('#button').click(displayImages);
$('#p-button').click(function()
                    {
    --pageNo;
    displayImages(pageNo);
});
$('#n-button').click(function()
                    {
    ++pageNo;
    displayImages(pageNo);
});