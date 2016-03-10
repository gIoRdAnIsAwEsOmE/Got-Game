var password = prompt("The password is your address.");
function checkforviruses() {
    if (password == "1234 56th Ab Abcdefghi St 8900") {
        alert("You have found the password!");
    }else{
        
        checkforviruses();
    }
}

checkforviruses();