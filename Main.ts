// Importamos las clases necesarias
import { Persona } from './Persona';
import { Dirección } from './Dirección';
import { Email } from './Email';
import { Teléfono } from './Teléfono';
import { Agenda } from './Agenda';

// Creamos los datos de e-mail
let email1 = new Email('Personal', 'AliciaTorres@gmai.com');
let email2 = new Email('Trabajo', 'rmjuan@hotmail.com');
let email3 = new Email('Personal', 'LauraFlores@gmail.com');

// Creamos los datos de los teléfonos
let telefono1 = new Teléfono('Personal', '914593294');
let telefono2 = new Teléfono('Oficina', '932935591');
let telefono3 = new Teléfono('Casa', '956023456');

// Creamos el registro de las direcciones
let direccion1 = new Dirección('Avenida de los Reyes Católicos', '13', '3º', 'B', '28910', 'Leganés', 'Madrid');
let direccion2 = new Dirección('Calle San Miguel', '12', '5º', 'C', '08003', 'Barcelona', 'Barcelona');
let direccion3 = new Dirección('Avenida de las Ciencias', '6', '1º', 'A', '11510', 'Puerto Real', 'Cádiz');

// Creamos objetos para relacionar con las clases
let persona1 = new Persona('Alicia', 'Torres Castro', '34', '50384815T', '5 Diciembre', 'Rosa', 'Mujer', [direccion1], [email1], [telefono1], 'Amiga de Manuel');
let persona2 = new Persona('Juan', 'Romero Marquez', '50', '0238501894L', '14 Abril', 'Amarillo', 'Hombre', [direccion2], [email2], [telefono2], 'Pintor');
let persona3 = new Persona('Laura', 'Prieto Flores', '22', '90023459Q', '8 Octubre', 'Verde', 'Mujer', [direccion3], [email3], [telefono3], 'Prima de Carla');

let agenda = new Agenda();
agenda.addPersona(persona1);
agenda.addPersona(persona2);
agenda.addPersona(persona3);

// Mostramos el registro de cada persona
console.log('Datos de la persona 1:', persona1);
console.log('Datos de la persona 2:', persona2);
console.log('Datos de la persona 3:', persona3);

// Buscamos persona por DNI a persona1
let personaAModificar = agenda.findByDNI(persona1.getDni());

// Modificar un registro del correo, DNI, dirección, e-mail o teléfono
// Ejemplo, Asignamos una nueva dirección, email y teléfono a la persona1
let nuevaDireccion = new Dirección('Calle Alegría', '1', '6º', 'E', '28011', 'Madrid', 'Madrid');
let nuevoEmail = new Email('Trabajo', 'Alitorres@gmail.com');
let nuevoTelefono = new Teléfono('Trabajo', '912445098');

personaAModificar?.addDireccion(nuevaDireccion);
personaAModificar?.addEmail(nuevoEmail);
personaAModificar?.addTelefono(nuevoTelefono);

console.log('Datos modificados');
console.log(persona1);