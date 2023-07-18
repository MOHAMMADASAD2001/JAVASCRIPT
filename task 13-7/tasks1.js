let M= document.querySelector (".Hi");
M.style.cssText ="background-color: red;width:50%;text-align:center;margin:auto;"

// arrow function
M.addEventListener("mouseover", () => {
M.innerHTML = "Hello Word!"
});
M.addEventListener("mouseout", () => {

    M.innerHTML = "can i help you?"
});



