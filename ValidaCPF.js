
	function TestaCPF(elemento) {
		cpf = elemento.value;
		cpf = cpf.replace(/[^\d]+/g, '');
		if (cpf == ''){
			elemento.value = ""
			return alert("CPF Invalido");
		}
		// Elimina CPFs invalidos conhecidos
		if (cpf.length != 11 ||
			cpf == "00000000000" ||
			cpf == "11111111111" ||
			cpf == "22222222222" ||
			cpf == "33333333333" ||
			cpf == "44444444444" ||
			cpf == "55555555555" ||
			cpf == "66666666666" ||
			cpf == "77777777777" ||
			cpf == "88888888888" ||
			cpf == "99999999999")
		{
			elemento.value = "";
			return alert("CPF Invalido");
		}
		// Valida 1o digito
		add = 0;
		for (i = 0; i < 9; i++)
		add += parseInt(cpf.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
		rev = 0;
		if (rev != parseInt(cpf.charAt(9)))
		{
			elemento.value = "";
			return alert("CPF Inválido !");
		}
		//elemento.style.backgroundColor = "red";
		// Valida 2o digito
		add = 0;
		for (i = 0; i < 10; i++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
		rev = 0;
		if (rev != parseInt(cpf.charAt(10)))
		{
			elemento.value = "";
			return alert("CPF Inválido !");
		}
		//elemento.style.backgroundColor = "red";
		//elemento.style.backgroundColor = "blue";
	}
