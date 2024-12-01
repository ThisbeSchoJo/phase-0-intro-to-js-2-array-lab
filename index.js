// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function beforeEach() {
  cats.length = 0;
  return cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat(name) {
  return cats.push(name); //append a cat to the end of the cats array
}

function destructivelyPrependCat(name) {
  return cats.unshift(name); //prepend a cat to the beginning of the cats array
}

function destructivelyRemoveLastCat() {
  return cats.pop(); //removes last cat from the cats array
}

function destructivelyRemoveFirstCat() {
  return cats.shift(); //removes first cat from cats array
}

function appendCat(name) {
  const newCats = [...cats, name];
  return newCats; //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats; //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats; //removes last cat in the cats array and returns a new array, leaving the cats array unchanged
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats; //removes first cat in the cats array and returns a new array, leaving the cats array unchanged
}
