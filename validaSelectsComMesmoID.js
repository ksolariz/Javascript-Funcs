x = document.querySelectorAll("#txtSubAreaBiling")
mensagem = ''
for(i=0;i<x.length;i++){
    console.log(x[i].value)
    if(x[i].value == 0){
        mensagem += `Selecione a Sub-Área - linha ${i+1}\n`
    }
}
if(mensagem != ''){
   alert(mensagem)   
}

function AbrirRS() {
			
			sub = document.querySelectorAll("#txtSubAreaBiling")
			areas = document.querySelectorAll("#slcIdAreaTableBiling")
			mensagem = ''
			for(i=0;i<areas.length;i++){
			    console.log(areas[i].value)
			    if(areas[i].value == 0){
			        mensagem += `Selecione a Área - linha ${i+1}\n`
			    }
			}
		
			
			for(i=0;i<sub.length;i++){
			    console.log(sub[i].value)
			    if(sub[i].value == 0){
			        mensagem += `Selecione a Sub-Área - linha ${i+1}\n`
			    }
			}

			if(mensagem != ''){
			   alert(mensagem)   
			}else{
				document.getElementById("hdnAbrirRS").value = 1;
				document.getElementById('formSolicitaDocs').submit();
			}

			

	
	</script>
