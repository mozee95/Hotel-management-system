/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBEp2LKZmc826gycNl9mu1OCuAlIPDoWLc\",\r\n  authDomain: \"hms-system-ea368.firebaseapp.com\",\r\n  databaseURL: \"https://hms-system-ea368-default-rtdb.firebaseio.com\",\r\n  projectId: \"hms-system-ea368\",\r\n  storageBucket: \"hms-system-ea368.appspot.com\",\r\n  messagingSenderId: \"875192990107\",\r\n  appId: \"1:875192990107:web:d860234b76c94fa8bc893e\"\r\n};  \r\n\r\n//initialize firebase\r\nfirebase.initializeApp(firebaseConfig);\r\n\r\nvar bookingFormDB = firebase.database().ref('bookingForm');\r\n\r\ndocument.getElementById('bookingForm').addEventListener('submit', submitForm);\r\n\r\nfunction submitForm(e) {\r\n  e.preventDefault();\r\n  \r\n  var name = getElementVal('name');\r\n  var phoneNo = getElementVal('number');\r\n  var address = getElementVal('address');\r\n  var checkIn = getElementVal('checkIn');\r\n  var checkOut = getElementVal('checkOut');\r\n  var roomType = getElementVal('sel1');\r\n  \r\n  //saveInformation(name, phoneNo, address, checkIn, checkOut, roomType);\r\n  console.log(name, phoneNo, address, checkIn, checkOut, roomType);\r\n}\r\n\r\nconst saveInformation = (name, phoneNo, address, checkIn, checkOut, roomType) =>{\r\n   var newbookingForm = bookingFormDB.push();\r\n   newbookingForm.set({\r\n     name: name,\r\n     phoneNo: phoneNo,\r\n     address: address,\r\n     checkIn: checkIn,\r\n     checkOut: checkOut,\r\n     roomType: roomType,\r\n   });\r\n};\r\n\r\nconst getElementVal = (id) => {\r\n return document.getElementById(id).value;\r\n};\r\n\r\n\r\n\r\n\r\n \r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG1zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCRXAyTEtabWM4MjZneWNObDltdTFPQ3VBbElQRG9XTGNcIixcclxuICBhdXRoRG9tYWluOiBcImhtcy1zeXN0ZW0tZWEzNjguZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9obXMtc3lzdGVtLWVhMzY4LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJobXMtc3lzdGVtLWVhMzY4XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJobXMtc3lzdGVtLWVhMzY4LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODc1MTkyOTkwMTA3XCIsXHJcbiAgYXBwSWQ6IFwiMTo4NzUxOTI5OTAxMDc6d2ViOmQ4NjAyMzRiNzZjOTRmYThiYzg5M2VcIlxyXG59OyAgXHJcblxyXG4vL2luaXRpYWxpemUgZmlyZWJhc2VcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG52YXIgYm9va2luZ0Zvcm1EQiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdib29raW5nRm9ybScpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0Rm9ybSk7XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgdmFyIG5hbWUgPSBnZXRFbGVtZW50VmFsKCduYW1lJyk7XHJcbiAgdmFyIHBob25lTm8gPSBnZXRFbGVtZW50VmFsKCdudW1iZXInKTtcclxuICB2YXIgYWRkcmVzcyA9IGdldEVsZW1lbnRWYWwoJ2FkZHJlc3MnKTtcclxuICB2YXIgY2hlY2tJbiA9IGdldEVsZW1lbnRWYWwoJ2NoZWNrSW4nKTtcclxuICB2YXIgY2hlY2tPdXQgPSBnZXRFbGVtZW50VmFsKCdjaGVja091dCcpO1xyXG4gIHZhciByb29tVHlwZSA9IGdldEVsZW1lbnRWYWwoJ3NlbDEnKTtcclxuICBcclxuICAvL3NhdmVJbmZvcm1hdGlvbihuYW1lLCBwaG9uZU5vLCBhZGRyZXNzLCBjaGVja0luLCBjaGVja091dCwgcm9vbVR5cGUpO1xyXG4gIGNvbnNvbGUubG9nKG5hbWUsIHBob25lTm8sIGFkZHJlc3MsIGNoZWNrSW4sIGNoZWNrT3V0LCByb29tVHlwZSk7XHJcbn1cclxuXHJcbmNvbnN0IHNhdmVJbmZvcm1hdGlvbiA9IChuYW1lLCBwaG9uZU5vLCBhZGRyZXNzLCBjaGVja0luLCBjaGVja091dCwgcm9vbVR5cGUpID0+e1xyXG4gICB2YXIgbmV3Ym9va2luZ0Zvcm0gPSBib29raW5nRm9ybURCLnB1c2goKTtcclxuICAgbmV3Ym9va2luZ0Zvcm0uc2V0KHtcclxuICAgICBuYW1lOiBuYW1lLFxyXG4gICAgIHBob25lTm86IHBob25lTm8sXHJcbiAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICBjaGVja0luOiBjaGVja0luLFxyXG4gICAgIGNoZWNrT3V0OiBjaGVja091dCxcclxuICAgICByb29tVHlwZTogcm9vbVR5cGUsXHJcbiAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RWxlbWVudFZhbCA9IChpZCkgPT4ge1xyXG4gcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;