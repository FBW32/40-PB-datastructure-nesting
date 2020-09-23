//#### 1. 2D Array
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
  "hey",
];

for (item of board) {
  if (typeof item == Array) {
    for (value of item) {
      console.log(value);
    }
  } else {
    console.log(item);
  }
}

//#### 2. Doggo
let doggo = {
  name: "hunty",
  breed: "Golden Retriever",
  favoriteFoods: ["Chicken", "Turkey meat", "Bacon", "Cheese Balls", "Salmon"],
};
console.log(doggo.favoriteFoods[1]);
doggo.printfoods = function () {
  for (item of doggo.favoriteFoods) {
    console.log(item);
  }
};
doggo.printfoods();

//#### 3.
let recipes = {};
recipes.ingredients = { butter: "1 spoon", sugar: "1 glass", flour: "3 spoon" };

recipes.ingredients.ginger = "1 root";

recipes.printIng = function () {
  for (item in this.ingredients) {
    console.log(item, this.ingredients[item]);
  }
};
console.log(recipes.printIng());
