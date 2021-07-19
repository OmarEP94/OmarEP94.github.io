//Creamos un vector que contenga la informacion 
var registro=[];

//Creamos un procedimiento para registrarlo
function Registrar(nombreregistro,apellidosregistro,correoregistro){
    var NuevoRegistro={
        nombre:nombreregistro,
        apellido:apellidosregistro,
        correo:correoregistro
    };
    registro.push(NuevoRegistro);
}

//creamos una funcion para obtener los valores del registro
function Mostrar(){
    return registro;
}