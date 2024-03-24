"use strict"

const cell = document.querySelectorAll(".mainBlock .cell");


const images = document.querySelectorAll(".cell img");

let target;

for(let i = 0; i < images.length; i ++){
    images[i].ondragstart = () => {
        images[i].style.opacity = 0;
        target = images[i]
            };
    images[i].ondragend = () => {
        images[i].style.opacity = 1;
    };
};

for (let i = 0; i < cell.length; i++) {
    cell[i].ondragover = (e) => {
        e.preventDefault();
        cell[i].style.background = "grey";
    };
    
    cell[i].ondragleave = () => {
        cell[i].style.background = null;
    };
    
    cell[i].ondrop = (e) => {
     if(cell[i].children.length === 0){
        cell[i].append(target)
     }else{
        e.preventDefault()
     }
    };
}