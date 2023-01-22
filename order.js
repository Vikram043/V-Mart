let btnp=document.querySelector("form")
btnp.style.color="blue"
btnp.addEventListener("submit",function(e){
    e.preventDefault()
    alert("Order Placed")
  })