// Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search); // parametros en la url

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

var escritorio = searchParams.get('escritorio')
var label = $('small');

$('h1').text('Escritorio ' + escritorio)

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay mas tickets') {
            label.text(resp)
            alert(resp);
            return
        }
        label.text('Ticket: ' + resp.numero)
    })
})