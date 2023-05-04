// Ex 1

// const arr = ["     injustice", "     SuperMan", "Batman ", " flash "];
// const newArr = arr.map(arr => arr.trim());
//   console.log(newArr)

// Ex 2

// const miles = [10, 20, 30, 40];
// const Km = miles.map(miles => miles *1.6)
// console.log(Km)

// EX 3

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((square) => square * square)
// console.log(newArr)

// EX 4

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((plusFour) => plusFour + 4)
// console.log(newArr)

// EX 5
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.filter(even => even % 2 == 0).map((duble) => duble **2).reduce((num1, num2) => num1 + num2)
// console.log(newArr)

// Ex 6

// var words = ["apple", "banana", "cherry", "date"];
// var newWords = words.map((words) => words.toUpperCase())
// console.log(newWords)

// Ex 7
// const heroes = [
//     {name: 'Iron Man', power: 'Tech'},
//     {name: 'Spider-Man', power: 'Spider abilities'},
//     {name: 'Thor', power: 'Godly powers'},
//     {name: 'Hulk', power: 'Super strength'}
//   ];
  
//   const newHeroes = heroes.map((hero, index) => {
//     const newHero = {
//       hero: hero.name,
//       id: index,
//       power: hero.power
//     };
//     return newHero;
//   });
  
//   console.log(newHeroes);

// Ex 8

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const newInputWords = inputWords.filter((moreSixChar) => moreSixChar.length > 6)
// console.log(newInputWords)

// EX 9
// EX 9.1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = numbers.filter((numMap)=> numMap%2 !== 0)
// console.log(newNumber)
// EX 9.2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = numbers.filter((numMap)=> numMap%2 == 0 || numMap%5 == 0)
// console.log(newNumber)
// EX 9.3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = numbers.filter((numMap)=> numMap%3 == 0).map((numMap)=> numMap**2)
// console.log(newNumber)

// EX 9.4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = numbers.filter((numFilter)=> numFilter%5 == 0).map((numMap)=> numMap**2).reduce( (numMap, numMap2) => numMap + numMap2)
// console.log(newNumber)

// EX 10

// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// let squaredEvenNums = nums.filter(num => num % 2 === 0)
//                           .map(num => num ** 2);

// console.log(`squaredEvenNums: ${squaredEvenNums}`);

// let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(`Sum of array elements: ${sum}`);

// EX 11

// let countries = ['United States', 'Mexico', 'Canada', 'Russia', 'China', 'India', 'Brazil'];

// let filteredCountries = countries.filter(country => !country.startsWith('U') && !country.startsWith('R'));

// let upperCaseCountries = filteredCountries.map(country => country.toUpperCase());

// let totalCharacters = upperCaseCountries.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);

// console.log(`totalCharacters: ${totalCharacters}`);

// EX 12

// const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
// const newNumber = numbers.filter(num => num > 50)
// console.log(newNumber)


