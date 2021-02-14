var divs=$("#div-adding");

$('button').click(function(e){
    e.preventDefault();
    
    if($('#roll-input').val()===""||$('#name-input').val()===""||$('#marks-input').val()==="")
        alert("please fill details");
    else{
   divs.append('<div class="aside-divs">Roll No- <span id="highlight">'+ $('#roll-input').val() +'</span>, '+ $('#name-input').val() +' has scored '+ $('#marks-input').val() +' marks</div>');
    }
});