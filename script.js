console.log("s")
const container = document.getElementById("container");
container.style.display = "flex";

for (let column = 0; column < 16; column++) {
    new_column = document.createElement("div");
    new_column.setAttribute("id", "column_"+column);
    new_column.style.flex =  1;
    container.appendChild(new_column);
    


    for (let item = 0; item < 16; item++) {
        div = document.createElement("div");
        div.setAttribute("id", column);
        div.textContent = column;
        div.style.padding = "5px"
        new_column.appendChild(div);
    }
}