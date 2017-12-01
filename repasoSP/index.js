"use strict";
$(document).ready(function () {
    var opE = $("#comboEquip");
    var opC = $("#comboClase");
    setComboClase(opC);
    opC.change(function () {
        var op = $("#comboClase option:selected").val();
        cambiarComboEquip(op, opE);
    });
});
var clase;
(function (clase) {
    clase[clase["Guerrero"] = 0] = "Guerrero";
    clase[clase["Ninja"] = 1] = "Ninja";
    clase[clase["Arquero"] = 2] = "Arquero";
    clase[clase["Mago"] = 3] = "Mago";
})(clase || (clase = {}));
var GuerreroE;
(function (GuerreroE) {
    GuerreroE[GuerreroE["Acha"] = 0] = "Acha";
    GuerreroE[GuerreroE["Mandoble"] = 1] = "Mandoble";
    GuerreroE[GuerreroE["Maza"] = 2] = "Maza";
})(GuerreroE || (GuerreroE = {}));
var NinjaE;
(function (NinjaE) {
    NinjaE[NinjaE["Kunai"] = 0] = "Kunai";
    NinjaE[NinjaE["Shuriken"] = 1] = "Shuriken";
    NinjaE[NinjaE["Katana"] = 2] = "Katana";
})(NinjaE || (NinjaE = {}));
var ArqueroE;
(function (ArqueroE) {
    ArqueroE[ArqueroE["Arco madera"] = 0] = "Arco madera";
    ArqueroE[ArqueroE["Arco compuesto"] = 1] = "Arco compuesto";
    ArqueroE[ArqueroE["Ballesta"] = 2] = "Ballesta";
})(ArqueroE || (ArqueroE = {}));
var MagoE;
(function (MagoE) {
    MagoE[MagoE["Baston hielo"] = 0] = "Baston hielo";
    MagoE[MagoE["Baston luz"] = 1] = "Baston luz";
    MagoE[MagoE["Baston fuego"] = 2] = "Baston fuego";
})(MagoE || (MagoE = {}));
function setComboClase(opC) {
    for (var i = 0; i < Object.keys(clase).length / 2; i++) {
        opC.append('<option value="' + clase[i] + '">' + clase[i] + '</option>');
    }
}
function cambiarComboEquip(op, opE) {
    opE.empty();
    if (op == "Guerrero") {
        for (var i = 0; i < Object.keys(GuerreroE).length / 2; i++) {
            opE.append('<option value="' + GuerreroE[i] + '">' + GuerreroE[i] + '</option>');
        }
    }
    else if (op == "Ninja") {
        for (var i = 0; i < Object.keys(NinjaE).length / 2; i++) {
            opE.append('<option value="' + NinjaE[i] + '">' + NinjaE[i] + '</option>');
        }
    }
    else if (op == "Arquero") {
        for (var i = 0; i < Object.keys(ArqueroE).length / 2; i++) {
            opE.append('<option value="' + ArqueroE[i] + '">' + ArqueroE[i] + '</option>');
        }
    }
    else if (op == "Mago") {
        for (var i = 0; i < Object.keys(MagoE).length / 2; i++) {
            opE.append('<option value="' + MagoE[i] + '">' + MagoE[i] + '</option>');
        }
    }
}
