let ul = document.querySelector("ul")
let btn = document.querySelector("button")
let inp = document.querySelector("input")
btn.addEventListener("click",function(){
    let lis = document.createElement("li")
    let removeBtn = document.createElement("button")
    removeBtn.innerText="Remove"
    lis.innerText = inp.value
    ul.appendChild(lis)
    lis.appendChild(removeBtn)
    console.log(inp.value)
    inp.value =""
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove()
        console.log("deleted")
    }
})