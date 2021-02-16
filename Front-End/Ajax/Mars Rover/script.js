$('#date').datepicker({showAnim: "fold", dateFormat: 'yy-mm-dd'});

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
   if($('#date').val()==""){
    alert("Date to dal bhai!") ;
       return;
   }
    var dated=$('#date').val();
    var urlMade="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+dated+"&api_key=mrrcTpib9xp0JfAICjn8LwVsDAd3GLviOtuH916z";
    
    $.ajax({
       url: urlMade,
        method: 'GET',
        success: someFunc
    });
});