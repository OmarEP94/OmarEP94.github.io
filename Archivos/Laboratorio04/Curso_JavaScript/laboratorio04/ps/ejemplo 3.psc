Algoritmo Ejemplo3
	//definiendo variables
	definir bas, alt, area como real;
	definir men como texto;
	//inicializando variables
	bas=0; alt=0; area=0; men="";
	//capturando valores
	escribir "ingrese la base del rectangulo:";
	leer bas;
	escribir "ingrese la latura del rectangulo:";
	leer alt;
	//realizando operaciones
	area=bas*alt;
	//condicion
	si (area>100)Entonces
		men="es un rectangulo grande";
	SiNo
		men="es un rectangulo pequeño";
	FinSi
	//mostrando resultados
	escribir "el area del rectangulo es: ",area;
	escribir men;
FinAlgoritmo
