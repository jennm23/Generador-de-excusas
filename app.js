window.onload = () => {
  document.querySelector('#excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {

  let sujeto = ['Mi perro', 'Un mapache', 'Mi gato', 'Un oso', 'Una ardilla', 'Mi mascota'];
  let verbo = ['se comió', 'rompió', 'se llevó', 'orinó', 'me robó', 'partió'];
  let objeto = ['mi tarea', 'mis llaves', 'mi celular', 'mi carro', 'mi cartera']
  let cuando = ['ayer', 'mientras dormia', 'mientras hacia ejercicio', 'antes de clase', 'durante el almuerzo'];
  
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return sujeto[sujetoIndex] + ' ' + verbo[verboIndex] + ' ' + objeto[objetoIndex] + ' ' + cuando[cuandoIndex];
};