// field to input 
document.addEventListener('DOMContentLoaded', function(){
    var modal = document.getElementById("booking");
    var menu = document.getElementById("roomservice");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];
    var btn1 = document.getElementById("btn1");
    
    
    
    
    // Function to validate date
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
    // Display block when button is clicked
    function showdialog(dialog) {
        dialog.style.display = "block";
    }
    
    btn.addEventListener("click", function() {
       showdialog(modal);
    })
    btn1.addEventListener("click", function() {
        showdialog(menu);
        console.log(menu);
    })
    // Close box when x is clicked
    span.onclick = function(){
        modal.style.display = "none";
    }
    // Close box when user clicks anywhere else on the window
    window.onclick = function(event){
        if (event.target==modal){
            modal.style.display = "none";
        }
    }
});



