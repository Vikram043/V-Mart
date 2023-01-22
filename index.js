
let search=document.getElementById("search")

let sbtn=document.getElementById("sbtn")

sbtn.addEventListener("click",function(){
    if(search.value==""){
        alert("What you want!")
      }else{
      location.href="./product.html"
        }
})

let touch=document.querySelector("#touch")
let touch1=document.querySelector("#touch1")
let touch2=document.querySelector("#touch2")
let touch3=document.querySelector("#touch3")
let touch4=document.querySelector("#touch4")
let touch5=document.querySelector("#touch5")

let drop=document.getElementById("dropdown")
let none=document.getElementById("none")
let sum=0
touch.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})
touch1.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})
touch2.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})
touch3.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})
touch4.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})
touch5.addEventListener("mouseover",function(){
  if(sum%2==0){
    drop.style.display="flex";
    none.style.display="none";
  }
  else{
    drop.style.display="none"
    none.style.display="flex";
  }
 sum++
})




