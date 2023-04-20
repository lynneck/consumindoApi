
async function buscaEndereco(cep) {
    var messagemErro = document.getElementById('erro');
    messagemErro.innerHTML  = "";

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepCovertida = await consultaCep.json();
        if(consultaCepCovertida.erro){
            throw Error('CEP não existente')
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')
        var estado = document.getElementById('estado')

        cidade.value = consultaCepCovertida.localidade;
        logradouro.value = consultaCepCovertida.logradouro;
        bairro.value = consultaCepCovertida.bairro;
        estado.value = consultaCepCovertida.uf;

        console.log(consultaCepCovertida);
        return consultaCepCovertida;
        
    } catch (erro) {
        messagemErro.innerHTML = `<p> CEP invalido. Tente novamente!<p>`
        console.log(erro)
        
    }

}


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
