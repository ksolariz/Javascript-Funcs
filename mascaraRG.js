 onkeyup="Rg(this.value,this)"  

function Rg(v,input){
    return input.value = v
    .replace(/\D/g,"") //Substituí o que não é dígito por "", /g é [Global][1]
    .replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")
    // \d{1,2} = Separa 1 grupo de 1 ou 2 carac. (\d{3}) = Separa 1 grupo de 3 carac. (\d{1}) = Separa o grupo de 1 carac.
    // "$1.$2.$3-$4" = recupera os grupos e adiciona "." após cada.      
}
     
