// Nests

/* 1. 2D Array
    Given the 2D Array below, loop through the arrays to print the values.
    let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
    ];
*/
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
// using for-loop
for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
}
/*
    [ 1, 2, 3 ]
    [
    'quick', 'brown',
    'fox',   'jumped',
    'over',  'lazy',
    'dog'
    ]
    [ true, false ]
*/

// OR
// using Array.prototype.forEach
board.forEach(function (item, index) {
    console.log(item,"Index => ", index);
});
/*
    [ 1, 2, 3 ] Index =>  0
    [
    'quick', 'brown',
    'fox',   'jumped',
    'over',  'lazy',
    'dog'
    ] Index =>  1
    [ true, false ] Index =>  2
*/

// OR
// using for-of statement
for (let boards of board) {
    console.log(boards);
}
/*
    [ 1, 2, 3 ]
    [
    'quick', 'brown',
    'fox',   'jumped',
    'over',  'lazy',
    'dog'
    ]
    [ true, false ]
*/

/* 2. Doggo
    2.1 Create a doggo object. Add name and breed as properties of the object.
    2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
    2.3 Access the second element of the doggo's favorite foods.
    2.4 Add a method that loops through and print all the doggo's favorite food.
*/
let doggo = {name: "Oscar", 
             breed: "Pomeranian",
             favoritefoods: ["chicken", "grains", "Dairy products"]
};
console.log(doggo.favoritefoods[1]); // grains
for (let food of doggo.favoritefoods) {
    console.log(food);
}
/*
    chicken
    grains
    Dairy products
*/

/* 3.
    3.1 Create an object called recipes.
    3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
    3.3 Without changing the previous code, add another ingredient - let's add ginger.
    3.4 Change the ingredient sugar to brown sugar.
    3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
*/

let recipes = {
    ingredients: {
        butter: "Add butter",
        sugar: "Add two spoons of sugar",
        flour: "Add half cup of flour"
    },
    prints: function() {
        return Object.values(recipes.ingredients);
    }
    
};
recipes.ingredients["ginger"] = "let's add ginger";
console.log(recipes);
/*
    {
    ingredients: {
        butter: 'Add butter',
        sugar: 'Add two spoons of sugar',
        flour: 'Add half cup of flour',
        ginger: "let's add ginger"
    }
    }
*/
// 3.4 Change the ingredient sugar to brown sugar.
recipes.ingredients.brown_sugar = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
console.log(recipes);
/*
    {
    ingredients: {
        butter: 'Add butter',
        flour: 'Add half cup of flour',
        ginger: "let's add ginger",
        brown_sugar: 'Add two spoons of sugar'
    }
    }
*/
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
console.log(recipes.prints());
/*
[
  'Add butter',
  'Add half cup of flour',
  "let's add ginger",
  'Add two spoons of sugar'
]
*/
