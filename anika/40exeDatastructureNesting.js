// ************EXERCISE 40 DATA STRUCTURE NESTING **********************

// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```

function q1Print(q1Arr) {
  q1Arr.map((q1Item) => console.log(q1Item));
}

q1Print([
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
]);
// [ 1, 2, 3 ]
// [
//   'quick', 'brown',
//   'fox',   'jumped',
//   'over',  'lazy',
//   'dog'
// ]
// [ true, false ]

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

let doggo = {
  name: "jenny",
  breed: "spaniel",
  favFoods: ["mushrooms", "smarties", "meat", "broccoli"],
};

console.log(doggo.favFoods[1]); // smarties

function q2Dog() {
  doggo.favFoods.map((q2Item) => console.log(q2Item));
}

q2Dog();
// mushrooms
// smarties
// meat
// broccoli

// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

let recip = {
  ingred: {
    butter: "10g",
    sugar: "10g",
    flour: "10g",
  },
  printIn: function () {
    return Object.values(recip.ingred);
  },
};

recip.ingred.brown_sugar = recip.ingred.sugar;
delete recip.ingred.sugar;

[recip.ingred.ginger] = ["10g"];

console.log(recip);
// {
//     ingred: { butter: '10g', sugar: '10g', flour: '10g', ginger: '10g' }
//   }

console.log(recip.printIn()); // 10g 10g 10g 10g
