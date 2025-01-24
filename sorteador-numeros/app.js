function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteado = [];
    
    for(let i = 0; i < quantidade; i++){
        let numero = obterNumeroAleatorio(de,ate);
        while(sorteado.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }

        sorteado.push(numero);
    }
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteado}</label>`
    alterarStatusBotao();
}

function reiniciar(){
    parseInt(document.getElementById("quantidade").value) = 0;
    parseInt(document.getElementById("de").value) = 0;
    parseInt(document.getElementById("ate").value) = 0;
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao")
    }else{
        botao.classList.remove("container__botao")
        botao.classList.add("container__botao-desabilitado")
    }
}

function obterNumeroAleatorio(min,max){
    return parseInt((Math.random() * (max - min + 1)) + min);
}
