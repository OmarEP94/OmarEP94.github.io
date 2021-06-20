Algoritmo Ejemplo3
	//definiendo variables
	definir n1,n2,prom como real;
	definir men como texto;
	//inicializando variables
	n1=0; n2=0; prom=0; men="";
	//capturando valores
	escribir "ingrese la nota 1:";
	leer n1;
	escribir "ingrse la nota 2:";
	leer n2;
	//realizando operaciones
	prom=(n1+n2)/2;
	//condicion
	si(prom>13) Entonces
		men="aprobado";
	FinSi
	//mostrando resultados
	escribir "el promedio es: ",prom;
	escribir men;
	
	
	
	
FinAlgoritmo
