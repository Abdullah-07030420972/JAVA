// FECTH AND DISPLAY DATA
const div = document.querySelector(".container")

const makeRequest = async ()=>{

  const result = await fetch("https://jsonplaceholder.typicode.com/comments")

  .then(result => result.json())

  .then(result => {
    result.forEach((eachItem, i) => {
      div.innerHTML += `
        <div>
        <h2>${eachItem.body}</h2>
        <h3>${eachItem.email}</h3>
        <h4>${eachItem.id}</h4>
        <h5>${eachItem.name}</h5>
        <h6>${eachItem.postId}</h6>
        <hr>
        </div>
      `    
    });
  })

  .then(res => console.log(res))
}

makeRequest()
