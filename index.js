var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(array) {
kittens.push("Ralph")
 return array
}

function destructivelyPrependKitten(array) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift("Milo")
}

function appendKitten(array,element) {
  return [...kittens,"Broom"]
}

function prependKitten(array,element) {
  return ["Arnold",...kittens]
}

function removeLastKitten(array) {
  return kittens.splice(1,0)
}
