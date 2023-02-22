
const firebaseConfig = {
  apiKey: "AIzaSyBEp2LKZmc826gycNl9mu1OCuAlIPDoWLc",
  authDomain: "hms-system-ea368.firebaseapp.com",
  databaseURL: "https://hms-system-ea368-default-rtdb.firebaseio.com",
  projectId: "hms-system-ea368",
  storageBucket: "hms-system-ea368.appspot.com",
  messagingSenderId: "875192990107",
  appId: "1:875192990107:web:d860234b76c94fa8bc893e"
};  

//initialize firebase
firebase.initializeApp(firebaseConfig);

var bookingFormDB = firebase.database().ref('bookingForm');
var menuserviceDB = firebase.database().ref('menuserviceForm');

var menualert = document.getElementById("menualert");
var bookingalert = document.getElementById("bookingalert");

document.getElementById('bookingForm').addEventListener('submit', submitForm);
document.getElementById('menuserviceForm').addEventListener('submit', submitMenu);

function submitForm(e) {
  e.preventDefault();
  
  var name = getElementVal('name');
  var phoneNo = getElementVal('number');
  var address = getElementVal('address');
  var checkIn = getElementVal('checkIn');
  var checkOut = getElementVal('checkOut');
  var roomType = getElementVal('sel1');
  var roomNo = getElementVal('roomnumber');
  
  saveInformation(name, phoneNo, address, checkIn, checkOut, roomType, roomNo);
  
  // Enable alert Message
  document.getElementById("bookingalert").style.display ="block";

  // remove alert Message
  setTimeout(() => {
    document.getElementById("bookingalert").style.display ="none";
  }, 3000);

  // reset the form
  document.getElementById('bookingForm').reset();
}

function getForm() {
  var bookingFormDB = firebase.database().ref('bookingForm');
  bookingFormDB.on('value', function(snapshot){
    snapshot.forEach(function(element){
      
      console.log(element.val().name)
    })
  
  })
}

function getMenu() {
  var menuserviceDB = firebase.database().ref('menuserviceForm');
  menuserviceDB.on('value', function(snapshot){
    snapshot.forEach(function(element){

      console.log(element.val().food)
    })
  })
}

function submitMenu(e) {
  e.preventDefault();
  var roomNo = getElementVal('roomno');
  var food = getElementVal('food');
  var foodPrice = getElementVal('foodprice');
  var drink = getElementVal('drink');
  var drinkPrice = getElementVal('drinkprice');

  saveMenu(roomNo, food, foodPrice, drink, drinkPrice);
  
  // Enable alert
  document.getElementById("menualert").style.display ="block";

  // Remove alert
  setTimeout(() => {
    document.getElementById("menualert").style.display ="none";
  }, 3000);

  // Reset the form
  document.getElementById('menuserviceForm').reset();
}

const saveMenu =(roomNo, food, foodPrice, drink, drinkPrice) => {
  var newmenuserviceForm = menuserviceDB.push();
  newmenuserviceForm.set({
      roomNo: roomNo,
      food: food,
      foodPrice: foodPrice,
      drink: drink,
      drinkPrice: drinkPrice,
  });
};

const saveInformation = (name, phoneNo, address, checkIn, checkOut, roomType, roomNo) =>{
   var newbookingForm = bookingFormDB.push();
   newbookingForm.set({
     name: name,
     phoneNo: phoneNo,
     address: address,
     checkIn: checkIn,
     checkOut: checkOut,
     roomType: roomType,
     roomNo: roomNo,
   });
};

const getElementVal = (id) => {
 return document.getElementById(id).value;
};




 

