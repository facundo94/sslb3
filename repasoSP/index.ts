$(document).ready(() => {
    var opE = $("#comboEquip");
    var opC = $("#comboClase");
    setComboClase(opC);
    opC.change(function(){
        var op = $("#comboClase option:selected").val();
        cambiarComboEquip(op, opE);        
    });
});

enum clase{
    "Guerrero", "Ninja", "Arquero", "Mago"
}

enum GuerreroE{
    "Acha", "Mandoble", "Maza"
}

enum NinjaE{
    "Kunai", "Shuriken", "Katana"
}

enum ArqueroE{
    "Arco madera", "Arco compuesto", "Ballesta"
}

enum MagoE{
    "Baston hielo", "Baston luz", "Baston fuego"
}

function setComboClase(opC:any){
    for(var i=0; i< Object.keys(clase).length / 2; i++) {
        opC.append('<option value="' + clase[i] + '">' + clase[i] + '</option>');
    }
}

function cambiarComboEquip(op:any, opE:any){
    opE.empty();
    if (op=="Guerrero") {
        for(var i=0; i< Object.keys(GuerreroE).length / 2; i++) {
            opE.append('<option value="' + GuerreroE[i] + '">' + GuerreroE[i] + '</option>');
        }
   }else if (op=="Ninja") {
    for(var i=0; i< Object.keys(NinjaE).length / 2; i++) {
        opE.append('<option value="' + NinjaE[i] + '">' + NinjaE[i] + '</option>');
    }
    }else if (op=="Arquero") {
        for(var i=0; i< Object.keys(ArqueroE).length / 2; i++) {
            opE.append('<option value="' + ArqueroE[i] + '">' + ArqueroE[i] + '</option>');
        }
   }else if (op=="Mago") {
    for(var i=0; i< Object.keys(MagoE).length / 2; i++) {
        opE.append('<option value="' + MagoE[i] + '">' + MagoE[i] + '</option>');
    }
    }
}