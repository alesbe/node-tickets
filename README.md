# Tickets queue

Ticket queue system made with [NodeJS](https://nodejs.org/es/), [socket.io](https://socket.io/) and [express](https://expressjs.com/es/).

## Sections

## Section 1: Generate new tickets
![generar](https://i.imgur.com/3bc747y.png)

Screen with one button to generate new tickets and add them to the queue

### Section 2: Take tickets by desktop
![escritorio](https://i.imgur.com/SUakBF4.png)

Desktop interface, with a button to attend the next ticket in the queue

### Section 3: Public screen
![publica](https://i.imgur.com/WGIK0tS.png)

Public screen where everyone waits to be called. The ticket at the center is the last ticket that a desktop accepted

### Section 4: Index
![index](https://i.imgur.com/lhbgYft.png)

This section allows you to access any screen

## Features
- Instant refresh of the content, without reloding the screen
- Custom desktop names
- Local database (ticket queue are stored in a JSON)
- Ticket queue is reseted daily
- Sound played each time a desktop accepted a ticket
- Unlimited number of desktops to be created

## Install
- Install dependencies `npm install`
- Start server `npm start`

### Requirements
- NodeJS
