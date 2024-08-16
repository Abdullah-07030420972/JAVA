
// CHANGE BACKGROUND BASED ON RESPONSE 

const heading = document.getElementById("head")

heading.style.backgroundColor = "green"

const button = document.querySelector(".btn")

let runevent = ()=>{
  heading.textContent = "FAILED"
  heading.style.backgroundColor = "red"
  } 


button.addEventListener("click", runevent)