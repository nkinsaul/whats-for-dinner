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

var sides = ['Green Beans', 'Mashed Potatoes', 'French Fries', 'Salad'];
var main_dishes = ['Portabello Mushroom Burger', 'Green Curry', 'Spaghetti', 'Carbanara'];
var desserts = ['Strawberry Rhubarb Pie', 'Pecan Pie', 'Chocolate Cake', 'Tiramisu'];
var selection = '';
var dishSelection = ''

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
    }
}

function generateRandomDish (array) {
    var randomNum = (Math.floor(Math.random() * array.length));
    dishSelection = (array[randomNum]);
}

function displayDish () {  
  foodImage.classList.add("hidden");
  recipe_display.innerHTML +=`<h2 class="dish">You should make ${dishSelection}</h2>`
}



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
