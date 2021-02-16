
function someFunc(data)
{
    // $('<img>',{
    //    src: data.photos[0].img_src,
    // 	width: '100px',
    //     height: '100px',
    // }).appendTo('#image-div');
    let obj=data.photos;
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
$('#button').click(function()
                  {
    $('#image-div img').remove();
   if($('#date').val()==""||$('#page-number').val()==""){
    alert("Date to dal bhai!") ;
       return;
   }
    var solNo=$('#date').val();
    var pageNo=$('#page-number').val();
    var urlMade="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solNo+"&page="+pageNo+"&api_key=DEMO_KEY";
    
    $.ajax({
       url: urlMade,
        method: 'GET',
        success: someFunc
    });
});