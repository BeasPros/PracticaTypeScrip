//Importamos las clases necesarias
import { Dirección } from './Dirección';
import { Email } from './Email';
import { Teléfono } from './Teléfono';

class Persona {

// Variables
    private nombre: string;
    private apellidos: string;
    private edad: string;
    private dni: string;
    private cumpleaños: string;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Dirección[];
    private emails: Email[];
    private teléfonos: Teléfono[];
    private notas: string;

    constructor(nombre: string, apellidos: string, edad: string, dni: string, cumpleaños: string, colorFavorito: string, sexo: string, direcciones: Dirección[], emails: Email[], teléfonos: Teléfono[], notas: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.emails = emails;
        this.teléfonos = teléfonos;
        this.notas = notas;
    }

    // Acceso a los atributos
    public getNombre(): string {
        return this.nombre;
    }
    
    public getApellidos(): string {
        return this.apellidos;
    }
    
    public getEdad(): string {
        return this.edad;
    }
    
    public getDni(): string {
        return this.dni;
    }
    
    public getCumpleaños(): string {
        return this.cumpleaños;
    }
    
    public getColorFavorito(): string {
        return this.colorFavorito;
    }
    
    public getSexo(): string {
        return this.sexo;
    }
        
    public getDirecciones(): Dirección[] {
        return this.direcciones;
    }

    public getEmails(): Email[] {
        return this.emails;
    }
    
    public getTelefono(): Teléfono[] {
        return this.teléfonos;
    }

    public getNotas(): string {
        return this.notas;
    }

    // Modificacion de datos como dirección, e-mail y teléfono
    public addDireccion(direccion: Dirección): void {
        this.direcciones.push(direccion);
    }

    public addEmail(email: Email): void {
        this.emails.push(email);
    }

    public addTelefono(telefono: Teléfono): void {
        this.teléfonos.push(telefono);
    }



    public setDirecciones(direcciones: Dirección[]): void {
        this.direcciones = direcciones;
    }
            
    public setTelefono(teléfonos: Teléfono[]): void {
        this.teléfonos = this.teléfonos;
    }
            
    public setEmails(emails: Email[]): void {
        this.emails = emails;
    }
}

export { Persona };
