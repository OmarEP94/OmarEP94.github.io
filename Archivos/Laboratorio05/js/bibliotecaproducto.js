var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var cboCategoria=document.getElementById("cboCategoria")
var btnRegistrar=document.getElementById("btnRegistrar");

function MostrarProducto(){
    var listaproducto=Mostrar();

    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";

    for(var i=0; i<listaproducto.length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocategoria=fila.insertCell(2);
        var titulocantidad=fila.insertCell(3);
        //agregamos valores
        titulonombre.innerHTML=listaproducto[i].nombre;
        tituloprecio.innerHTML=listaproducto[i].precio;
        titulocategoria.innerHTML=listaproducto[i].categoria;
        titulocantidad.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

function RegistrarProducto(){
    //capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var cat=cboCategoria.options[cboCategoria.selectedIndex].text;
    var can=txtCan.value;
    //llamos al procedimiento Registrar
    Registrar(nom,pre,cat,can);
    MostrarProducto();
}

btnRegistrar.addEventListener("click",RegistrarProducto);