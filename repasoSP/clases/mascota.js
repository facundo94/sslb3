"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "cantidadPatas", {
        get: function () {
            return this._cantidadPatas;
        },
        set: function (cantidadPatas) {
            this._cantidadPatas = cantidadPatas;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.toJson = function () {
        return {
            nombre: this.nombre,
            edad: this.edad,
            cantidadPatas: this.cantidadPatas
        };
    };
    return Animal;
}());
var Mascota = /** @class */ (function (_super) {
    __extends(Mascota, _super);
    function Mascota() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Mascota.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mascota.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mascota.prototype, "foto", {
        get: function () {
            return this._foto;
        },
        set: function (foto) {
            this._foto = foto;
        },
        enumerable: true,
        configurable: true
    });
    Mascota.asignarPatuelas = function (tipo) {
        var patas = 0;
        switch (tipo) {
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
    };
    Mascota.prototype.toJson = function () {
        return {
            nombre: this.nombre,
            edad: this.edad,
            cantidadPatas: this.cantidadPatas,
            id: this.id,
            tipo: this.tipo,
            foto: this.foto
        };
    };
    return Mascota;
}(Animal));
var tipoA;
(function (tipoA) {
    tipoA[tipoA["perro"] = 0] = "perro";
    tipoA[tipoA["gato"] = 1] = "gato";
    tipoA[tipoA["reptil"] = 2] = "reptil";
    tipoA[tipoA["roedor"] = 3] = "roedor";
    tipoA[tipoA["ave"] = 4] = "ave";
    tipoA[tipoA["pez"] = 5] = "pez";
})(tipoA || (tipoA = {}));
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
