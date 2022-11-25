let Red =  0
let Green = 0
let Blue = 0

// console.log(document.getElementById("red"))


function change(e){
    if(e.target.name=="red"){
        Red=e.target.value
        
    }
   else if(e.target.name=="green"){
Green=e.target.value
        console.log(e.target.value)
        console.log(e.target.name)
    }
   else if(e.target.name=="blue"){
    Blue=e.target.value    
    console.log(e.target.value)
        console.log(e.target.name)
    }
    document.querySelector('body').style.backgroundColor=`rgb(${Red},${Blue},${Green})`
}