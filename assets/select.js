function HideFooter()
{
    var display = document.getElementById("FatFooter").style.display;
    if(display=="none")
        document.getElementById("FatFooter").style.display="block";
    else
        document.getElementById("FatFooter").style.display="none";
}


jQuery(function($) {


  $(".imgWrapGeometry").on('click',function(){
    var newWin = open('../assets/geometryChoices.html', 'geometryChoicesWin', 'height = 600, width = 600');
  
});
   
    $('#myButton').click(function() {
        $("#FatFooter").toggle();
});
  }); // end ready
 