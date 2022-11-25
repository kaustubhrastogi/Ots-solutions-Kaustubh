function Click(){
   const task= document.getElementById("todo").value
   const Tag=document.createElement("li")
   console.log(document.addEventListener('click',addTask))
   function addTask(){
    console.log("addTask")
   }   
}