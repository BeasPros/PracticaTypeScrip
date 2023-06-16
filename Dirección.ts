class Dirección {
    // Variables
    private calle: string;
    private número: string;
    private piso: string;
    private letra: string;
    private códigoPostal: string;
    private población: string;
    private provincia: string;

    constructor(calle: string, número: string, piso: string, letra: string, códigoPostal: string, población: string, provincia: string) {
        this.calle = calle;
        this.número = número;
        this.piso = piso;
        this.letra = letra;
        this.códigoPostal = códigoPostal;
        this.población = población;
        this.provincia = provincia;
    }

    // Valores de los atributos
    public getCalle(): string {
        return this.calle;
    }

    public getNúmero(): string {
        return this.número;
    }

    public getPiso(): string {
        return this.piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public getCódigoPostal(): string {
        return this.códigoPostal;
    }

    public getPoblación(): string {
        return this.población;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    //Cambio de los valores de los atributos
    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public setNúmero(número: string): void {
        this.número = número;
    }

    public setPiso(piso: string): void {
        this.piso = piso;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public setCódigoPostal(códigoPostal: string): void {
        this.códigoPostal = códigoPostal;
    }

    public setPoblación(población: string): void {
        this.población = población;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }
}

export { Dirección };
