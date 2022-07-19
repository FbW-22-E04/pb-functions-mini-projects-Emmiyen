// The Fortune Teller
function tellFortune(x, y, z, n) {
  console.log(
    "you will be a",
    x,
    "in",
    y + ",",
    "and marryied to",
    z,
    "with",
    n,
    "kids"
  );
}
tellFortune("web dev", "Hamburg", "Tobi", "one");
tellFortune("Manager of a car wash chain", "london", "your job", "17");
tellFortune("Taxi Driver", "the jungle, the mighty jungle", "a lion", "4");

// The Puppy Age Calculator
function calculateDogAge(puppyAge, ConversionRate = 7) {
  // console.log('your Doggy is', puppyAge * 7,'years old in dog years!');

  console.log(
    "your Human is",
    puppyAge * ConversionRate,
    "years old in dog years!"
  );
}
calculateDogAge(1, 7);
calculateDogAge(7, 7);
calculateDogAge(15);

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let amountConsumed = (maxAge - age) * (amountPerDay * 365);
  console.log(Math.round(amountConsumed));
}
calculateSupply(25, 3);
calculateSupply(42, 3);
calculateSupply(84, 3);
calculateSupply(25, 2.5);

// The Geometrizer WTF???
function calcCircumfrence(radius) {
  console.log("The circumfence is", 2 * Math.PI * radius);
}

calcCircumfrence(3);

function calcArea(radius) {
  console.log("the area is", Math.PI * radius ** 2);
}
calcArea(3);

console.log("--------");
// The Temperature Converter

// const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

// const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// celsiusToFahrenheit(15);    // 59
// fahrenheitToCelsius(59);    // 15

// function celsiusToFahrenheit() {
//   let celsius = 0;
//   let fahrenheit = (celsius / 5) * 9 + 32;
//   console.log(celsius + "°C is", fahrenheit, + "°F ");
// }


function celsiusToFahrenheit() {
    let celsius = 0;
    let fahrenheit = (celsius / 5) * 9 + 32;
    console.log(celsius + "°C is", fahrenheit + "°F");
    }
    celsiusToFahrenheit();
    
    function fahrenheitToCelsius(temperature) {
    let fahrenheit = temperature;
    let celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(fahrenheit + "°F is", celsius + "°C");
    }
    fahrenheitToCelsius(32); 