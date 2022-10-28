// When a user selects a dish option (don’t worry about “Entire Meal”) 
// and then clicks the “Let’s Cook!” button, the user sees a random dish from 
// the list of possible dishes for that category
// When the dish name appears, the cookpot icon disappears

//will need to create arrays that will contain values for 
//'side', 'main dish', and 'dessert'
// will need to write a function that randomly selects an item from each of the arrays when
// selected.

// Will need to put event listeners on each of the radio buttons that corresponds to the appropriate 
// array
// Will need an event listener on the 'let's cook' button so when it is clicked, it will update
// to display the test from the array

var sides = ['Green Beans', 'Mashed Potatoes', 'French Fries', 'Salad', 'Butternut Squash', 'Mushroom Risotto'];
var main_dishes = ['Portabello Mushroom Burger', 'Green Curry', 'Spaghetti', 'Carbanara', 'Chicken Parmesan', 'Rib-Eye Steak', 'Vegetable Stew'];
var desserts = ['Strawberry Rhubarb Pie', 'Pecan Pie', 'Chocolate Cake', 'Tiramisu', 'Banana Bread', 'Kentucky Butter Cake'];
var selection = '';
var dishSelection = ''
var random_side = ''
var random_main_dish = ''
var random_dessert = ''

var cook_button = document.querySelector(".cook-button");
var radio_buttons = document.querySelectorAll("input");
var foodImage = document.querySelector(".cookpot-image");
var recipe_display = document.querySelector("#recipe-result");

cook_button.addEventListener("click", displayDish);

for (radio_button of radio_buttons) {
    radio_button.onclick = function (event) {
        selection = event.target.value;
        updateSelection();
    }
}

function updateSelection() {
    if (selection === 'SIDE') {
        generateRandomDish(sides)
    } else if (selection === 'MAIN-DISH') {
        generateRandomDish(main_dishes)
    } else if (selection === 'DESSERT') {
        generateRandomDish(desserts)
    } else if (selection === 'ENTIRE-MEAL') 
        generateEntireMeal();
}

function generateRandomDish (array) {
    var randomNum = (Math.floor(Math.random() * array.length));
    dishSelection = (array[randomNum]);
}

function generateEntireMeal () {
    var randomNum1 = (Math.floor(Math.random() * sides.length));
    var randomNum2 = (Math.floor(Math.random() * main_dishes.length))
    var randomNum3 = (Math.floor(Math.random() * desserts.length))
    random_side = (sides[randomNum1])
    random_main_dish = (main_dishes[randomNum2]);
    random_dessert = (desserts[randomNum3]);
}

function displayEntireMeal() {
    foodImage.classList.add("hidden");
    recipe_display.innerHTML = '';
    recipe_display.innerHTML += `
    <h3>You should make:</h3>
        <h2>${random_main_dish} with a side of</h2>
        <h2>${random_side} and</h2>
        <h2>${random_dessert} for dessert!</h2>`
}

function displayDish () {  
    console.log(selection);
    if (selection === '') {
        return;
    } else if (selection === 'ENTIRE-MEAL') {
        foodImage.classList.add("hidden");
        recipe_display.innerHTML = '';
        displayEntireMeal();
    } else if (selection === 'SIDE' || 'MAIN-DISH' || 'DESSERT') {
        foodImage.classList.add("hidden");
        recipe_display.innerHTML = '';
        recipe_display.innerHTML += `
        <h3>You should make:</h3>
          <h2>${dishSelection}!</h2>`
    } 
  }

// function displayDish () {  
//   foodImage.classList.add("hidden");
//   recipe_display.innerHTML = '';
//   if (selection === 'ENTIRE-MEAL') {
//     displayEntireMeal();
//   } else {
//   recipe_display.innerHTML += `
//     <h3>You should make:</h3>
//         <h2>${dishSelection}!</h2>`
//   }
// }

// need to write a conditional statement that checks to see if entire meal is selected, if it's not,
// it will run as normal, but if entire meal IS selected, it will run the functionality I wrote
// on the displayEntireMeal Function.

// console.log(radio_buttons[1].value);

// var side_radio_selector = document.querySelector("#side");
// var main_dish_radio_selector = document.querySelector("#main-dish");
// var dessert_radio_selector = document.querySelector("#dessert");

// radio_buttons.addEventListener('click', function () {
//     for (radio_buttons of radio_buttons) {
//         console.log(event.target.value);
//     }     
// }

// side_radio_selector.addEventListener();
// main_dish_radio_selector.addEventListener();
// dessert_radio_selector.addEventListener();

// function recordInput () {
    
//     }
// }

// radio_buttons.addEventListener('click', selectButton)

//   function selectButton () {
//     for (radio_buttons of radio_buttons) {
//         selection = event.target.value;
//         console.log(event.target.value);
//     }     
// }

// function logSelection() {
//     console.log(selection);
// }
