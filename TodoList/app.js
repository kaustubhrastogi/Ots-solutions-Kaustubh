const addBtn =document.getElementById("addButton");
const itemList=document.getElementById("itemList");
const rmBtn=document.getElementById("removeItem");
addBtn.addEventListener("click",addItem);
let store=[];
function addItem(){
   let task= document.getElementById("todo").value
   if(task){
      const Tag=document.createElement("li")
      let rem=document.createElement("span");
      rem.innerText=' X';
      Tag.innerText=task;
      Tag.appendChild(rem);
      itemList.appendChild(Tag);
      document.getElementById("todo").value=''
      store.push(task)
      localStorage.setItem("task",JSON.stringify(store))
      rem.addEventListener('click',()=>{
         Tag.remove()
      })
   }
}
rmBtn.addEventListener("click",removeItem)
function removeItem(){
   itemList.innerText=''
   // for(let i=0; i<=store.length;){
   //    store[i].onclick= function(){
   //       this.parentNode.remove()
   //    }
   // }
   localStorage.clear()
}
window.onload=()=>{
   let lists= JSON.parse(localStorage.getItem("task"))
   console.log(lists)
   // store=[...lists]
   for(let i=0 ;i<lists.length;i++){
      let ul=document.querySelector('ul')
      let li=document.createElement("li")
      li.innerText=lists[i]
      ul.appendChild(li)
   }
}
