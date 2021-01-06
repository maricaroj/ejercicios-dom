                                            // EJERCICIO 1

// let nombre = prompt('Ingresa tu nombre');
// if(nombre === null || nombre === ''){
//     nombre = 'Invitad@'
// };
// const saludo = document.getElementById('saludo');
// const contenidoSaludo = `<h1 class="saludo">¡Hola ${nombre} bienvenid@!</h1>`;
// saludo.innerHTML = contenidoSaludo;



                                            // EJERCICIO 2

// alert('Ingresa un color en sistema Hexadecimal números de 0 al 9 y letras de la A a la F')
// let colorFondo = prompt('Ingresa los valores (máx 6 caracteres)');
// if (colorFondo === '' || colorFondo === null){
//     colorFondo = alert('Cambia el color de fondo')
// };
// const fondo = () => document.body.style.backgroundColor = `#${colorFondo}`;
// fondo();



                                            // EJERCICIO 3

// alert('Ingresa un color en sistema RGB');
// const primerValor = parseInt(prompt('Ingresa el primer valor R'));
// const segundoValor = parseInt(prompt('Ingresa el segundo valor G'));
// const tercerValor = parseInt(prompt('Ingresa el tercer valor B'));
// const fondo = () => document.body.style.backgroundColor =`rgb(${primerValor}, ${segundoValor}, ${tercerValor})`;
// fondo();



                                            // EJERCICIO 4

// let tamaño = prompt('Ingresa el tamaño de la imagen (Grande, Mediana, Pequeña)').toLowerCase();
// const imagen = document.getElementById('imagen');
// const changeWidth = tamaño =>{
//     if(tamaño === 'grande' || tamaño === 'mediana'|| tamaño === 'pequeña'){
//       if(tamaño === 'grande'){
//         tamaño = 800
//       } else if(tamaño === 'mediana'){
//         tamaño = 500
//       } else if(tamaño === 'pequeña'){
//         tamaño = 200
//       }
//       imagen.innerHTML= `<img src="./img/01-cardenalito.jpg" alt="Cardenalito" width=${tamaño}px>`;
//     } else {
//       alert('Ingresa un tamaño valido');
//     }
//   };
//   changeWidth(tamaño);
  


                                            // EJERCICIO 5

// const tempIngresada = prompt('Ingresa la temperatura en grados Celcius');
// const temperatura = document.getElementById('temperatura');
// const notificacionTemp = `<h1 class="temperatura">Temperatura actual: ${tempIngresada}°</h1>`;
// temperatura.innerHTML = notificacionTemp;
// if(tempIngresada < 0){
//     temperatura.style.color = 'blue'
// } else if(tempIngresada >= 0 && tempIngresada < 15){
//     temperatura.style.color = 'skyblue'
// } else if(tempIngresada >= 15 && tempIngresada < 25){
//     temperatura.style.color = 'green'
// } else if(tempIngresada >= 25 && tempIngresada < 30){
//     temperatura.style.color = 'gold'
// } else if(tempIngresada >= 30 && tempIngresada < 35){
//     temperatura.style.color = 'orange'
// } else{
//     temperatura.style.color = 'red'
// };

                                            // EJERCICIO 6

// const porcentIngresado = parseInt(prompt('Ingresar porcentaje'));
// const porcetajePx = () => porcentIngresado * 600 / 100;
// const barra = () => document.getElementById('progreso').style.width = `${porcetajePx()}px`;
// barra();


                                            // EJERCICIO 7

// const meGusta = prompt('Cantidad de Me Gusta');
// const meEncanta = prompt('Cantidad de Me Encanta');
// const meAsombra = prompt('Cantidad de Me Asombra');

// const primero = document.getElementById('gusta').innerHTML = `${meGusta} 👍🏼`;
// const segundo = document.getElementById('encanta').innerHTML = `${meEncanta} 😍`;
// const tercero = document.getElementById('asombra').innerHTML = `${meAsombra} 😱`;


                                            // EJERCICIO 8

// const tituloIngresado = prompt('Ingrese un título');
// const urlImagen = prompt('Ingrese una url de una imagen');
// const urlArticulo = prompt('Ingrese una url de una artículo');

// const texto = document.getElementById('texto').innerHTML = `<h2 class="texto">${tituloIngresado}</h2>`;
// const image = document.getElementById('image').innerHTML = `<img class="image" src="${urlImagen}" alt="Imagen Ingresada"></img>`;
// const link = document.getElementById('link').innerHTML = `<a class="link" href="${urlArticulo}" target="_blanc">Leer más</a>`;

// https://www.nationalgeographic.com.es/animales/perros
// https://www.nationalgeographic.com.es/medio/2018/02/27/perros__1280x720.jpg



                                            // EJERCICIO 9

// const animalElegido = prompt('Escoge un animal: Cardenalito, Perico, Oso, Tortuga, Caiman').toLocaleLowerCase();
// const eleccion = document.getElementById(animalElegido);
// const mostrar = (animalElegido) => {
//     if(animalElegido === 'cardenalito'){
//         eleccion.style.display = 'block'
//     } else if( animalElegido === 'perico'){
//         eleccion.style.display = 'block'
//     } else if( animalElegido === 'oso'){
//         eleccion.style.display = 'block'
//     } else if( animalElegido === 'tortuga'){
//         eleccion.style.display = 'block'
//     } else if( animalElegido === 'caiman'){
//         eleccion.style.display = 'block'
//     } else {
//         alert('Elige un animal de la lista')
//     }
// };
// mostrar(animalElegido);



                                            // EJERCICIO 10

const continenteIngresado = prompt('Ingresa un continente: Asia, Africa, America, Europa, Oceania').toLowerCase();
const resaltar = document.getElementsByClassName(continenteIngresado);
// // resaltar[0].classList.add('color');
// // resaltar[1].classList.add('color');
// // resaltar[2].classList.add('color');
for (let i=0; i<resaltar.length; i++) resaltar[i].classList.add('color'); 



                                            // EJERCICIO 11

// const eleccion = prompt('Escoge entre: comidas, postres o bebidas').toLocaleLowerCase();
// const show = document.getElementsByClassName(eleccion);
// const mostrar = (eleccion) => {
//     if (eleccion === 'comidas'){
//         show[0].classList.add('show');
//         show[1].classList.add('show');
//         show[2].classList.add('show');
//         // for (let i=0; i<show.length; i++) show[i].classList.add('show'); 
//     } else if(eleccion === 'postres'){
//         for (let i=0; i<show.length; i++) show[i].classList.add('show');
//     } else if (eleccion === 'bebidas'){
//         for (let i=0; i<show.length; i++) show[i].classList.add('show');   
//     } else {
//         alert('Elige una de las opciones mencionadas')
//     };
// };
// mostrar(eleccion);



                                            // EJERCICIO 12

const lista = document.getElementsByTagName('li');
const palabra = prompt('Busca una palabra');


// for (let index = 0; index < lista.length; index++) {
// const element = lista[index];
// element.innerText.toLowerCase().includes(palabra.toLowerCase()) ? element.classList.add('color') : null
// };

// for (const index of lista) {
//   index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('color') : null
// };


const array = Array.from(lista);

array.forEach( index => index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('color') : null);
