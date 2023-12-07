'use strict';
console.log('PlayGround de JS! - Básicos');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Overview';

function Person(name){
    this.name=name;
}
const person1 = new Person('Alice')
const person2 = new Person('Mikael')

console.log(person1)
console.log(person2)


// Clasess

class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit);
console.log(blackRabbit);

// getter & setter

class Persona {
    constructor (nombre, apellido){
      this.nombre= nombre;
      this.apellido= apellido;
      }
    get nombreCompleto() {
      return `${this.nombre} ${this.apellido}`
    }
    set nombreCompleto(nom) {
      const palabras = nom.split(' ');
      this.nombre = palabras[0] || '';
      this.apellido = palabras[1] || '';
    }
}

let ejemploPersona = new Persona('Luis Fernández');
ejemploPersona.nombreCompleto = 'Pedro Pereda'  //setter

console.log(ejemploPersona.nombreCompleto); //getter