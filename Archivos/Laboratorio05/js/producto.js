//creamos un vector para el producto
var producto=[];
//creamos un procedimient para registrarlo
//categoria se va a registrar de un combobox -> select
//categoria: entretenimiento, tecnologia, linea blanca
function Registrar(nomproducto, preproducto, catproducto, canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}

//creamos una funcion para tener los valores del registro
function Mostrar(){
    return producto;
}