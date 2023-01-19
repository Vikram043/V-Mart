let data=JSON.parse(localStorage.getItem("user-details"))||[]
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', (el) => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', (el) => {
	container.classList.remove("right-panel-active");
});

let form=document.getElementById("form")
let n=document.getElementById("name")
let email=document.getElementById("email")
let pass=document.getElementById("pas")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(n.value==="" || email.value==="" || pass.value===""){
        if(n.value===""){
            alert("Please enter your name")
        }
       else if(email.value===""){
            alert("Please enter your email")
        } 
        else{
            alert("Please enter your password")
        }
    }else{
        let obj={
            name:n.value,
            email:email.value,
            pas:pass.value,
        }
        data.push(obj)
        localStorage.setItem("user-details",JSON.stringify(data))
    }
})

let forms=document.getElementById("form2")
let emails=document.getElementById("emails")
let passs=document.getElementById("pass")
forms.addEventListener("submit",(e)=>{
    e.preventDefault()
    let flag=false;
    for(let i=0;i<data.length;i++){
        console.log(data[i].email,data[i].pas)
        if(emails.value ==data[i].email && passs.value== data[i].pas){
            flag=true;
        }   
    }
    if(flag==true){
        alert("Sign-In successful")
            let url = "http://127.0.0.1:5500/index.html";
            window.location.href = url;
    }else{
        alert("Username or password is wrong")
    }
})