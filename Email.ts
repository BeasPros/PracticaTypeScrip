class Email {
    // Variables
    private tipo: string;
    private dirección: string;

    constructor(tipo: string, dirección: string) {
        this.tipo = tipo;
        this.dirección = dirección;
    }

    //Valores de los atributos
    public getTipo(): string {
        return this.tipo;
    }

    public getDirección(): string {
        return this.dirección;
    }
    
    // Cambio de los valores de los atributos
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setDirección(dirección: string): void {
        this.dirección = dirección;
    }
}

export { Email };
