let flag = document.querySelector("#FLAG");
flag.style.display = "block";

let image =document.createElement("img");
image.src ="jordan.jpg";
document.body.appendChild(image)
image.style.width = "200px";
flag.addEventListener("change", () =>{
    let selectedIndex = flag.selectedIndex;
    let selectedValue = flag.options[selectedIndex].text;
    if (selectedValue === "PALASTAIN"){

        image.src ="palestine.jpg";
    } else{
        image.src="jordan.jpg";
    }
});
let selectedIndex = flag.selectedIndex;

console.log(flag[selectedIndex])