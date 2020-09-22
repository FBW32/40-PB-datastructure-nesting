//Nests

/*
https://www.javascripttutorial.net/javascript-multidimensional-array/
The dimension of an array indicates the number of indices you need to select an element.
For a two-dimensional array you need two indices to select an element
For a three-dimensional array you need three indices to select an element
 */

// 1. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.
const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

let result= [];
for (let i = 0; i <board.length; i++) { 
          result.push(board[i]); 
          console.log(result);
};
//OR
 for (let i of board) {
    console.log(i);
 }
 //OR
 board.forEach(element => {
    console.log(element);
});
// 2. Doggo
// 2.1 Create a doggo object. Add name and breed as properties of the object.
// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// 2.3 Access the second element of the doggo's favorite foods.
// 2.4 Add a method that loops through and print all the doggo's favorite food.
const doggo = {
   name: 'Nero',
   breed: 'German Shepherd',
   favortite_foods: ['cow meet', 'chicken', 'banana', 'dog snacks']
};
console.log(doggo.favortite_foods[1]); //chicken
for(let i = 0; i < doggo.favortite_foods.length; i++) {
let result = doggo.favortite_foods[i];
console.log(result);
}
//OR
for (let i of doggo.favortite_foods) {
   console.log(i);
}

// 3.
// 3.1 Create an object called recipes.
// 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// 3.3 Without changing the previous code, add another ingredient - let's add ginger.
// 3.4 Change the ingredient sugar to brown sugar.
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

const recipes = {
   print() {
      const values = Object.values(this.ingredients);
      return values;
  },
   ingredients: 
   {butter: '2 spoons',
   sugar: '1 cup',
   flour: '2 cups',
   lemon: '1/2 cup',
   egg: '2 unities',
  
}
};
recipes.ingredients['ginger'] = '1/2 spoon';
console.log(recipes.print());
recipes.ingredients.brown_sugar = recipes.ingredients.sugar;
console.log(recipes);
/*
{ print: [Function: print],
  ingredients:
   { butter: '2 spoons',
     sugar: '1 cup',
     flour: '2 cups',
     lemon: '1/2 cup',
     egg: '2 unities',
     ginger: '1/2 spoon',
     brown_sugar: '1 cup' } } */
delete recipes.ingredients['sugar'];
console.log(recipes);
/*
{ print: [Function: print],
  ingredients:
   { butter: '2 spoons',
     flour: '2 cups',
     lemon: '1/2 cup',
     egg: '2 unities',
     ginger: '1/2 spoon',
     brown_sugar: '1 cup' } } */


