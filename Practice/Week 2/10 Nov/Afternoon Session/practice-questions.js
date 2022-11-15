const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

/*
    Question 1

    Using reduce,
    Get this Output -> ["Salman Khan", "Riya Rajput"]

    Hint -> Initial Value of Accumulator -> []
    
*/

const output1 = users.reduce((acc, curr) => {
  if (curr.age > 27) {
    acc.push(curr.firstName + " " + curr.lastName);
  }
  return acc;
}, []);

console.log("output1",output1);

/*
    Question 2

    Output -> 

    [ 
        {fullName: "Akshay Khurana", age: 27},
        {fullName: "Salman Khan", age: 55}
    ]

*/

const output2 = users
  .filter((curr) => {
    if (curr.gender == "male") {
      return true;
    }
  })
  .map((curr) => {
    return { fullName: curr.firstName + " " + curr.lastName, age: curr.age };
  });

console.log(output2);
/*
[
    "Names - Akshay Khurana, Salman Khan, Riya Rajput, Simran Kapoor",
    "Sum of there age - SUM"
]
*/
const output3 = users.reduce((acc,curr)=>{
  acc.push(curr.firstName+" "+curr.lastName)
  return acc;
},[])
 const output4 = users.reduce((acc,curr)=>{
  acc+=curr.age
  return acc;
 },0)
 console.log(`["Names-${output3.toString()}", "Sum of their age's- ${output4}"]`);