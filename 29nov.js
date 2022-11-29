let listItem=document.querySelector("ul");
listItem.addEventListener('click',(e)=>{
    e.target.style.background=="red"?
        e.target.style.background="white" : e.target.style.background="red"
})