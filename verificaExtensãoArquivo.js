function VerificaArquivo(campo)
    {
        var mensagem = 'Falha ao anexar arquivo!'
        var erro = 0
        var nomeCampo = campo.files[0].name
        var arrayNome = nomeCampo.split(".");
        var ultPosi = arrayNome.length - 1

        if(arrayNome[ultPosi].toUpperCase() != 'XLSX' && arrayNome[ultPosi].toUpperCase() != 'XLS' && arrayNome[ultPosi].toUpperCase() != 'CSV')
        {
            mensagem = mensagem + '\n- Extenção não suportada'
            erro = 1
        }

        if(erro != 0)
        {
            mensagem = mensagem + '\nPor favor, corrija o arquivo e anexe novamente para seguir com o envio da análise!\nExtensões permitidas: XLS, XLSX e CSV.'
            alert(mensagem)
            campo.value = '';
        }
    }
