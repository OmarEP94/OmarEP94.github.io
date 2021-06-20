Algoritmo Ejemplo1
	//definiendo variables
definir est como entero;
	definir men como texto;
	//inicializando variables
	est=0; men="";
	//capturando valores 
	escribir "ingrese el numero de estacion 1 o 2 o 3 o 4:";
	LEER EST;
	//condicion
	si(est=1) Entonces
		men="verano";
	SiNo
		si(est=2) Entonces
			men="otoño";
			
		SiNo
			si(est=3) Entonces
				men="invierno";
			SiNo
				si(est=4) Entonces
					men="primavera";
				SiNo
					men="no es un numero valido";
				FinSi
			FinSi
		FinSi
	FinSi
	escribir "la estacion es: ",men;
	
FinAlgoritmo
