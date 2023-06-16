class Teléfono{
    constructor(
        private tipo: string,
        private numero: string
    ) {}
//Obtención de los valores de aributos privados
    public getTipo(): string {
        return this.tipo;
    }
//Para poder modificar los datos 'tipo' previamente introducidos
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
//Obtención de los valores de aributos privados
    public getNúmero(): string {
        return this.numero;
    }
//Para poder modificar los datos 'numero' previamente introducidos
    public setNúmero(numero: string): void {
        this.numero = numero;
    }
}
//Se exportan los datos
export { Teléfono };
