Algoritmo Ejemplo4
	//definiendo variables
	definir can como entero;
	definir pre,sbt,des,igv, tot como real;
	definir cat, com como texto;
	//inicializando variables
	can=0; pre=0; sbt=0; des=0; igv=0; tot=0; cat=""; com="";
	//capturando valores
	escribir "ingresa la cantidad a comprar:";
	leer can;
	escribir "ingresa el precio del producto:";
	leer pre;
	escribir "ingresa la categoria:";
	leer cat;
	escribir "ingresa el tipo de comprobante ¨[f]factura o [b]boleta:";
	leer com;
	//realizando operaciones 
	sbt=can*pre;
	//condicion
	si (cat="d") Entonces
		des=sbt*0.07;
	SiNo
		des=sbt*0.03;
	FinSi
	
	si(com="f") Entonces
		igv=sbt*0.018;
	SiNo
		igv=0;
		
	FinSi
	tot=sbt-des+igv;
	//mostrando resultados
	escribir "el subtotal es: ",sbt;
	Escribir "el descuento es: ",des;
	escribir "el igv es: ",igv;
	escribir "el total es: ",tot;
	
	
	
FinAlgoritmo
