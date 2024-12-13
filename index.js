//Number 1//
function calculateDifference(A1, A2) {
    return A1 - A2;}
let resultofDifference = calculateDifference(25, 22);
//console.log(resultofDifference);//

//Number 2//
function isOdd(number) {
    return number % 2 !== 0;
  }
  //console.log(isOdd(7));  // the answer will be true
  //console.log(isOdd(50));  // the answer will be false

  //Number 3//
  function findMin(numbers) {
    return Math.min(...numbers);
  }
  //console.log(findMin([49,51,45,72,100])); // The answer will be 45

  //Number 4//
  function filterEvenNumbers(numb) {
    return numb.filter(num => num % 2 === 0);
  }
 // console.log(filterEvenNumbers([42,51,22,13,16,6])); //The answer will be[42,22,16,6]

 //Number 5//
 function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
  }
  //console.log(sortArrayDescending([1, 3, 5, 2, 4]));  // The answer will be [5, 4, 3, 2, 1]

   //Number 6//
   function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  //console.log(lowercaseFirstLetter("Rifat"));  // The answer will be "rifat"

  //Number 7//
  function findAverage(numbers) {
    if (numbers.length === 0) return 0;  // Return 0 if the array is empty
    const sum = numbers.reduce((acc, num) => acc + num, 0);  // Sum all elements
    return sum / numbers.length;  // Calculate the average
  }
  //console.log(findAverage([10, 20, 30]));     // The answer will be 20

    //Number 8//
    function isLeapYear(year) { 
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
      }
      //console.log(isLeapYear(2023));  // The answer will be false
      //console.log(isLeapYear(2024));  // The answer will be true