/*function sayHello() {
            alert("Helloaew there");
        }
        function goodBye() {
            alert("lkjhgfdyuio");
        }*/
        var text;
        function double() {
            text = $('#text').val().toString();
            //$('#output').val($('#text').val());
            $('#output').val(text + text); //2
        }
        function lowercase(condit) {
            text = $('#text').val().toString();
            if(condit == true){
                $('#output').val(text.toLowerCase());
            }else{
                $('#output').val(text.toUpperCase());
            }
        }
        function backwards() {
            text = $('#text').val().toString();
            $('#output').val("");
            for(x = text.length; x > -1; x--){
                $('#output').val($('#output').val() + text.charAt(x));
            }
        }