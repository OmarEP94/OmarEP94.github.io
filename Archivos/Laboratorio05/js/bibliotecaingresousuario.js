//declarando Variables para los controles 
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

//Creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//creamos un procedimiento para ingresar
function Ingresar(){
    if (txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if (txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");       
    } else {
        //Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //llamamos a la funcion de fireBase para validar ingreso
        auth.signInWithEmailAndPassword(cor, con)
        .then((userCredential) =>{
            alert("Bienvenidos al sistema");
            //nos dirigimos a la pagina11
            window.location="pagina11.html";
        })
        .catch((error) => {
            alert("Usuario o clave no valida");
            Limpiar();
        });
    }
}

//llamamos al procedimiento para ingresar
btnIngresar.addEventListener("click", Ingresar);
