//Creamos un vector que contenga la informacion 
var registro=[];

//Creamos un procedimiento para registrarlo
function Registrar(nombreproducto,precioproducto,categoriaproducto,cantidadproducto){
    var NuevoRegistro={
        nombre:nombreproducto,
        precio:precioproducto,
        categoria:categoriaproducto,
        cantidad:cantidadproducto
    };
    registro.push(NuevoRegistro);
}

//creamos una funcion para obtener los valores del registro
function Mostrar(){
    return registro;
}