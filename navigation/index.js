// Primitive navigation using js.

function back() {
  window.location.href = "../calculator-page/index.html";
}
function missing_pages() {
  window.location.href = "../missing-page/index.html";
}
function parametrs() {
  window.location.href = "../parametrs-page/index.html";
}

function missing_page_back() {
  window.location.href = "../calculator-page/index.html";
}
function change_page() {
  window.location.href = "../calculator-page/index.html";
}
// backlighting of buttons on the calculator
clicked = true;
$(document).ready(function () {
  $(".with-color").click(function () {
    if ($(this).hasClass("noclick")) {
      $(this).addClass("lit-underline");
    }
  });
});

var arr = [];

// Here I collect customer decisions in the form and write them to the array
// Everything appears in the console
// there is a problem with the button I have to hold the event after clicking the next button
// I did not manage to pass the board to the next page using localStorage
function call_this1() {
  console.log("i m clicked");
  let buttonValue = "Front Engine chassis";
  arr.push(buttonValue);
  console.log(arr);
}
function call_this2() {
  console.log("i m clicked");
  let buttonValue = "Rear Engine chassis";
  arr.push(buttonValue);
  console.log(arr);
}
function call_this3() {
  console.log("i m clicked");
  let buttonValue = "OF 917 4250 MT";
  arr.push(buttonValue);
  console.log(arr);
}
function call_this4() {
  console.log("i m clicked");
  let buttonValue = "OF 917 5300 MT";
  arr.push(buttonValue);
  console.log(arr);
}
function call_this5() {
  console.log("i m clicked");
  let buttonValue = "OF 1623";
  arr.push(buttonValue);
  console.log(arr);
}
$(document).ready(function () {
  // contance needed to complete the fields
  const series = "IDR ";
  var autotext = "Automatically completed based on previous selections";
  // field initialization
  const initializeField = (id1, id2, valueSetter) => {
    document.getElementById(id1).value = valueSetter(series);
    document.getElementById(id1).className += " disabled";
    document.getElementById(id2).innerHTML = autotext;
    document.getElementById(id2).className = "success";
  };

  initializeField(
    "inputrequire1",
    "GFG_DOWN1",
    (series) => series + parseFloat(Math.random() * 205030000).toFixed(2)
  );
  initializeField("inputrequire2", "GFG_DOWN2", (_) =>
    Math.floor(Math.random() * 1000)
  );

  document.getElementById("inputrequire3").value = Math.floor(
    Math.random() * 100
  );
  // This input will be filled permanently. They cannot be changed or clicked. Conclusions based on sentence
  document.getElementById("inputrequire3").className += " disabled";
  document.getElementById("GFG_DOWN3").innerHTML = autotext;
  document.getElementById("GFG_DOWN3").className = "success";

  document.getElementById("inputrequire4").value =
    series + parseFloat(Math.random() * 10000).toFixed(2);
  document.getElementById("inputrequire4").className += " disabled";
  document.getElementById("GFG_DOWN4").innerHTML = autotext;
  document.getElementById("GFG_DOWN4").className = "success";

  document.getElementById("inputrequire5").value =
    series + parseFloat(Math.random() * 10000000).toFixed(2);
  document.getElementById("inputrequire5").className += " disabled";
  document.getElementById("GFG_DOWN5").innerHTML = autotext;
  document.getElementById("GFG_DOWN5").className = "success";

  document.getElementById("inputrequire6").value =
    series + parseFloat(Math.random() * 40000000).toFixed(2);
  document.getElementById("inputrequire6").className += " disabled";
  document.getElementById("GFG_DOWN6").innerHTML = autotext;
  document.getElementById("GFG_DOWN6").className = "success";

  ["numb1", "numb2", "numb3", "numb4", "numb5", "numb6"].forEach((id) => {
    document.getElementById(id).className = "form-control";
  });
});

