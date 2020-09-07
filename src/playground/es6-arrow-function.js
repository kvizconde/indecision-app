// const user = {
//   name: 'Kevin',
//   cities: [
//     'Vancouver',
//     'Surrey',
//     'Langley'
//   ],
//   printPlacesLived() {
//     return this.cities.map(city => {
//       return `${this.name} has lived in ${city}`;
//     });
//   },
// };

// console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  // numbers - array of numbers
  numbers: [
    2,
    5,
    6,
    9
  ],
  // multiplyBy - single number
  multiplyBy: 3,

  // multipy - return a new array where the number have been multiplied
  multiply() {
    return this.numbers.map(x => {
      return x * this.multiplyBy;
    });
  },
};

console.log(multiplier.multiply());
