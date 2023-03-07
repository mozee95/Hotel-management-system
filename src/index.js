// import { startOfDay, endOfDay, parse } from 'date-fns';

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
  const bookingTime = new Date().toLocaleString();
  saveInformation(name, phoneNo, address, checkIn, checkOut, roomType, roomNo, roomPrice, bookingTime);
  
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

  const orderTime = new Date().toLocaleString(); 

  saveMenu(roomNo, food, foodPrice, drink, drinkPrice,orderTime);
  
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
  const orderTime = new Date().toLocaleString();
  var newmenuserviceForm = menuserviceDB.push();
  newmenuserviceForm.set({
      roomNo: roomNo,
      food: food,
      foodPrice: foodPrice,
      drink: drink,
      drinkPrice: drinkPrice,
      orderTime: orderTime
  });
};

const saveInformation = (name, phoneNo, address, checkIn, checkOut, roomType, roomNo, roomPrice) =>{
  const bookingTime = new Date().toLocaleString();
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
     bookingTime:bookingTime,
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

    //Get the current date and time
    const timestamp = new Date().toLocaleString();

    

    if(!roomNo){
      alert('Please enter a room number');
      return;
    }

      //Reference to the bookingForm mode
      const bookingFormRef = firebase.database().ref('bookingForm');
      //reference to the menuservice Form
      const menuserviceFormRef = firebase.database().ref('menuserviceForm');

      //Initialize the data array
      const data = [];
      
       //Find the corresponding booking form based on the roomno field
     bookingFormRef.orderByChild('roomNo').equalTo(roomNo).once('value',(bookingSnapshot)=>{
      //Initialize the total bill to 0
      let totalBill = 0;
      let bookingID;
     
      
      bookingSnapshot.forEach((bookingChildSnapshot)=>{
        const bookingForm = bookingChildSnapshot.val();
        bookingID = bookingChildSnapshot.key;
        const roomType = bookingForm.roomType;
        const roomPrice = bookingForm.roomPrice;
        const checkIn = new Date (bookingForm.checkIn);
        const checkOut =  new Date (bookingForm.checkOut);
        
      const timeDiff = checkOut.getTime()- checkIn.getTime();
      const numDays = Math.ceil(timeDiff/(1000*3600*24));

        data.push({roomType:roomType, roomPrice:roomPrice, numDays:numDays})
                 
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
        const food = menuserviceForm.food;
        const foodPrice = menuserviceForm.foodPrice;
        const drink = menuserviceForm.drink;
        const drinkPrice = menuserviceForm.drinkPrice;
        data.push({food:food, foodPrice:foodPrice, drink:drink, drinkPrice:drinkPrice})

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
        roomType: data[0].roomType,
        roomPrice: data[0].roomPrice,
        numDays: data[0].numDays,
        products: data.slice(2),
        totalBill: totalBill,
        bookingID: bookingID,
      })
      const resultElem = document.getElementById('result');
      resultElem.innerHTML = `<h2>Hotel Ristalem </h2>`
      resultElem.innerHTML += `<h3>Invoice for Room ${roomNo}</h3>`;
      resultElem.innerHTML +=  `<p>Date and Time: ${timestamp} </p>`
      resultElem.innerHTML += `<p>Room Type: ${data[0].roomType}</p>`;
      resultElem.innerHTML += `<p>Room Price: ${data[0].roomPrice}</p>`;
      resultElem.innerHTML += `<p>Days Occupied: ${data[0].numDays}</p>`;
      resultElem.innerHTML += '<ul>';
      for(let i=1; i<data.length; i++) {
        const food = data[i].food;
        const foodPrice = data[i].foodPrice;
        const drink = data[i].drink;
        const drinkPrice = data[i].drinkPrice;
        resultElem.innerHTML += `<li>Food: ${food}<br> Food Price: ${foodPrice}<br> Drink: ${drink}<br> Drink Price: ${drinkPrice} </li> `;
      }
      resultElem.innerHTML += '</ul>';
      resultElem.innerHTML += `<p>Total Bill: ${totalBill}</p>`;

     })


  }
  
)}

function generateDailySalesReport(date) {
  
   const dbRef = firebase.database().ref();
   const roomSalesRef = dbRef.child("bookingForm");
   const restaurantSalesRef = dbRef.child("menuserviceForm");
   
   const selectedDate = date;
   const startDate = startOfDay(parse(selectedDate, "yyyy-MM-dd", new Date()));
   const startTimeStamp = startDate.getTime();
 
   const endDate = endOfDay(parse(selectedDate, "yyyy-MM-dd", new Date()));
   const endTimeStamp = endDate.getTime();
   //Pass the selected date string and format it
 
 
   let totalRoomSales = 0;
   let totalRestaurantSales = 0;
  
    console.log(startTimeStamp);
   //Retrieve room sales data for the given day
   roomSalesRef.orderByChild("bookingTime").startAt(startTimeStamp).endAt(endTimeStamp)
    .once("value", function(snapshot){
      snapshot.forEach(function(childsnapshot){
        const roomSale = childsnapshot.val();
        const roomPrice = parseInt(roomSale.roomPrice);
        const totalBill = parseInt(roomSale.totalBill);

        if(isNan(roomPrice)|| isNaN(totalBill)){
          console.error(`Invalid room sale data for booking ID ${childSnapshot.key}`);
          return;
        }
        totalRoomSales += roomPrice;

      })

      //Retrieve restaurant sales data for the given day
      restaurantSalesRef.orderByChild("orderTime").startAt(startTimeStamp).endAt(endTimeStamp)
      .once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
          const restaurantSale = childSnapshot.val();
          const totalPrice = parseInt(restaurantSale.totalPrice);
          if (isNaN(totalPrice)) {
            console.error(`Invalid restaurant sale data for order ID ${childSnapshot.key}`);
            return;
          }
          totalRestaurantSales += totalPrice;
        })

        //Generate the HTML report
        const reportElem = document.getElementById("report");
        reportElem.innerHTML = `<h2>Daily Sales Report </h2>`;
        reportElem.innerHTML += `<p>Date: ${selectedDate} </p>`;
        reportElem.innerHTML += `<p>Room Sales: ${totalRoomSales} TZS</p>`;
        reportElem.innerHTML += `<p>Restaurant Sales: ${totalRestaurantSales} TZS</p>`;
        reportElem.innerHTML += `<p>Total Sales: ${totalRoomSales + totalRestaurantSales} TZS</p>`;
      })
    })

  }


  





