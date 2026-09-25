const listaProductos = [
    {id: 1, nombre: "maousepad rgb", precio: 24990, imagen: "https://th.bing.com/th/id/OIP.kNq-HPWV9TS1-HhOQjjpfQHaE6?w=282&h=187&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 2, nombre: "Organizador Gamer PLA", precio: 9990, imagen: "https://http2.mlstatic.com/D_NQ_NP_913013-MLA49088037058_022022-O.webp"},
    {id: 3, nombre: "Soporte para Audífonos PLA", precio: 12990, imagen: "https://th.bing.com/th/id/OIP.g92LsE7FsXkFW5Jww-wvLAHaHa?w=178&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 4, nombre: "Organizador de Cables", precio: 6990, imagen: "https://th.bing.com/th/id/OIP.y0fBTiM6qrnpyRTms8Z5mgHaGr?w=210&h=189&c=7&r=0&o=7&pid=1.7&rm=3"},
    {id: 5, nombre: "Juego de Mesa Eco", precio: 19990, imagen: "https://th.bing.com/th/id/OIP.vqIJBGetvQZrdkRbLxsfJwHaJE?w=156&h=190&c=7&r=0&o=7&pid=1.7&rm=3"}
];

function cargarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";

    listaProductos.forEach((producto)=> {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");


        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", cargarProductos);