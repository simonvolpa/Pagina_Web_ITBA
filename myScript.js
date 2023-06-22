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

function enojarse(){
    alert("gracias")
}

document.getElementById("button").addEventListener("click",enojarse())

