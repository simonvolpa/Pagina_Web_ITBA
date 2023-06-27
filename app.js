const stockProductos = [
    {
      id: 1,
      nombre: "Gris Corto",
      cantidad: 1,
      desc: "Buzo Lana",
      precio: 18000,
      img: "./Imagenes_Basura/_Angel Wings_ Unisex Men Women Streetwear Graphic Hoodie.jpg",
    },
    {
        id: 2,
        nombre: "Space Negro",
        cantidad: 1,
        desc: "Buzo Lana",
        precio: 22000,
        img: "./Imagenes_Basura/Jinquedai  Hot Sale Fashion Creativity Design Skeleton Graphic Print Hoodie Men Women Fleece Cotton Hoodies Man Hip Hop Style Sweatshirt - Blue _ S.jpg",
      },
      {
        id: 3,
        nombre: "Buzo-Manga Larga",
        cantidad: 1,
        desc: "Buzo Lana",
        precio: 22000,
        img: "./Imagenes_Basura/TALISHKO™ - Flocked Letter Panel Sweatshirt - Brown _ XL.jpg",
      },
      {
        id: 4,
        nombre: "Naranja-Gris",
        cantidad: 1,
        desc: "Buzo Lana",
        precio: 20000,
        img: "./Imagenes_Basura/Mens Corduroy Contrast Patchwork Casual Drawstring Elastic Hem Hoodies With Kangaroo Pocket.jpg",
      },
      {
        id: 5,
        nombre: "Marron Estampa",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 10000,
        img: "./REMERAS/descarga (1).jpg",
      },
      {
        id: 6,
        nombre: "Smile Gris",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 9500,
        img: "./REMERAS/descarga (2).jpg",
      },
      {
        id: 7,
        nombre: "Space Blanca",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 10000,
        img: "./REMERAS/descarga.jpg",
      },
      {
        id: 8,
        nombre: "Dragon Amarillo",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 11000,
        img: "./REMERAS/ROMWE Guys Japanese Writing Dragon Graphic Tee.webp",
      },
      {
        id: 9,
        nombre: "Butterfly Gris",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 14000,
        img: "./pantalones/717e82b27d2b0b8e560e14f85a470adf-product.jpg",
      },
      {
        id: 10,
        nombre: "Jogging Gris",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 12500,
        img: "./pantalones/D_NQ_NP_729030-CBT54390521121_032023-W.jpg",
      },
      {
        id: 11,
        nombre: "Jean Parcheado",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 20000,
        img: "./pantalones/H232262a9bf9f40adb192372ae6f12218v.jpg",
      },
      {
        id: 12,
        nombre: "Butterfly Negro",
        cantidad: 1,
        desc: "Remera Lana",
        precio: 14000,
        img: "./pantalones/H7226fbc8c358449684107391517bf3d0x.jpg_640x640Q90.jpg_.webp",
      },

      
  ];
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const activarFuncion = document.querySelector("#activarFuncion");
  const procesarCompra = document.querySelector("#procesarCompra");
  const totalProceso = document.querySelector("#totalProceso");
  const formulario = document.querySelector('#procesar-pago')
  
  if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar</button>
      </div>
    </div>
      `;
    }
  });
  
  const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
      });
    }
  
    if (carrito.length === 0) {
      console.log("Nada");
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
      console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;
  
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  
   function enviarCompra(e){
     e.preventDefault()
     const cliente = document.querySelector('#cliente').value
     const email = document.querySelector('#correo').value
  
     if(email === '' || cliente == ''){
       Swal.fire({
         title: "¡Debes completar tu email y nombre!",
         text: "Rellena el formulario",
         icon: "error",
         confirmButtonText: "Aceptar",
     })
   } else {
  
    const btn = document.getElementById('button');
  
  // document.getElementById('procesar-pago')
  //  .addEventListener('submit', function(event) {
  //    event.preventDefault();
  
     btn.value = 'Enviando...';
  
     const serviceID = 'default_service';
     const templateID = 'template_qxwi0jn';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Finalizar compra';
        
      }, (err) => {
        btn.value = 'Finalizar compra';
        
      });
      
     const spinner = document.querySelector('#spinner')
     spinner.classList.add('d-flex')
     spinner.classList.remove('d-none')
  
     setTimeout(() => {
       spinner.classList.remove('d-flex')
       spinner.classList.add('d-none')
       formulario.reset(3000)
  
       const alertExito = document.createElement('p')
       alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
       alertExito.textContent = 'Compra realizada correctamente'
       formulario.appendChild(alertExito)
  
       setTimeout(() => {
         alertExito.remove()
       }, 3000)
  
  
     }, 3000)
   }
   localStorage.clear()
  
   }