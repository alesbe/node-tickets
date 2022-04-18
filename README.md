# Cola de tickets

*Este proyecto ha sido realizado durante el desarrollo de un curso de NodeJS.*

Sistema de cola de tickets hecho con [socket.io](https://socket.io/) y [express](https://expressjs.com/es/).

## Secciones

## Sección 1: Generar nuevos tickets
![generar](https://i.imgur.com/3bc747y.png)

Pantalla con un botón para generar un nuevo ticket y añadirlo a la cola

### Sección 2: Atender tickets por escritorio
![escritorio](https://i.imgur.com/SUakBF4.png)

Interfaz para cada uno de los escritorios, con un botón para atender el siguiente ticket sin atender en la cola

### Sección 3: Pantalla pública
![publica](https://i.imgur.com/WGIK0tS.png)

Pantalla pública que ven todos los usuarios esperando a ser llamados. El ticket central es el último ticket que un escritorio ha atendido, de forma que el cliente sabrá al instante si es su turno y qué escritorio le corresponde

### Sección 4: Índice
![index](https://i.imgur.com/lhbgYft.png)

Esta sección ha sido creada con fines de desarrollo, te permite acceder a la pantalla pública, a la creación de tickets, e ingresar como un nuevo escritorio.

## Características
- Actualización instantanea del contenido sin recargar la página, gracias a los sockets
- Nombres de escritorios personalizados (No hace falta que sea un número, puedes nombrar al escritorio como desees)
- Sistema de base de datos local (Los datos se guardan en un JSON, y se leen cada vez que se inicia la aplicación) 
- Reseteo de tickets cada día (Cuando es un nuevo día, la aplicación lo detecta y resetea el último ticket a 0)
- Sonido en la pantalla pública cada vez que se atiende un nuevo ticket
- Infinitos escritorios conectados ateniendo tickets (Podemos crear 10 escritorios a la vez, y que estos estén atendiendo tickets distintos de la lista)

## Instalación
- [ ] Subir la carpeta al servidor
- [ ] Instalar las dependencias con `npm install`
- [ ] Iniciar el servidor con `npm start`

### Requisitos
- NodeJS
