const container = document.getElementById("container");
const squareSize = document.querySelector("#squareSize");

squareSize.addEventListener("click", () => {
    const sizeInput = Number(prompt("Enter the size for both size: "));

    container.innerHTML ="";

    for(let i = 0; i < sizeInput * sizeInput; i++){
        const smallSquare = document.createElement("div");
        smallSquare.classList.add("smallSquare");

        smallSquare.style.width = `${500/sizeInput}px`;
        smallSquare.style.height = `${500/sizeInput}px`;
        smallSquare.style.border = "1px solid gray";
        smallSquare.style.boxSizing = "border-box";

        smallSquare.addEventListener("mouseleave", ()=>{
            smallSquare.style.backgroundColor="blue";
        })

        container.appendChild(smallSquare);
    };

})