function myFunction() {
  // Get the value of the input field with id="numb"
  var mileage2 = document.getElementById("numb2").value;
  var vehicle = document.getElementById("numb3").value;
  var intrest = document.getElementById("numb4").value;
  var registration = document.getElementById("numb5").value;
  var name = document.getElementById("numb6").value;
  // float parsing
  mileage2 = parseFloat(mileage2);
  vehicle = parseFloat(vehicle);
  intrest = parseFloat(intrest);
  // auxiliary functions that change the input color
  const setInvalid = (id1, id2, message) => {
    document.getElementById(id1).innerHTML = message;
    document.getElementById(id1).className = "error";
    document.getElementById(id2).className = "form-control is-invalid";
  };
  const setValid = (id1, id2, message) => {
    document.getElementById(id1).innerHTML = message;
    document.getElementById(id1).className = "success";
    document.getElementById(id2).className = "form-control is-valid";
  };
  // Validation for 1 input
  // auxiliary variables will change as the next conditions are checked
  var idMessage = "demo1";
  var idField = "numb1";
  var mileage = document.getElementById(idField).value;
  mileage = parseFloat(mileage);

  if (isNaN(mileage)) {
    setInvalid(idMessage, idField, "Field must be a number");
  } else if (isNaN(mileage) || mileage === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (mileage < 1) {
    setInvalid(idMessage, idField, "Field can't be less than 1");
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // Validation for 2 input
  var idMessage = "demo2";
  var idField = "numb2";
  var mileage = document.getElementById(idField).value;
  mileage2 = parseFloat(mileage2);
  if (isNaN(mileage2) || mileage2 === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (mileage2 < 500) {
    setInvalid(idMessage, idField, "Field can't be less than 500");
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // Validation for 3 input
  var idMessage = "demo3";
  var idField = "numb3";
  var mileage = document.getElementById(idField).value;
  vehicle = parseFloat(vehicle);
  if (isNaN(vehicle) || vehicle === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (vehicle < 1) {
    setInvalid(idMessage, idField, "Field can't be less than 1");
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // Validation for 4 input
  var idMessage = "demo4";
  var idField = "numb4";
  var mileage = document.getElementById(idField).value;
  intrest = parseFloat(intrest);
  if (isNaN(intrest) || mileage2 === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (intrest < 2) {
    setInvalid(idMessage, idField, "Field can't be less than 1");
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // Validation for 5 input
  const reg = /[A-Z]{3}\s?[0-9]{10}/;

  var idMessage = "demo5";
  var idField = "numb5";
  var mileage = document.getElementById(idField).value;
  const machesPatern = reg.test(registration);
  if (registration === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (!machesPatern) {
    setInvalid(
      idMessage,
      idField,
      "Field must contain three uppercase leters and 10 digits"
    );
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // Validation for 6 input
  //In this place sometimes it will pass and sometimes it will not
  //probably something is wrong with regex
  const reg2 = /^(([A-ZŁŻ][a-ząęóżźćńłś]{2,})(-[A-ZŁŻ][a-ząęóżźćńłś]{2,})?)|([a-z]{3} [A-Z][a-z]{2,})$/u;
  var idMessage = "demo6";
  var idField = "numb6";

  const machesPatern2 = reg2.test(name);
  if (name === "") {
    setInvalid(
      idMessage,
      idField,
      "Field must be a number and can not be null"
    );
  } else if (!machesPatern2) {
    setInvalid(
      idMessage,
      idField,
      "Field must contain three uppercase leters and 10 digits"
    );
  } else {
    setValid(idMessage, idField, "Field successfully edited");
  }
  // It's hard to write regex yourself for name and surname but I tried my best. I used to help the online compiler to validate regex.
  var methode = Math.floor((mileage + intrest) / 5);
  // auxiliary variables
  var x = methode;
  var y = methode;
  var a = methode;
  var b = methode;

  var zł = "zł";
  var tabCorect = [x, y, a, b];
  // function filling the fields on the sides
  //   under the logo
  // and under input from name
  const setPrice = (inputValue, inputValue2, inputValue3, inputValue4) => {
    if (inputValue === "" || inputValue == null || isNaN(inputValue)) {
      let notCorect = "---";
      document.getElementById("value1").innerHTML = notCorect;
    } else {
      document.getElementById("value1").innerHTML = tabCorect[0] + zł;
    }
    if (inputValue2 === "" || inputValue2 == null || isNaN(inputValue2)) {
      let notCorect = "---";
      document.getElementById("value2").innerHTML = notCorect;
    } else {
      document.getElementById("value2").innerHTML = tabCorect[1] + zł;
    }
    if (inputValue3 === "" || inputValue3 == null || isNaN(inputValue3)) {
      let notCorect = "---";
      document.getElementById("value3").innerHTML = notCorect;
    } else {
      document.getElementById("value3").innerHTML = tabCorect[2] + zł;
    }
    if (inputValue4 === "" || inputValue4 == null || isNaN(inputValue4)) {
      let notCorect = "---";
      document.getElementById("value4").innerHTML = notCorect;
    } else {
      document.getElementById("value4").innerHTML = tabCorect[3] + zł;
    }
  };
  setPrice(x, y, a, b);
}
