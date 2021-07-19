//Declaramos variables para los controles

var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para limpiar

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//creamos un procedimiento para registrar
function Registrar(){

    if(txtCor.value == "" || txtCor.value == null){
    alert("Ingrese el correo");
    txtCor.focus();
    }else if(txtCon.value == "" || txtCon.value == null){
        alert("Ingrese su contraseña");
        txtCon.focus();        
    }else{
        //Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamando al codigo de Firebas para registrar
        auth.createUserWithEmailAndPassword(cor, con)
    .then((userCredential) => {
    alert("Se registro correctamente");
    Limpiar();
    })
    .catch((error) => {
    alert("No se pudo registrar")
    Limpiar();
    });
    }
} 
//asignamos el procedimiento al boton
btnRegistrar.addEventListener("click", Registrar);