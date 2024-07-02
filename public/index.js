let heading = document.getElementById("heading")
let btn = document.getElementById("btn")

btn.addEventListener("click",  async function getData(){
  try{
    let responce = await fetch("http://localhost:8000/api")
    let result = await responce.json()
    console.log(result)
    
    let osType = result.type.toLowerCase()
    if(osType.includes("windows")) heading.innerText = "Windows  Operating system"
    else if(osType.includes("Darwin")) heading.innerText = "Mac operating system"
    else if(osType.includes("Linux")) heading.innerText = "Linux Operating system"
  }
  catch(e){
    console.log(e);
  }
})