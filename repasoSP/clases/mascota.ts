abstract class Animal{
    protected _nombre:string;
    protected _edad:number;
    protected _cantidadPatas:number;

    get nombre():string{
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

    get edad():number{
        return this._edad;
    }

    set edad(edad:number){
        this._edad = edad;
    }

    get cantidadPatas():number{
        return this._cantidadPatas;
    }

    set cantidadPatas(cantidadPatas:number){
        this._cantidadPatas = cantidadPatas;
    }

    constructor(){
    }

    toJson(){
        return {
            nombre: this.nombre,
            edad: this.edad,
            cantidadPatas: this.cantidadPatas
        };
    }

}

class Mascota extends Animal{

    private _id:number;
    private _tipo:tipoA;
    private _foto:string;

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get tipo():tipoA{
        return this._tipo;
    }

    set tipo(tipo:tipoA){
        this._tipo = tipo;
    }

    get foto():string{
        return this._foto;
    }

    set foto(foto:string){
        this._foto = foto;
    }

    public constructor(){
        super();
    }

    public static asignarPatuelas(tipo:tipoA):number {
        let patas:number = 0;

        switch(tipo){
            case 0:
            case 1:
            case 2:
            case 3:
                patas = 4;
                break;
            case 4:
                patas = 2;
                break;
        }

        return patas;
    }

    toJson(){
        return {
            nombre: this.nombre,
            edad: this.edad,
            cantidadPatas: this.cantidadPatas,
            id : this.id,
            tipo : this.tipo,
            foto : this.foto
        };
    }

}

enum tipoA{
    perro, gato, reptil, roedor, ave, pez
}

/*let m1:Mascota = new Mascota("1", 11, 1, tipo.ave);
let m2:Mascota = new Mascota("2", 22, 2, tipo.ave);
let m3:Mascota = new Mascota("3", 33, 3, tipo.ave);
let m4:Mascota = new Mascota("4", 44, 4, tipo.ave);

let array = new Array<Mascota>();
array.push(m1);
array.push(m2);
array.push(m3);
array.push(m4);

localStorage.setItem("array", JSON.stringify(array));

console.log(localStorage.getItem("array"));

let jsonArray:any = localStorage.getItem("array");
let array2 = JSON.parse(jsonArray);

array2.forEach(element => {
    console.log(element);
});*/
