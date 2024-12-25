// Catálogo de productos predefinido
const catalogoProductos = [
    { id: 1, nombre: 'Laptop', precio: 800000 },
    { id: 2, nombre: 'Auriculares', precio: 50000 },
    { id: 3, nombre: 'Monitor', precio: 150000 },
    { id: 4, nombre: 'Teclado', precio: 30000 },
    { id: 5, nombre: 'Mouse', precio: 20000 }
];

// Arreglo para almacenar los pedidos
const pedidos = [];

// Referencias al formulario, la lista de pedidos, el catálogo y el total
const form = document.getElementById('pedido-form');
const listaPedidos = document.getElementById('lista-pedidos');
const catalogo = document.getElementById('catalogo-productos');
const totalCompra = document.getElementById('total-compra');

// Referencias al formulario de pago y los métodos de pago
const pagoForm = document.getElementById('pago-form');
const metodoPagoSelect = document.getElementById('metodo-pago');
const transferenciaForm = document.getElementById('form-transferencia');
const tarjetaForm = document.getElementById('form-tarjeta');
const procederPagoBtn = document.getElementById('proceder-pago');

// Inicializar el catálogo de productos
function inicializarCatalogo() {
    catalogoProductos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} - $${producto.precio}`;
        catalogo.appendChild(option);
    });
}

// Manejar el evento de envío del formulario para agregar pedidos
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const productoId = parseInt(event.target.producto.value, 10);
    const cantidad = parseInt(event.target.cantidad.value, 10);

    if (!productoId || cantidad <= 0) {
        alert('Ingrese datos válidos.');
        return;
    }

    const producto = catalogoProductos.find(p => p.id === productoId);

    pedidos.push({ producto, cantidad });

    actualizarLista();

    form.reset();
});

// Función para actualizar la lista de pedidos en el HTML
function actualizarLista() {
    listaPedidos.innerHTML = '';
    let total = 0;

    pedidos.forEach((pedido, index) => {
        const li = document.createElement('li');
        const subtotal = pedido.cantidad * pedido.producto.precio;
        total += subtotal;

        li.textContent = `${pedido.producto.nombre} - Cantidad: ${pedido.cantidad} - Subtotal: $${subtotal}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarPedido(index));

        li.appendChild(botonEliminar);
        listaPedidos.appendChild(li);
    });

    totalCompra.textContent = `Total: $${total}`;

    // Mostrar el botón de proceder con el pago si hay productos en el carrito
    if (total > 0) {
        procederPagoBtn.style.display = 'block';
    } else {
        procederPagoBtn.style.display = 'none';
    }
}

// Función para eliminar un pedido
function eliminarPedido(index) {
    pedidos.splice(index, 1);
    actualizarLista();
}

// Mostrar el formulario de pago cuando se decida proceder con el pago
procederPagoBtn.addEventListener('click', () => {
    const total = pedidos.reduce((total, pedido) => total + (pedido.producto.precio * pedido.cantidad), 0);

    if (total > 0) {
        pagoForm.style.display = 'block';
    } else {
        alert('Debe agregar productos al carrito antes de proceder con el pago.');
    }
});

// Validar los datos del formulario de pago
function validarPago() {
    const metodoPago = metodoPagoSelect.value;

    if (!metodoPago) {
        alert('Debe seleccionar un método de pago.');
        return false;
    }

    if (metodoPago === 'transferencia') {
        const banco = transferenciaForm.querySelector('input[name="banco"]').value;
        const monto = transferenciaForm.querySelector('input[name="monto-transferencia"]').value;

        if (!banco || !monto) {
            alert('Debe ingresar los datos completos de la transferencia.');
            return false;
        }
    }

    if (metodoPago === 'tarjeta') {
        const tarjeta = tarjetaForm.querySelector('input[name="tarjeta-numero"]').value;
        const cvv = tarjetaForm.querySelector('input[name="codigo-seguridad"]').value;

        if (!tarjeta || !cvv) {
            alert('Debe ingresar los datos completos de la tarjeta.');
            return false;
        }
    }

    return true;
}

// Función para manejar el envío del formulario de pago
pagoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validarPago()) {
        // Mostrar mensaje de éxito
        alert('Pago realizado con éxito!');

        // Esperar 2 segundos antes de actualizar la página
        setTimeout(() => {
            // Recargar la página
            window.location.reload();
        }, 2000); // 2000 milisegundos = 2 segundos
    }
});

// Mostrar el formulario de pago dependiendo del método seleccionado
metodoPagoSelect.addEventListener('change', (event) => {
    const metodoPago = event.target.value;

    // Ocultar ambos formularios de pago
    transferenciaForm.style.display = 'none';
    tarjetaForm.style.display = 'none';

    if (metodoPago === 'transferencia') {
        transferenciaForm.style.display = 'block';
    } else if (metodoPago === 'tarjeta') {
        tarjetaForm.style.display = 'block';
    }
});

// Inicializar la interfaz
inicializarCatalogo();
