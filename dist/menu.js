const btn1 = document.getElementById("btn1");
// var roomservice = document.getElementById("roomservice");
const btn2 = document.getElementById("btn2");
// var booking = document.getElementById("booking");
var span = document.getElementsByClassName("close")[0];
// var btn3 = document.getElementById("btn3");
var menuservice = document.getElementById("roomservice");
var modal = document.getElementById("booking");



$(function() {
    // initialize datepicker
    $("#datepicker").datepicker({
      minDate: 0, // set minimum selectable date to today
      beforeShowDay: function(date) {
        // disable dates before today
        var today = new Date();
        if (date == today) {
          return [false, "disabled", "Unavailable"];
        }
        return [true, "", ""];
      }
    });
    $("#datepickers").datepicker({
        minDate: 0, // set minimum selectable date to today
        beforeShowDay: function(date) {
          // disable dates before today
          var today = new Date();
          if (date == today) {
            return [false, "disabled", "Unavailable"];
          }
          return [true, "", ""];
        }
      });
  });


btn1.addEventListener("click", function(){
  menuservice.style.display = "block";
})

btn2.addEventListener("click", function(){
   modal.style.display = "block";
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
