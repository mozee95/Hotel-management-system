
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
//Getting a reference to the tables we want to store our data
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
  // Getting a reference to the data we want to display
  var dataRef = firebase.database().ref('bookingForm');
  

    //Listen for changes on data
    dataRef.on('value', function(snapshot){

      //Clear existing data
      var dataEl = document.getElementById('data');
      dataEl.innerHTML = '';
    
      //Loop through data and add it to the list
      snapshot.forEach(function(childsnapshot){
        var childData = childsnapshot.val();
        
        var properties = {
          name: 'Name',
          phoneNo: 'Phone Number',
          address: 'Address',
          checkIn: 'Check-In',
          checkOut: 'Check-Out',
          roomType: 'Room Type',
          roomNo: 'Room Number',
        };
        
        for (var property in properties){
          var listItem = document.createElement('li');
          listItem.innerText = properties[property] + ':' + childData[property];
          dataEl.appendChild(listItem);
        }
       
      })
    
    })
}

function getMenu() {
  //Getting a reference for the data we want to display
  var menuservice = firebase.database().ref('menuserviceForm');

  //Listen for changes on the data
  menuservice.on('value', function(snapshot){

    //clear existing data
    var dataEl = document.getElementById('data');
    dataEl.innerHTML = '';
     
    //Loop through data and add it to the list
    snapshot.forEach(function(childsnapshot){
      var childData = childsnapshot.val();

      var properties= {
        roomNo: 'Room Number',
        food: 'Food',
        foodPrice: 'Food Price',
        drink: 'Drink',
        drinkPrice: 'Drink Price',
      };

      for (var property in properties){
        var listItem = document.createElement('li');
        listItem.innerText = properties[property] + ':' + childData[property];
        dataEl.appendChild(listItem);
      }
      
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




 

