const dataToSend = { "id": "3", "title": "a super new title", "views": 300 };
const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    fetch("http://localhost:3000/posts", {
        method: "post",
        body: JSON.stringify(dataToSend)
    })
     .then(response => response.json())
     .then(data => {
        console.log(data);
     })
});
