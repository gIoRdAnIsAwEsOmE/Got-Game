function madlibs() {
        if ($("input").val() == ""){
            alert("Error, virus.  I meant, you need to fill in the spaces!");
        }else{
            $( "div" ).removeClass("invis");
            setTimeout(function(){
                for (x = 0; x <= 6; x++) {
                    var input = $('#in' + x);
                    var output = $('#out' + x);
                    output.text(input.val());
                }
                
            }, 5000);
        }  
        
}