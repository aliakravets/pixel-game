let color = document.querySelector(".chosen-color");
let pixels = document.querySelectorAll(".pixel");
let eraser = document.querySelector(".eraser")

for(let pixel of pixels){
    pixel.addEventListener('click', function(){
        if(eraser.checked){
            pixel.style.backgroundColor = "white";
        }

        else{
            pixel.style.backgroundColor = `${color.value}`;
        }
    })
}