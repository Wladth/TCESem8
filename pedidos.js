// Arreglo para almacenar los pedidos
const pedidos = [];

// Referencias al formulario y la lista de pedidos
const form = document.getElementById('pedido-form');
const listaPedidos = document.getElementById('lista-pedidos');

// Manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener datos del formulario
    const producto = event.target.producto.value;
    const cantidad = parseInt(event.target.cantidad.value, 10);

    // Validar datos
    if (!producto || cantidad <= 0) {
        alert('Ingrese datos válidos.');
        return;
    }

    // Agregar pedido al arreglo
    pedidos.push({ producto, cantidad });

    // Actualizar la lista de pedidos
    actualizarLista();

    // Limpiar el formulario
    form.reset();
});

// Función para actualizar la lista de pedidos en el HTML
function actualizarLista() {
    listaPedidos.innerHTML = '';
    pedidos.forEach((pedido, index) => {
        const li = document.createElement('li');
        li.textContent = `${pedido.producto} - Cantidad: ${pedido.cantidad}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarPedido(index));
        li.appendChild(botonEliminar);
        listaPedidos.appendChild(li);
    });
}

// Función para eliminar un pedido
function eliminarPedido(index) {
    pedidos.splice(index, 1);
    actualizarLista();
}
