/*  STAFF PASSWORD VALIDATOR */

// Variables namees
var myInput = document.getElementById('pass');
var letter = document.getElementById('lowerCa');
var capital = document.getElementById('upperCa');
var number = document.getElementById('number');
var length = document.getElementById('length');

//Return a message
myInput.onfocus = function () {
  document.getElementById('message').style.display = block;
}

//Hide the message box  
myInput.onblur = function () {
  document.getElementById('message').style.display = 'none';
}

myInput.onkeyup = function () {
  //Validation of the lower cases letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //validation of the upper cases letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //validation of the numbers on password
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //validation of the lenght
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

/*
  RANDOM USER GENERATOR
*/

//The id "getRandom" will return the function getRandom()
document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom() { // getRandom function
  fetch('https://randomuser.me/api/?results=5') //API will return 5 results
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      let output = ''
      console.log(data);
      author.forEach(function (user) {
        //return the output format 
        output += `
            <div>
                <div><img src="${user.picture.medium}"></div>
                  <p>Name: ${user.name.first} ${user.name.last}</p>
                  <p>Phone Number: ${user.phone}</p>
            </div>
            `;
      });
      //shows the output format
      document.getElementById('output').innerHTML = output;

    })
}
