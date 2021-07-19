var txtNom=document.getElementById("txtNom")
var txtApe=document.getElementById("txtApe")
var txtDNI=document.getElementById("txtDNI")
var cboCategoria=document.getElementById("cboCategoria")
var txtCan=document.getElementById("txtCan")
var btnRegistrar=document.getElementById("btnRegistrar")

//creamos un procedimiento para mostrar
function MostrarRegistro(){
    //Declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    //Seleeciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //agregamos las columnas que se registren 
    for(var i=0; i<listaregistro. length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocategoria=fila.insertCell(2);
        var titulocantidad=fila.insertCell(3);
        //agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloprecio.innerHTML=listaregistro[i].precio;
        titulocategoria.innerHTML=listaregistro[i].categoria;
        titulocantidad.innerHTML=listaregistro[i].cantidad;
        tbody.appendChild(fila);
    }
}

//Creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //Capturando Valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var cat=cboCategoria.value;
    var can=txtCan.value;    

    //Llamamos al procedimiento Registrar
    Registrar(nom,pre,cat,can);
    MostrarRegistro();
    
}

//asignamos la funcion registrar datos
btnRegistrar.addEventListener("click", RegistrarDatos);

