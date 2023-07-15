let name = ["mohammad", "Mohammad", "ahmad", "Ahmad"]
let age = [32, 22, 21, 80]
let div0 = document.createElement("div");
div0.style.display = "flex";

for (let i = 0; i < 4; i++) {

    let div1 = document.createElement("div");
    div1.style.border = "5px solid red";
    div0.appendChild(div1);

    let p1 = document.createElement("p");
    let p1_cont = document.createTextNode(name[i])
    p1.appendChild(p1_cont);
    div1.appendChild(p1);



    let p2 = document.createElement("p");
    let p2_cont = document.createTextNode(age[i])
    p2.appendChild(p2_cont);
    div1.appendChild(p2);



    let img1 = document.createElement("img");
    img1.setAttribute("src", "pic.jpg")
    div1.appendChild(img1);


    document.body.appendChild(div1);


}


























}