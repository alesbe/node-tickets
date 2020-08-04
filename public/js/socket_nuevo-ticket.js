// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket')

// Sockets
socket.on('connect', () => {
    console.log('Conectado al servidor');
})

socket.on('discconect', () => {
    console.log('Conexión con el servidor perdida');
})

socket.on('estadoActual', (res) => {
    label.text(res.actual)
})

// jquery para el listener del botón
$('button').on('click', function() {

    // emit siguiente ticket, no enviar nada, pero recibir un callback
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);

        console.log(siguienteTicket);
    });

})