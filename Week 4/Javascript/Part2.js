function madlibs() {
    $( "div" ).removeClass("invis");
        setTimeout(function(){
            for (x = 0; x <= 6; x++) {
                var input = $('#in' + x);
                var output = $('#out' + x);
                output.text(input.val());
            }
            
        }, 5000);
        
}