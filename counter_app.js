let incre=document.getElementById("increment")
let numbers=document.getElementById("display")
let saveBtn=document.getElementById("save")
let savehere=document.getElementById("savePoint")
let deleteBtn=document.getElementById("delete")
let count=0;
incre.addEventListener("click",function(){
    count +=1
    numbers.innerHTML =count
})

saveBtn.addEventListener("click",function(){
    savehere.innerText +=count+" , "
})

deleteBtn.addEventListener("click",function(){
    numbers.innerHTML=0
     ``
})