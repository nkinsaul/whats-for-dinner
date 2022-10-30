
var sides = [
'Green Beans', 
'Mashed Potatoes', 
'French Fries', 
'Salad', 
'Butternut Squash', 
'Mushroom Risotto', 
'Miso Glazed Carrots', 
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caesar Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
];
var main_dishes = [
'Portabello Mushroom Burger', 
'Green Curry', 
'Spaghetti and Meatballs', 
'Carbanara', 
'Chicken Parmesan', 
'Rib-Eye Steak', 
'Vegetable Stew',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margherita Pizza'
];
var desserts = [
'Strawberry Rhubarb Pie', 
'Pecan Pie', 
'Chocolate Cake', 
'Tiramisu', 
'Banana Bread',
'Kentucky Butter Cake',
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'
];
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
  foodImage.classList.add("hidden");
  recipe_display.innerHTML = '';
  if (selection === 'ENTIRE-MEAL') {
    updateSelection();
    displayEntireMeal();
  } else {
    updateSelection();
    recipe_display.innerHTML += `
        <h3>You should make:</h3>
            <h2>${dishSelection}!</h2>`
  }
}