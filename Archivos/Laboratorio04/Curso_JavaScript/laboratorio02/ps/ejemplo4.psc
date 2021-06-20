Algoritmo Ejemplo4
	//definiendo variables
	definir nh,ch,sb,bon,des,sf Como Real;
	//inicializando variables
	nh=0; ch=0; sb=0; bon=0; des=0; sf=0;
	//capturando valores
	escribir "ingresa el numero de horas trabajadas:";
	leer nh;
	escribir "ingrse el costo por hora trabajada.";
	leer ch;
	//realizando operaciones
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	//mostrando resultados
	escribir "el sueldo basico es: ",sb;
	escribir " la bonificacion es: ",bon;
	escribir " el descuento es: ",des;
	escribir "el sueldo final es: ",sf;
	
	
FinAlgoritmo
