// Array de productos 
const productos = [
    {id: 1, nombre: "LAVARROPAS", precio: 500, stock: 15},
    {id: 2, nombre: "HELADERA", precio: 700, stock: 10},
    {id: 3, nombre: "TELEVISOR", precio: 400, stock: 12},
    {id: 4, nombre: "MICROONDAS", precio: 500, stock: 8},
    {id: 5, nombre: "HORNO ELECTRICO", precio: 200, stock: 17},
];


function mostrarProductos() {
    productos.forEach(producto => {
        console.log(`ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`);
    });
}


function buscarProductoPorId(id) {
    return productos.find(producto => producto.id === id);
}

function realizarCompra(id, cantidad){
    const producto = buscarProductoPorId(id);
    if(producto){
        if(producto.stock >= cantidad){
            producto.stock -= cantidad;
            const total = producto.precio * cantidad;
            console.log(`Has comprado ${cantidad} ${producto.nombre} por un total de $${total}.`);
        } else {
            console.log("Stock insuficiente.");
        }
    } else {
        console.log("Producto no encontrado.");
    }
}

function simuladorDeCompra(){
    mostrarProductos();

    const idProducto = parseInt(prompt("Ingresa el ID del producto que quieres comprar:"), 10);
    const cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"), 10);
    
    realizarCompra(idProducto, cantidad);
    
    const continuar = prompt("¿Deseas comprar otro producto? (si/no)").toLowerCase();
    if (continuar === 'si') {
        simuladorDeCompra();
    } else {
        console.log("Gracias por tu compra. ¡Hasta luego!");
    }
}



simuladorDeCompra()




















