// # Nests

console.log("")
console.log("QUESTION 1. 2D Array")
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript // ```
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
function loopFunction(object1) {
    for (i = 0; i < object1.length; i++) {
        for (j = 0; j < object1[i].length; j++) {
            console.log(object1[i][j])
        }
    }
}
loopFunction(board);




console.log()
console.log("QUESTION 2. Doggo")

// * 2.1 Create a doggo object. Add name and breed as properties of the object.


let doggo = {
    name: "Skye",
    breed: "Golden Retriever"
};

// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
doggo["favouriteFoods"] = ["Chicken", "Chew Treats", "Big Dog Bone"];
console.log(doggo)
console.log()

// * 2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.favouriteFoods[1])
console.log()

// * 2.4 Add a method that loops through and print all the doggo's favorite food.
doggo["printFood"] = function () {
    for (i = 0; i < this.favouriteFoods.length; i++) {
        console.log(this.favouriteFoods[i])
    }
}
console.log(doggo)
console.log()
doggo.printFood();




console.log()
console.log("QUESTION 3. Recipes")

console.log("3.1")
// * 3.1 Create an object called recipes.

let recipes = {};

console.log()
console.log("3.2")
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 

recipes["ingrediants"] = { butter: "1 stick", sugar: "1 Cup", flour: "1 Cups", other: "etc" };
console.log(recipes);

console.log()
console.log("3.3")
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// recipes["ingrediants"] = Object.assign({ ginger: "1/2 tsp" });

recipes.ingrediants["ginger"] = "1/2 tsp";
console.log(recipes);

console.log()
console.log("3.4")
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 

recipes.ingrediants["brownSugar"] = recipes.ingrediants.sugar;
delete recipes.ingrediants.sugar;
console.log(recipes);

console.log()
console.log("3.5")
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

recipes["printIngrediants"] = function () { console.log(Object.keys(this.ingrediants)) }
console.log(recipes);
recipes.printIngrediants()