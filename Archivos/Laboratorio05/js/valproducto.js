//decalarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var cboCategoria=document.getElementById("cboCategoria");


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
        LlamarClase("Por favor ingrese una categoría");
        txtNom.focus();
    }else if(txtPre.value=="" || txtPre.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese una categoría");
        txtPre.focus();
    }else if(cboCategoria.querySelector=="" || cboCategoria.querySelector==null){
        LlamarClase("Por favor ingrese una categoría");
        cboCategoria.focus();
    }else{
        error.style.display='none';
    }
}

btnRegistrar.addEventListener("click", Validar);