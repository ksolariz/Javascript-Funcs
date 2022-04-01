function validaDataRetroativa(data){
		   //Passar um THIS na função para indicar o elemento
		   //Pega o valor data no input
		   var dataInput = new Date(data.value)

		   //Pega o valor data atual
		   var dataAtual = new Date()

		   //Acrescenta mais 30 dias na data atual
		   dataAtual.setDate(dataAtual.getDate() + 30);


		   if (dataInput < dataAtual)
		{
		     alert('A data deve ser no mínimo 30 dias a mais do que a data atual.')
		     data.value =  undefined
		}


	}	
