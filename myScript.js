function descuento(precio){
    if(precio > 30000){
        precio=precio*0.75;
    console.log("Te has llevado un descuento por realizar una compra de mas de 30000")
    return precio}
    }

function carrito(precio){
    if (precio=0){
        console.log("Selecciona un prodcuto para realizar una compra")
    }
}








// Define la fecha y hora objetivo para el evento
var fechaObjetivo = new Date("2023-06-29T12:00:00Z");

// Obtiene el elemento <div> del contador por su id
var contadorElemento = document.getElementById("contador");

// Función para calcular y mostrar el contador de tiempo
function actualizarContador() {
  // Obtiene la fecha y hora actual
  var fechaActual = new Date();

  // Calcula la diferencia en milisegundos entre la fecha objetivo y la fecha actual
  var diferencia = fechaObjetivo - fechaActual;

  // Calcula los días, horas, minutos y segundos restantes
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualiza el contenido del elemento <div> del contador
  contadorElemento.textContent = "En " + dias + " días, " + horas + " horas, " + minutos + " minutos y " + segundos + " abre el casting";

  // Actualiza el contador cada segundo
  setTimeout(actualizarContador, 1000);
}

// Inicia el contador
actualizarContador();












const price=5;
let total=price*2;

let x,y;
x=5
y=3
//y==4 valor
//y===4  tipo y valor

&& and
|| or
! not


//let hola, chau;
hola="hola"
chau="chau"

let si=true;

const NUMEROS=[2,true,4,"hola"];
NUMEROS.push(false)
console.log(NUMEROS[4])

NUMEROS.pop()

NUMEROS.unshift("hola")
NUMEROS.shift()

NUMEROS.reverse()

NUMEROS.splice(0,1,"ahora soy el primero")

console.log(numeros[0])


let hola={
    nombre: "simon",
    edad: 18+1,
    cumplir_años:function(){
        this.edad=this.edad+1
    }}


console.log(hola.nombre)


function saludar(){
    console.log("hola mundo")
}

saludar()

let despedir = function(){console.log("chau")}
despedir()

function consologear(valor){
    console.log(valor)
}

function sumar(a,b){
    return a+b
}

consologear (sumar(1,4))


//function arrow

a => a + 100;

let ingrese = number(prompt("Ingrese un valor numerico: "))


let estudiantes =[
    {nombre:"simon", edad:19},
    {nombre:"facundo", edad:20}
]
console.log(estudiantes[1].edad)

//asi se pasa a la base de datos

let base_datos = JSON.stringify(estudiantes)

function puede_pasar(edad){
    if(edad > 18){
        return "puede pasar";}
    }

switch(frutas){
    case "naranja":
    console.log("naranja");
}

//PONER JAVASCRIPT EN HTML


document.getElementById("nombre de id objeto").innerHTML="hola"
let subtitulo = document.getElementsByTagName(img).alt="Foto generica"
subtitulo.style.color="red"


//imaginar un button creado 
//ADDEVENTLISTENER IMPORTANTE
//click, mouseover, mouseout, onload, 

function carrito_proximamente(){
    alert("Proximamente habra carrito")
}
document.getElementById("btn btn-primary").addEventListener("click",carrito_proximamente())

