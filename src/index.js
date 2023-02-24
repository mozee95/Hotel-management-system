
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
  var checkIn = getElementVal('datepicker');
  var checkOut = getElementVal('datepickers');
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

function loadTable(){
  var bookingFormDB = firebase.database().ref('bookingForm');
  //get a reference to the table element
  var table = document.getElementById("myTable");
  //clear existing table row
  while (table.rowslength >1){
    table.deleteRow(1);
  }

  //get data from database
  var ref = firebase.database().ref("bookingForm");
  ref.on("value", function(snapshot){
    snapshot.forEach(function(childsnapshot){
      var childData = childsnapshot.val();
      // add row to the table
      var row = table.insertRow(-1);
      var nameCell = row.insertCell(0);
      var phoneNoCell = row.insertCell(1);
      var addressCell = row.insertCell(2);
      var checkInCell = row.insertCell(3);
      var checkOutCell = row.insertCell(4);
      var roomTypeCell = row.insertCell(5);
      var roomNoCell = row.insertCell(6);
      nameCell.innerHTML = childData.name;
      phoneNoCell.innerHTML = childData.phoneNo;
      addressCell.innerHTML = childData.address;
      checkInCell.innerHTML = childData.checkIn;
      checkOutCell.innerHTML = childData.checkOut;
      roomTypeCell.innerHTML = childData.roomType;
      roomNoCell.innerHTML = childData.roomNo;
    })
  })

}

function loadTables(){
// Create a reference to the database
var menuserviceDB = firebase.database().ref('menuserviceForm');

//get a reference to the table element
var table = document.getElementById('myTables');

//Delete existing rows
while(table.rowslength>1){
  table.deleteRow(1)
}

//get data from database
var ref = firebase.database().ref('menuserviceForm');

ref.on('value', function(snapshot){
    snapshot.forEach(function(childsnapshot){
      var childData = childsnapshot.val();

      //add row to the table
      var row = table.insertRow(-1);
      var roomNoCell = row.insertCell(0);
      var foodCell = row.insertCell(1);
      var foodPriceCell = row.insertCell(2);
      var drinkCell = row.insertCell(3);
      var drinkPriceCell = row.insertCell(4);
      roomNoCell.innerHTML = childData.roomNo;
      foodCell.innerHTML = childData.food;
      foodPriceCell.innerHTML = childData.foodPrice;
      drinkCell.innerHTML = childData.drink;
      drinkPriceCell.innerHTML = childData.drinkPrice;
    })
})

}



 

