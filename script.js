let btn = document.getElementById("btn")
let list = document.getElementById("list")


btn.addEventListener("click", (e) => {

    if (list.children[0].className == "emptyMsg") {
        list.children[0].remove()
    }
    let currBtn = e.currentTarget
    let currInp = currBtn.previousElementSibling
    console.log(currInp.value);

    let newLi = document.createElement("li")
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `
<h4 class="flex-grow-1"> ${currInp.value} </h4>
<button type="button" class="btn btn-warning mx-3" onclick="edit (this)">Edit</button> <button type="button" class="btn btn-danger" onclick="remove (this) ">Delete</button>`

    list.appendChild(newLi)
    currInp.value = ''
})
function remove(currElm) {
    currElm.parentElement.remove()
    let list = document.getElementById("list")
    if (list.children.length <= 0) {
        let emptyMsg = document.createElement("h4")
        emptyMsg.textContent = "Nothing is here, please add an item"
        emptyMsg.classList.add("emptyMsg")
        list.appendChild(emptyMsg);
    }
}

function edit(editElm) {
    if (editElm.textContent == "Done") {
        editElm.textContent = "Edit";
        let editTraverseElm = editElm.previousElementSibling.value; let editHeading = document.createElement("h4")
        editHeading.className
            =
            "flex-grow-1 m-lg-1"
        editHeading.textContent = editTraverseElm
        editElm.parentElement.replaceChild(editHeading, editElm.previousElementSibling)
    } else {
        let editTraverseElm = editElm.previousElementSibling.textContent;
        let editText = document.createElement("input")

        editText.type = "text";
        editText.placeholder = "Item"
        editText.classList.add("form-control")
        editText.value = editTraverseElm;
        editElm.parentElement.replaceChild(editText, editElm.previousElementSibling)
        editElm.textContent = "Done"
    }
}