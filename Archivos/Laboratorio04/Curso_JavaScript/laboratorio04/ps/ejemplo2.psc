Algoritmo Ejemplo2
	//definiendo variables
	Definir n1,n2,n3,n4,prom como real;
	definir men como texto;
	//inicializando variables
	n1=0; n2=0; n3=0; n4=0; prom=0; men="";
	//capturando valores
	escribir "ingresa la nota 1:";
	leer n1;
	escribir "ingresa la nota 2:";
	leer n2;
	escribir "ingrese la nota 3:";
	leer n3;
	escribir "ingrese la nota 4:";
	leer n4;
	//realizando operaciones
	prom=(n1+(2*n2)+n3+(3*n4))/7;
	//condicion
	si (prom>13) Entonces
		men="aprobado";
	SiNo
		men="desaprobado";
	FinSi
	//mostrando resultados
	escribir "el promedio es: ",prom;
	escribir men;
FinAlgoritmo
