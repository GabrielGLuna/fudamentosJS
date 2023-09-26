const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');
/*const inputimage = document.getElementById('loadimage');
const image = document.getElementById('image');
function addImage(){
 const imagen = inputimage.value;
 image.src = imagen;
 inputimage.value = '';
}*/

const lista = [];
const addTarea = () => {
  const tareaData = inputTarea.value;
  lista.push(tareaData);
  inputTarea.value = '';
  showlista();
}
const showlista =  () =>{
let listaHtml = '';
lista.forEach(listaItem => {
    listaHtml += `<li> ${ listaItem }  </li>`
});
listaTareas.innerHTML = listaHtml;
}