let cart=JSON.parse(localStorage.getItem("cart"))||[]
let API="./data/product.json"

let search=document.getElementById("search")

let sbtn=document.getElementById("sbtn")



fetch("./data/product.json")
.then((request)=>request.json())
.then((data)=>{
    console.log(data)
    display(data)
    sbtn.addEventListener("click",function(){
        if(search.value==""){
            display(data)
          }else{
            let filterdata=data.filter((el)=>{
                console.log(el.title.toUpperCase())
                if(el.title.toUpperCase().includes(search.value.toUpperCase())==true || el.category.toUpperCase().includes(search.value.toUpperCase())==true || el.description.toUpperCase().includes(search.value.toUpperCase())==true ){
                  return true
                }else{
                  return false
                }
              })
              display(filterdata)
            }
    })
})
let container=document.getElementById("container")

function display(data){
    container.innerHTML=''
    data.forEach((el,ind) => {
        let box=document.createElement("div")
        box.className="box";

        let img=document.createElement("img")
        img.src=el.image
        let title=document.createElement("h2")
        title.innerText=el.title
        let cat=document.createElement("h3")
        cat.innerText=el.category
        let des=document.createElement("p")
        des.innerText=el.description
        let price=document.createElement("p")
        price.innerText=`₹${el.price}`

        let btn=document.createElement("button")
        btn.className="btn"
        btn.innerText="Add to Cart"

        btn.addEventListener("click",()=>{
            if(checkdub(el)){
                alert("Already in cart")
            }else{
                alert("Added to cart")
                cart.push({...el,quantity:1})
                localStorage.setItem("cart",JSON.stringify(cart))
            } 
        })
      

        box.append(img,title,cat,des,price,btn)
        container.append(box)
    });
}

function checkdub(data){
    for(i=0;i<cart.length;i++){
        if(cart[i].id==data.id){
            return true
        }
    }
    return false
}