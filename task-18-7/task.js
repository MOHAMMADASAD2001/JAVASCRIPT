let button = document.getElementById ("button");
let data = document.getElementById ("data");
let td=data.value;
let info = ` `

async function get(){
    const dataone = await fetch('https://reqres.in/api/users?page=1')
    const datatwo = await dataone.json()
  
  
    for (let i=0 ; i<6; i++){
        
        info += `<tr>
        <td>${datatwo.data[i].id}</td>
        <td>${datatwo.data[i].email}</td>
        <td>${datatwo.data[i].first_name}</td>
        <td>${datatwo.data[i].last_name}</td>
        <td><img src="${datatwo.data[i].avatar}"></td>
        </tr> `
    }
    
        data.innerHTML=info

}
console.log(info)
get()