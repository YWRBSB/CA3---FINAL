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

/*
  MENU
*/

//stores the id="qntx" from the input tag inside a suitable variable
//starters
var garlicBread = document.getElementById("qde1")
var chips = document.getElementById("qde2")
var tomatoBrus = document.getElementById("qde3")
var chickenWings = document.getElementById("qde4")

//pizzas
var mozzarella = document.getElementById("qde5")
var pepperoni = document.getElementById("qde6")
var pineapple = document.getElementById("qde7")
var meatEater = document.getElementById("qde8")

//desserts
var saltedCaramel = document.getElementById("qde9")
var crushedOreo = document.getElementById("qde10")
var chocolate = document.getElementById("qde11")

//drinks
var coke = document.getElementById("qde12")
var dietCoke = document.getElementById("qde13")
var sevenUp = document.getElementById("qde14")
var sevenUpDiet = document.getElementById("qde15")
var sparklingWater = document.getElementById("qde16")
var stillWater = document.getElementById("qde17")



function menuSum() { //creates the function that will be Sum the Menu

  

  //stores the quanity of starters  into a var
  var totalGarlicBread = garlicBread.value * garlicBread.getAttribute("data-price");
  var totalChips = chips.value * chips.getAttribute("data-price");
  var totalTomatoBrus = tomatoBrus.value * tomatoBrus.getAttribute("data-price");
  var totalChickenWings = chickenWings.value * chickenWings.getAttribute("data-price");
  
  //add the total of the starters into a var
  var starterTotal = totalGarlicBread + totalChips + totalTomatoBrus + totalChickenWings;

  //stores the quanity of pizzas  into a var
 
  var totalPepperoni = pepperoni.value * pepperoni.getAttribute("data-price");
  var totalMozzarella = mozzarella.value * mozzarella.getAttribute("data-price");
  var totalPineapple = pineapple.value * pineapple.getAttribute("data-price");
  var totalMeatEater = meatEater.value * meatEater.getAttribute("data-price");

 
  //add the total of the pizzas into a var
  var pizzaTotal = totalPepperoni + totalMeatEater + totalPineapple + totalMozzarella;


//stores the quanity of desserts  into a var
  var totalSaltedCaramel = saltedCaramel.value * saltedCaramel.getAttribute("data-price");
  var totalCrushOreo = crushedOreo.value * crushedOreo.getAttribute("data-price");
  var totalChocolate = chocolate.value * chocolate.getAttribute("data-price");


//add the total of the deserts into a var
  var dessertTotal = totalSaltedCaramel + totalCrushOreo + totalChocolate;

//stores the quanity of drinks into a var
  var totalCoke = coke.value * coke.getAttribute("data-price");
  var totalDietCoke = dietCoke.value * dietCoke.getAttribute("data-price");
  var totalSevenUp = sevenUp.value * sevenUp.getAttribute("data-price");
  var totalSevenUpDiet = sevenUpDiet.value * sevenUpDiet.getAttribute("data-price");
  var totalSparklingWater = sparklingWater.value * sparklingWater.getAttribute("data-price");
  var totalStillWater = stillWater.value * stillWater.getAttribute("data-price");

  //adds the prices of all drinkss and stores the result 
  var drinksTotal = totalCoke + totalDietCoke + totalSevenUp + totalSevenUpDiet + totalSparklingWater + totalStillWater;

  //Veg s equals the sum of all vegetarian dishes available
  var veg = totalGarlicBread + totalChips + totalTomatoBrus + totalMozzarella + totalPineapple;

  //noVeg equals the sum of all non-vegetarian dishes available
  var noVeg = totalChickenWings + totalPepperoni + totalMeatEater;

  //the overall bill equals the sum of all 
  var totalOverallbill = starterTotal + pizzaTotal + dessertTotal + drinksTotal;

  //output - shows the total 
 
  document.getElementById('starterTotal').innerHTML = "€" + starterTotal;
  document.getElementById('pizzaTotal').innerHTML = "€" + pizzaTotal;
  document.getElementById('dessertTotal').innerHTML = "€" + dessertTotal;
  document.getElementById('drinksTotal').innerHTML = "€" + drinksTotal;
  document.getElementById('itemsTotal').innerHTML = "€" + totalOverallbill;
  document.getElementById('vegTotal').innerHTML = "€" + veg;
  document.getElementById('noVegTotal').innerHTML = "€" + noVeg;

}