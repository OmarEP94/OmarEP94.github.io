Algoritmo Ejemplo2
	//definiendo variables
	definir tur, men como texto;
	//inicializando variables
	tur=""; men="";
	//capturando valores
	escribir "ingrese el turno M o T o N:";
	leer tur;
	//condicion
	si(tur="men") Entonces
		men="mañana";
	SiNo
		SI (tur="t") Entonces
			men="tarde";
		SiNo
			si(tur="n") Entonces
				men="noche";
			SiNo
				men="no es una letra valida";
			FinSi
		FinSi
	FinSi
	//mostrando resultados
	escribir "el turno es: ",men;
FinAlgoritmo
