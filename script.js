//lista de productos
const productos = [
    { id: 1, nombre: "Cheetos", precio: 20 },
    { id: 2, nombre: "Coca-cola", precio: 35 },
    { id: 3, nombre: "Takis", precio: 20 },
    { id: 4, nombre: "Maruchan", precio: 15 },
    { id: 5, nombre: "Jumex", precio: 20 },
    { id: 6, nombre: "Mazapan", precio: 10 },
    { id: 7, nombre: "Doritos", precio: 20 },
    { id: 8, nombre: "Agua", precio: 15 },
    { id: 9, nombre: "M&Ms", precio: 25 },
    { id: 10, nombre: "Churrumais", precio: 15 }
];

//carrito
let carrito = [];

//mostrar los productos y seleccionar uno
const mostrarProductos = () => {
    let opciones = "Selecciona un producto:\n";
    productos.forEach((producto, index) => {
        opciones += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    
    let seleccion = parseInt(prompt(opciones)) - 1;

    //validar la selección
    if (seleccion >= 0 && seleccion < productos.length) {
        agregarAlCarrito(productos[seleccion]);
    } else {
        alert("Selección inválida, intenta de nuevo."); //en caso de gacer una selección que no aparezca en la lista o poner algo random
    }
};

//agregar el producto seleccionado al carrito
const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
};

//actualizar la vista del carrito y calcular el total
const actualizarCarrito = () => {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    //limpiar carrito antes de agregar los elementos actualizados
    carritoElement.innerHTML = "";
    
    let total = 0;

    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoElement.appendChild(item);

        total += producto.precio; //calcular el total
    });

    totalElement.textContent = total.toFixed(2); //mostrar el total
};