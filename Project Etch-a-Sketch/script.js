const container = document.querySelector("#container");
const inputSize = document.querySelector("#inputSize");

inputSize.addEventListener("click", ()=> {
    const size = Number(prompt("Enter the length for both side"));

    container.innerHTML = "";
    for (let i = 0; i < size * size; i++){
        const miniSqaure = document.createElement("div");
        miniSqaure.classList.add("miniSquare");

        miniSqaure.style.width = `${500/size}px`;
        miniSqaure.style.height = `${500/size}px`;
        miniSqaure.style.boxSizing= "border-box";

        miniSqaure.addEventListener("mouseleave", ()=>{
            miniSqaure.style.backgroundColor="blue";
        })




        container.appendChild(miniSqaure);
    }
})
