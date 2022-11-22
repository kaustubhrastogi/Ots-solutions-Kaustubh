// task 1
// call once function
// desc: create a function which can't be called more than once
// function sum (){
// }
// sum()
// sum() // new throw()
//task 2
// const arr = [[1,2], [2, 4, [5, 6, [2, 4]]], 8, 9]
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]
// task 3
// a = [{name:'amit'}, {name: 'Akshay'}]
// b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]


function onceCallFn(){
    onceCallFn  = function newFn (){
        console.log("inner function")
    }
    console.log("outer function - call only once")
}
onceCallFn()
onceCallFn()
onceCallFn()
onceCallFn()

let arr = [[1,2], [2, 4, [5, 6, [2, 4]]], 8, 9]
let newArr= arr.reduce((acc,curr)=>{
    return acc.concat(curr)
},[])
let NewArr = newArr.reduce((accu,curr)=>{
    return accu.concat(curr)
},[])
let FinalArr = NewArr.reduce((accu,curr)=>{
    return accu.concat(curr)
},[])
console.log(FinalArr)