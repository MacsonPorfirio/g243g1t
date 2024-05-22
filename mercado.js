const Fila = (_saidaFila) => {
    let dados = [];
    let saidaFila = _saidaFila;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const tamanhoFila = () => dados.length;
    const filaVazia = () => dados.length < 1;
    const desenfileirar = () => {
        let retirado = null;
        if(filaVazia()){
            retirado = dados.splice(0,1);
            imprimir();

        }
        return retirado;
    }
    const imprimir = () => {
        let dadosSaida = "";
        for(let i=0; i < tamanhoFila(); i++){
            dadosSaida += "["+dados[i].id + "("+dados[i].itens+")] ";
        }
        document.getElementById(saidaFila).innerHTML = dadosSaida;
    }
    return {enfileirar,desenfileirar}
}

const f1 = Fila("saidaFila1");
const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const Cliente = (_id,_itens) =>{
      return {
        id:_id,
        itens:_itens
      }
}

const caixaChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C1").innerHTML = cliente;
        "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 1000;
        setTimeout(function(){
            caixaChamaProximo();
     },tempo);
}else{
    if(clientesParaAtender > 0){
        setTimeout(function(){
            caixaChamaProximo();
        },gerarItens()*50);

    }
  }
}
const caixa2ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C2").innerHTML = cliente;
        "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 1000;
        setTimeout(function(){
            caixa2ChamaProximo();
     },tempo);
}else{
    if(clientesParaAtender > 0){
        setTimeout(function(){
            caixa2ChamaProximo();
        },gerarItens()*50);

    }
}
}
const caixa3ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C3").innerHTML = cliente;
        "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 1000;
        setTimeout(function(){
            caixa3ChamaProximo();
     },tempo);
}else{
    if(clientesParaAtender > 0){
        setTimeout(function(){
            caixa3ChamaProximo();
        },gerarItens()*50);

    }
}
}
const caixa4ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C4").innerHTML = cliente;
        "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 1000;
        setTimeout(function(){
            caixa4ChamaProximo();
     },tempo);
}else{
    if(clientesParaAtender > 0){
        setTimeout(function(){
            caixa4ChamaProximo();
        },gerarItens()*50);

    }
}
}
const maxClientes = 50;
const filaInicial = 5;
let clientesParaAtender = maxClientes - filaInicial;
let idCliente = filaInicial + 1;
const entrarNaFila = () =>{
    if(clientesParaAtender > 0){
    f1.enfileirar(Cliente("C"+i,gerarItens()));
    clientesParaAtender--;
    idCliente++;
    setTimeout(entrarNaFila,gerarItens()*500);
    }

}

(function(){
    for(let i=1; i <= filaInicial; i++){
        f1.enfileirar(Cliente("C"+i,gerarItens()));
    }
    caixaChamaProximo();
    caixa2ChamaProximo();
    caixa3ChamaProximo();
    caixa4ChamaProximo();
    entrarNaFila();
})();