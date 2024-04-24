let fetchbtn = document.querySelector("#fetchbtn");

let container = document.querySelector("#container");

 
 let getData = async ()=>{
    let res = await fetch ("http://localhost:3000/Student")
    let data = await res.json()

    console.log(data)
    showData(data)
}

 let showData = (arr)=>{
container.innerHTML=""
arr.forEach((ele)=>{
    let div = document.createElement("div");
     div.id = "box"
    let username = document.createElement("p")
    username.innerText = ele.Username;

    let emailId = document.createElement("p")
    emailId.innerText = ele.emailID;
    
    let image = document.createElement("img");
    image.src= ele.img;

    div.append(image, username, emailId)
    
    container.append(div)
})

}



fetchbtn.addEventListener("click", getData)



