function memoizeFunction(func) {
  let cache = {};
  return function (a, b) {
      const x = a.toString() + b.toString(); 
      if (!cache[a,b]) {
          cache[x] = func(a, b);
      }
      return cache[x];
  }
}
function mul(num1, num2) {
  return num1 * num2;
}


let func = memoizeFunction(mul);
console.log(func(2, 3));
console.log(func(2, 3));
console.log(func(2, 3));


//constructor function and make a object using this 

function Person (name, age, gender) {
   this.name = name,
   this.age = age,
   this.gender = gender,

   this.greet = function () {
       return ('Hi' + ' ' + this.name);
   }
}

const person1 = new Person('akshay', 23, 'male');
const person2 = new Person('amit', 23, 'male');

console.log(person1.name); 
console.log(person2.name); 


// evening session


function getcountryData (c){
  const getcountryData = fetch(`https://restcountries.com/v2/name/${c}`)
  .then(data=>data.json())
  .then(result=>console.log(result[0].borders));


}
getcountryData("china");

const fetchedData = (c) =>{
  const fetchedData =fetch(`https://restcountries.com/v2/name/${c}`)
  .then(data => data.json())
  .then(result => console.log(result))

}
fetchedData("america")

const dataofcountry = (c) => {
  const fetchedData = fetch(`https://restcountries.com/v2/name/${c}`)
 .then(result =>{
  if(!result.ok){
      throw new Error('something went wrong');
  }
  return result.json();
 })
 .then(result =>console.log(result[1].borders));
}

dataofcountry("india")