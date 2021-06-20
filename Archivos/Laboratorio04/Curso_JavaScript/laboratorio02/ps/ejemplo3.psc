Algoritmo Ejemplo3
	//definiendo variables
	definir pre, sbt, igv, tot Como Real;
	definir can Como Entero;
	//inicializando variables
	pre=0; sbt=0; igv=0; tot=0;
	//capturando valores
	escribir "ingresa el precio del producto:";
	leer pre;
	escribir "ingresa la cantidad a comprar del producto:";
	leer can;
	//realizando operaciones
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	//mostrando resultados
	escribir "El subtotal es: ",sbt;
	escribir "El igv: ",igv;
	escribir "El total es: ",tot;
	
	
FinAlgoritmo
