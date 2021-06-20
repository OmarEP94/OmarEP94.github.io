Algoritmo Ejemplo1
	//definiendo variables
	definir edad Como Entero;
	definir men como texto;
	//inicializando las variables
	edad=0; men="";
	//capturamps valores 
	escribir "ingresa tu edad:";
	leer edad;
	//condicion
	si (edad>18) Entonces
		men="eres mayor de edad";
	
	SiNo 
		men="eres menor de edad";
		
	FinSi
	//mostrando resultados
	escribir "la edad es: ",edad;
	escribir men;
FinAlgoritmo
