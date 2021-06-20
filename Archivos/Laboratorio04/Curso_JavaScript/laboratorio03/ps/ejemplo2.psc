Algoritmo Ejemplo2
	//definiendo  variables
	definir lad, area Como Entero;
	definir men como texto;
	//inicializando variables
	lad=0; area=0; men="";
	escribir "ingresa el lado del cuadrado:";
	leer lad;
	//realizando operaciones
	area=lad*lad;
	//condicion
	si(area>100) Entonces
		men="es un cuadrado grande";
		
	FinSi
	//mostrando resultados
	escribir "el area del cuadrado es: ",area;
	escribir men;
FinAlgoritmo
