let API="./data/product.json"

fetch(API)
.then((request)=>request.json())
.then((data)=>{
    console.log(data)
    display(data)
})
let container=document.getElementById("container")

function display(data){
    data.forEach((el) => {
        let box=document.createElement("div")
        box.className="box";

        let img=document.createElement("img")
        img.src=el.avatar
        let title=document.createElement("h2")
        title.innerText=el.title
        let cat=document.createElement("h3")
        cat.innerText=el.category
        let des=document.createElement("p")
        des.innerText=el.description
        let price=document.createElement("p")
        price.innerText="$"+el.price

        let btn=document.createElement("button")
        btn.innerText="Add to Cart"
      

        box.append(img,title,cat,des,price,btn)
        container.append(box)
    });
}
