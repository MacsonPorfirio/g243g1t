function abrir(num){
    for(let i = 1; i <= 5; i++){
        let id_aba = "aba"+i;z  
        let id_ab = "a"+i;
    document.getElementById(id_aba).disabled = false;
    document.getElementById(id_ab).style.display = "none";
    }
    if(num == "1"){
        document.getElementById("aba1").disabled = true;
        document.getElementById("a1").style.display = "block";
    }
    if(num == "2"){
        document.getElementById("aba2").disabled = true;
        document.getElementById("a2").style.display = "block";
    }
    if(num == "3"){
        document.getElementById("aba3").disabled = true;
        document.getElementById("a3").style.display = "block";
        pegar_hora();
        document.getElementById("hd").value = hd;
        document.getElementById("md").value = md;
        document.getElementById("sd").value = sd;;
    }
    if(num == "4"){
        document.getElementById("aba4").disabled = true;
        document.getElementById("a4").style.display = "block";
    }
    if(num == "5"){
        document.getElementById("aba5").disabled = true;
        document.getElementById("a5").style.display = "block";
    }
    
}


























setInterval(() => {
    hora atual() ; 
}, 1000);

function contador(){
    let início = document . getElementByld("inicio") . value;
    let fim = document . getElementByld("fim") . value;
    if(inicio != fim){
    	contar . clear interval();
}else{
    inicio++;
   document . getElementByld("valor") .innerHTML = início;
    }
    	
 
 
}

let contar = null;
let inicio = 0;
let fim = 0;
function iniciarContagem(){
	início = document . getElementByld("inicio") . value;
    let fim = document . getElementByld("fim") . value;
	setTimeout(() => {
	    contador();
	 }, 1000);
    }
let hd = 0;
let md = 0;
let sd =  0;
let alarme = 0;
function pegar_hora(){
    let d = new Date();
    hd = d.getHours();
    md = d.getMinutes();
    sd = d.getSeconds();
}
function ativar_alarme
    let d = new  Date();
    if(hd==d.getHours() && md==d.getMinutes() && sd==d.getSeconds()){
        clearInterval(alarme);
        alert("Alarme... Voltando para Aba3");
        abrir(3);
    }
{
function ligar_alarme();
    hd = document.getElementById("hd").value;
    md = document.getElementById("md").value;
    sd = document.getElementById("sd").value;
    alarme =setInterval(ativar_alarme.1000);
}
