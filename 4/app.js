const button =document.getElementById("button");
const input =document.getElementById("input");

button.onclick = () => {
    const tag = document.createElement("div");

    tag.setAttribute("class", "block");
    tag.innerText = input.value;
    document.body.append(tag);

    const deletebutton = document.createElement("button");
    deletebutton.innerText = "delete",

    deletebutton.onclick = () => {
        tag.remove();
    }

   input.value=""; 

    tag.append(deletebutton);
}