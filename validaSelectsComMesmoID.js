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
