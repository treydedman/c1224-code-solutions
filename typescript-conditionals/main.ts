/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// const bruce = {
//   name: 'Bruce Lee',
//   age: 32,
// }

// Functions
// 1.
// isUnderFive(number)
function isUnderFive(number: number): boolean {
  // A boolean indicating whether or not number is less than five
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

// test
console.log('is 32 < 5: ', isUnderFive(32));

// 2.
// isEven(number)
function isEven(number: number): boolean {
  // A boolean indicating whether or not number is evenly divisible by 2
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// test
console.log('is 49 even: ', isEven(49));

// 3.
// startsWithJ(string)
function startsWithJ(string: string): boolean {
  // A boolean indicating whether or not the first character in string is a capital 'J'
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

// test
console.log('does Jump begin with J: ', startsWithJ('Jump'));

// 4.
// isOldEnoughToDrink(person)
function isOldEnoughToDrink(person: number): boolean {
  // A boolean indicating whether or not the person is of legal drinking age
  if (person >= 21) {
    return true;
  } else {
    return false;
  }
}

// test
console.log('is age 20 legal to drink: ', isOldEnoughToDrink(20));

// 5.

interface Person {
  name: string;
  age: number;
}
// isOldEnoughToDrive(person)
function isOldEnoughToDrive(person: Person): boolean {
  // A boolean indicating whether or not the person is of legal driving age
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// variable for person object
const person1 = {
  name: 'Tom Tweener',
  age: 15,
};

// test
console.log(
  'is Tom Tweener old enough to drive: ',
  isOldEnoughToDrive(person1)
);

// 6.
// isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}

const mike = {
  name: 'Mike Henry',
  age: 32,
};

// test
console.log('can Mike drink and drive: ', isOldEnoughToDrinkAndDrive(mike));

// 7.
// categorizeAcidity(pH)
function categorizeAcidity(pH: number): string {
  // A string describing the pH level of a substance in plain English
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base;';
  } else return 'neutral';
}

// test
console.log('pH: ', categorizeAcidity(8));

// 8.
// introduceWarnerBro(name) using switch statement
function introduceWarnerBro(name: string): string {
  // name - a string representing the name of one of the Warner Bros characters.
  // "yakko" and "wakko" both say "We're the warner brothers!", but "dot" says "I'm cute~"
  switch (name) {
    case 'yakko':
      return "We're the Warner brothers!";
    case 'wakko':
      return "We're the Warner brothers!";
    case 'dot':
      return "I'm cute~";
  }
  return 'Goodnight everybody!';
}

// test
console.log('Betty: ', introduceWarnerBro('betty'));

// 9.
// recommendMovie(genre) using switch statement
function recommendMovie(genre: string): string {
  // action
  // comedy
  // horror
  // drama
  // musical
  // sci-fi
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return 'Elf';
    case 'horror':
      return 'Gremlins';
    case 'drama':
      return 'Oppenheimer';
    case 'musical':
      return 'White Christmas';
    case 'sci-fi':
      return 'Quiet Place';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

// test
console.log('action movie: ', recommendMovie('action'));
