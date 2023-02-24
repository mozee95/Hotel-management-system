var btn1 = document.getElementById("btn1");
var roomservice = document.getElementById("roomservice");
var btn2 = document.getElementById("btn2");
var booking = document.getElementById("booking");
var span = document.getElementsByClassName("close")[0];
var btn3 = document.getElementById("btn3");
var menuservice = document.getElementById("menuservice");


function validateDate(){
    let checkIn = new Date(document.getElementById("checkIn").value);
    let checkOut = new Date(document.getElementById("checkOut").value);
    
    let today = new Date();
 
    if (checkIn < today){
     alert("Check In date cannot be before today");
     return false;
    }
    if(checkIn > checkOut){
     alert("Check out date cannot be before check in date");
     return false;
    }
    return true;
 }


btn1.addEventListener("click", function(){
    roomservice.style.display= "block"
})

btn2.addEventListener("click", function(){
    booking.style.display= "block"
})

span.onclick = function(){
    modal.style.display = "none";
}
// Close box when user clicks anywhere else on the window
window.onclick = function(event){
    if (event.target==roomservice){
        roomservice.style.display = "none";
    } else
    if (event.target==booking){
        booking.style.display = "none";
    }
}
