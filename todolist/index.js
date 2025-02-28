let content = document.getElementById("content");
let add = document.getElementById("add");
let txt = document.getElementById("txt");
let data = [],div;
if (localStorage.product != null) {
  data = JSON.parse(localStorage.product);
} else {
  data = [];
}
add.onclick = () => {
  let obj = {
    title: txt.value,
  };
  if (txt.value != "") {
    data.push(obj);
   
    localStorage.setItem("product", JSON.stringify(data));
    
  } else {
    add.style.backgroundColor = "red";
    add.innerText = "X";
  }
  show();

  clear();
};
show();

function show() {
   div = "";
  for (let i = 0; i < data.length; i++) {
    div += `
       <div>
        <div id="info">${data[i].title}</div>
        <button onclick="delete_data(${i})">delete</button>

       </div>
       `;
  }
  content.innerHTML = div;
}
function clear() {
  txt.value = "";
}
function delete_data(i) {
  data.splice(i, 1);
  localStorage.product = JSON.stringify(data);
  show();
}
function turn(){
    add.style.backgroundColor = "orange";
    add.innerText = "add";
}