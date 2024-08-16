// ADD ITEMS TO LIST 
const button = document.querySelector(".addList")
const listOfName = ["Adamu", "Aisha", "John", "Dennis", "Wisdom", "Chioma", "Muhammed", "Emmanuel"]

const runevent = ()=>{
const ul = document.querySelector(".Mylist")

listOfName.forEach((each, i)=>{
  ul.innerHTML += `<li>${each}</li>`
}) 
}

button.addEventListener("click", runevent)