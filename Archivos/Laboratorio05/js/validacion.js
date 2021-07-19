//decalarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");


//creamos procedimiento para asignar la clase
function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+ m + '</li>';
}

//Creamos un procedimiento para validar
function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese un correo");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese un correo");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese un correo");
        txtCor.focus();
    }else{
        error.style.display='none';
    }
}

btnRegistrar.addEventListener("click", Validar);