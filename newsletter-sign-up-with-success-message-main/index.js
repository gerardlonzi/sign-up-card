const email = document.querySelector(".email")
const bottom = document.querySelector(".bottom")
const block = document.querySelector(".block")
const valit = document.querySelector(".valit")
const reponse = document.querySelector(".reponse")
console.log(valit)
bottom.addEventListener("click",()=>{
    if(email.value =="" ){
        reponse.innerHTML="valid request required ⚠"
        email.style.border="1px red solid"
        email.style.backgroundColor=" rgba(255, 0, 0, 0.1) "
        email.placeholder.style.color = "red"

    }
    else{
        block.style.display="none"
       valit.style.display = "block"

    }
})
const input = document.querySelector(".input");
input.addEventListener("click",()=>{
    valit.style.display = "none"

})
