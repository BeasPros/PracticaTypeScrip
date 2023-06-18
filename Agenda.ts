import { Persona } from "./Persona";

class Agenda {
    private personas: Array<Persona>;

    constructor() {
        this.personas = [];
    }

    public addPersona(persona: Persona) {
        this.personas.push(persona);
    }
    
    public findByDNI(DNI: string) {
        return this.personas.find(p => p.getDni() === DNI);
    }
}

export { Agenda };
