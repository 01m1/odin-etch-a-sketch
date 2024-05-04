const refresh = document.getElementById("refresh");

run = function(size) {
    const container = document.getElementById("container");
    container.style.display = "flex";

    for (let column = 0; column < size; column++) {
        new_column = document.createElement("div");
        new_column.setAttribute("id", "column_"+column);
        new_column.style.flex =  1;
        container.appendChild(new_column);
        
    
    
        for (let item = 0; item < size; item++) {
            div = document.createElement("div");
            div.setAttribute("id", column);
            div.style.border = "1px solid black";
            div.style.padding = "5px"
            div.onmouseover = function() {
                this.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            }
            new_column.appendChild(div);
        }
    }
}

run(16);

refresh.onclick = function(){
    let size = prompt("Enter grid size: ");
    if (size > 100) {
        size = 100;
    }
    const container = document.getElementById("container");
    container.remove();
    c = document.createElement("container");
    c.setAttribute("id", "container");
    document.getElementById("thebody").appendChild(c);
    run(size);
};
