const fs = require('fs')

class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}

// Clase con funciones para el control de tickets
class TicketControl {

    // Función constructora que se inicializa la primera vez que instanciamos la clase
    constructor() {

        this.ultimo = 0; // Ultimo ticket
        this.hoy = new Date().getDate(); // Dia
        this.tickets = []; // Tickets pendientes de revisión
        this.ultimos4 = []; // Ultimos 4 tickets 

        let data = require('../data/data.json')

        // Si hoy es el mismo dia que en el json (por si hay un apagon de luz y se reinicia el sistema a mitad del dia), reestablecer el último número
        if (data.hoy === this.hoy) {

            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;

        } else {
            this.reiniciarConteo();
        }

    }

    // Función que se ejecuta cada vez que el día no sea igual al que está guardado en la db (cada dia se resetea todo)
    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    // Función para actualizar los datos del json
    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        }

        let jsonDataString = JSON.stringify(jsonData)
        fs.writeFileSync('./server/data/data.json', jsonDataString)

    }

    // Función para pasar al siguiente ticket
    siguiente() {
        this.ultimo += 1;

        let ticket = new Ticket(this.ultimo, null)
        this.tickets.push(ticket)

        this.grabarArchivo()

        return `Ticket ${this.ultimo}`
    }

    // Retorna el último ticket
    getUltimoTicket() {
        return `Ticket ${this.ultimo}`
    }

    getUltimos4() {
        return this.ultimos4;
    }

    // Toma el primer ticket de la lista para que sea atendido
    atenderTicket(escritorio) {

        if (this.tickets.length === 0) {
            return 'No hay mas tickets'
        }

        let numeroTicket = this.tickets[0].numero;

        // Elimina el primer ticket de la lista para que no esté como antendido
        this.tickets.shift();

        let atenderTicket = new Ticket(numeroTicket, escritorio)

        // Añade el nuevo ticket al inicio del array
        this.ultimos4.unshift(atenderTicket);

        // Cuando haya mas de 4 tickets en ultimos4
        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1); // borra el último
        }

        console.log('Ultimos 4: ', this.ultimos4);

        this.grabarArchivo();

        return atenderTicket
    }
}

module.exports = {
    TicketControl
}