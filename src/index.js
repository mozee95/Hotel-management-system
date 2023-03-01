
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
  var roomPrice = getElementVal('roomprice');
  saveInformation(name, phoneNo, address, checkIn, checkOut, roomType, roomNo, roomPrice);
  
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

const saveInformation = (name, phoneNo, address, checkIn, checkOut, roomType, roomNo, roomPrice) =>{
   var newbookingForm = bookingFormDB.push();
   newbookingForm.set({
     name: name,
     phoneNo: phoneNo,
     address: address,
     checkIn: checkIn,
     checkOut: checkOut,
     roomType: roomType,
     roomNo: roomNo,
     roomPrice:roomPrice,
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
      var roomPriceCell = row.insertCell(7);
      nameCell.innerHTML = childData.name;
      phoneNoCell.innerHTML = childData.phoneNo;
      addressCell.innerHTML = childData.address;
      checkInCell.innerHTML = childData.checkIn;
      checkOutCell.innerHTML = childData.checkOut;
      roomTypeCell.innerHTML = childData.roomType;
      roomNoCell.innerHTML = childData.roomNo;
      roomPriceCell.innerHTML = childData.roomPrice;
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
      var totalPriceCell = row.insertCell(5);
      roomNoCell.innerHTML = childData.roomNo;
      foodCell.innerHTML = childData.food;
      foodPriceCell.innerHTML = childData.foodPrice;
      drinkCell.innerHTML = childData.drink;
      drinkPriceCell.innerHTML = childData.drinkPrice;
      totalPriceCell.innerHTML = childData.totalPrice;
    })
})

}

function calculateSum(){
   var database = firebase.database();
   var  menuserviceRef = database.ref('menuserviceForm');

   menuserviceRef.once('value').then(function(snapshot){
    //creating an array of promises for all the update calls
    var updatePromises = [];
    //loop through each order in the snapshot
    snapshot.forEach(function(childsnapshot){
      
      //Get the order data
      var order = childsnapshot.val();
      //Calculate total price
     var foodPrice = parseInt(order.foodPrice);
     var drinkPrice = parseInt(order.drinkPrice);
     var totalPrice = (isNaN(foodPrice) ? 0 : foodPrice) + (isNaN(drinkPrice) ? 0 : drinkPrice);
     console.log('Order ID:', childsnapshot.key, 'Total Price:', totalPrice);

      if (!order.hasOwnProperty('totalPrice')) {
        order.totalPrice = 0;
     }
      //update the order with the total price
      var updates ={};
      updates['/menuserviceForm/' + childsnapshot.key + '/totalPrice'] = totalPrice;
      updatePromises.push(database.ref().update(updates));
    });
    return Promise.all(updatePromises);
  }).then(function() {
     console.log('All updates completed successfully!');
  }).catch(function(error) {
     console.error('An error occurred:', error);
  });
    
   }

   function calculateTotalBill(nodeKey){
    return firebase.database().ref('bookingForm/' + nodeKey).once('value')
    .then(snapshot => {
      const booking = snapshot.val();
      const checkIn = new Date (booking.checkIn);
      const checkOut =  new Date (booking.checkOut);
      const timeDiff = checkOut.getTime()- checkIn.getTime();
      const daysDiff = Math.ceil(timeDiff/(1000*3600*24));
      
      //check if room price is a valid number
      const roomPrice = parseInt(booking.roomPrice);
      if (isNaN(roomPrice)) {
        throw new Error('Invalid roomPrice: ' + booking.roomPrice);
      }
         const totalBill = roomPrice * daysDiff;
         console.log(totalBill);
         const updates = {};
         updates ['bookingForm/' + nodeKey + '/totalBill'] = totalBill;
         return firebase.database().ref().update(updates);
         
    })
    
        
   }

   function calculateRoomBill() {
    
   firebase.database().ref('bookingForm').once('value')
   .then(snapshot => {
     const promises =[];
     snapshot.forEach(childsnapshot => {
       const nodeKey = childsnapshot.key;
       const promise = calculateTotalBill(nodeKey);
       promises.push(promise);
     });
     return Promise.all(promises);
   })
   .then(() => console.log('Total bills calculated successfully'))
   .catch(error => console.error(error));


   }

  function calculateRoomCustomerBill(){
      
    const roomNo = document.getElementById('roomNum').value;

    if(!roomNo){
      alert('Please enter a room number');
      return;
    }

      //Reference to the bookingForm mode
      const bookingFormRef = firebase.database().ref('bookingForm');
      //reference to the menuservice Form
      const menuserviceFormRef = firebase.database().ref('menuserviceForm');
      
       //Find the corresponding booking form based on the roomno field
     bookingFormRef.orderByChild('roomNo').equalTo(roomNo).once('value',(bookingSnapshot)=>{
      //Initialize the total bill to 0
      let totalBill = 0;
      let bookingID;
     
      
      bookingSnapshot.forEach((bookingChildSnapshot)=>{
        const bookingForm = bookingChildSnapshot.val();
        bookingID = bookingChildSnapshot.key;
         
        //check if the total bill field is defined and numeric
        const bookingTotalBill = parseInt(bookingForm.totalBill);
        
        if(isNaN(bookingTotalBill)){
          console.error('Total bill is not numeric')
          return;
        }

          totalBill += bookingTotalBill;
     })

     //listen for changes on the menuservice form
     menuserviceFormRef.orderByChild('roomNo').equalTo(roomNo).once('value', (menuserviceSnapshot)=>{
      menuserviceSnapshot.forEach((menuserviceChildSnapshot)=>{
        const menuserviceForm = menuserviceChildSnapshot.val();

        //Check if the total price is defined and numeric
        const totalPrice = parseInt(menuserviceForm.totalPrice);
        if(isNaN(totalPrice)){
          console.error('Total price is not numeric')
          return;
        }

        totalBill += totalPrice;
      })
      const customerBillRef = firebase.database().ref('customerBill').child(roomNo);
      customerBillRef.set({
        totalBill: totalBill,
        bookingID: bookingID,
      })
      const resultElem = document.getElementById('result');
      resultElem.textContent = `The total bill for room ${roomNo} is $${totalBill}`;

     })


  }
  
)}
  





