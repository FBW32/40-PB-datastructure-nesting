// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

 let board = [
   [1, 2, 3],
   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
   [true, false]
];

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

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

let doggo = {

    name: "Jody", 
    breed: "Husky",
    food: ["chicken", "eggs", "blue berries"]
};

console.log(doggo.food[1]); // eggs

for (let food of doggo.food) {
    console.log(food);
}

/*
chicken
eggs
blue berries
*/

// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.  

let recipes = {
    ingredients: {
        butter: "250g butter",
        sugar: "10g sugar",
        flour: "0.5kg flour"
    }    
    
};

recipes.ingredients["ginger"] = "let's add ginger";
console.log(recipes);
/*
{
  ingredients: {
    butter: '250g butter',
    sugar: '10g sugar',
    flour: '0.5kg flour',
    ginger: "let's add ginger"
  }
}
*/

// 3.4 Change the ingredient sugar to brown sugar.
recipes.ingredients.brownSugar = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
console.log(recipes);
/*
{
  ingredients: {
    butter: '250g butter',
    flour: '0.5kg flour',
    ginger: "let's add ginger",
    brownSugar: '10g sugar'
  }
}
*/
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

recipes["print"] = function() { console.log(Object.keys(this.ingredients)) }

recipes.print() // [ 'butter', 'flour', 'ginger', 'brownSugar' ]

