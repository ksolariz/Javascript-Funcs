  function impedeAData(data){

   //Pega o valor data
   var dataInput = new Date(data)
   var dataAtual = new Date()
   if (dataAtual < dataInput)
{
     alert('A data não pode ser maior que a data atual.')
     data.value =  undefined
}


}
