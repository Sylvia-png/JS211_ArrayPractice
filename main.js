//Proyect Arrays of Cars
//3# .lenght  - Create an array which 4 different types of cars
// - Console.log
console.log("3: Lenght Excercise")
let cars = ["ford", "honda", "jeep", "nissan"];
console.log("cars array length: " + cars.length);
console.log("")

//4# .concat() - Create an array moreCars
//- Use the concat method to combine the cars and moreCars arrays into another array called totalCars
console.log("4: Concat Excercise")
let moreCars = ["mazda", "renault", "kia", "honda"];
console.log("cars content")
console.log(moreCars);
let totalCars = cars.concat(moreCars);
console.log("cars content after concat")
console.log(totalCars);
console.log("")

console.log("5: indexOf lastIndexOf Excercise")
//5# indexOf() and .lastIndexOf()
console.log(totalCars.indexOf("honda"));
console.log(totalCars.lastIndexOf("ford"));
console.log("")

console.log("6: .join")
//6# .join()
stringOfCars = totalCars.join();
console.log(stringOfCars);
console.log("")

console.log("7: .split")
//7# .split()
totalCars = stringOfCars.split(',');
console.log(totalCars);
console.log("")

console.log("8: .reverse")
//8# .reverse()
carsInReverse = totalCars.reverse();
console.log(carsInReverse);
console.log("")

console.log("9: .sport")
//9# .sort()
carsInReverse = carsInReverse.sort();
console.log(carsInReverse);
console.log(carsInReverse.indexOf('ford'));
console.log("")


console.log("10: .slice")
//10 .slice()
let removedCars2 = carsInReverse.slice(0, 1);
removedCars3 = carsInReverse.slice(carsInReverse.length-1, carsInReverse.length);
removedCars = removedCars2.concat(removedCars3);
console.log(removedCars);
console.log("")

console.log("11: .slice")
//11# .slice()
carsInReverse.splice(1, 2, "ford", "honda");
console.log(carsInReverse);
carsInReverse.splice(1,2);
console.log("")


console.log("12: .puch")
//12# .puch()
carsInReverse.push("ford", "honda");
console.log(carsInReverse);
console.log("")


console.log("13: .pop")
//13# .pop()
carsInReverse.pop();
console.log(carsInReverse);
console.log("")


console.log("14: .shift")
//14# .shift()
carsInReverse.shift();
console.log(carsInReverse.indexOf("ford"));
console.log("")

//15# .unshift()
console.log("15: .unshift")
carsInReverse.unshift("bmw");
console.log(carsInReverse);
console.log("")

console.log("16: .forEach")
//16# .forEach
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach((element)=>{
  console.log(element + 2)
});
console.log("")
