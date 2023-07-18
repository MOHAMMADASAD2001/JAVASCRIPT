let button = document.getElementById ("button");
let data = document.getElementById ("data");
let td=data.value;



let vvv = new XMLHttpRequest();
vvv.open("GET","task.json")
button.onclick = function(){
    let mohammad = "";
    const httjs =JSON.parse(vvv.responseText);
    for (let i = 0; i<6; i++) {
 mohammad +=`
  <tr >
   <td>${httjs.names[i]}</td>
   <td>${httjs.ages[i]}</td>
   <td>${httjs.majors[i]} </td>
   <td>${httjs.universities[i]}</td>
   <td>
<img src="${httjs.image[0]}" alt="">
   </td>
 </tr>
 <br>`
 
 
}
data.innerHTML=mohammad;

}
vvv.send();



