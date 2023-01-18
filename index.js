let API="https://63c79a80075b3f3a91cf3e5c.mockapi.io/products"

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

        let img=document.createElement("img")
        img.src=el.avatar
        let title=document.createElement("title")
        title.innerText=el.title

        box.append(img,title)
        container.append(box)
    });
}
