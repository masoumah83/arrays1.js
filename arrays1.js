let grocerie = ["egg", "oil", "cheese", "fruiet", "suger", "milk"];
console.log(grocerie[1]);
console.log(grocerie.length);
console.log(grocerie[grocerie.length - 1]);
console.log(grocerie.pop());

grocerie.push("Pasta ", "Rice ");
console.log(grocerie);

let firstThreeItems = grocerie.slice(0, 3);
console.log(firstThreeItems);

// challenge
console.log(grocerie.toSpliced(2, 1));

console.log(grocerie.toSpliced(0, 1, "pinapple"));

console.log(grocerie.toSpliced(0, 1, "ketchaup", "chili"));
