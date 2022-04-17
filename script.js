let resultado = 0;
let encrementoselect = 0;
let encrementotextarea = 0;
let encrementocheckbox = 0;
let encrementoradio = 0;
let encrementovorf = 0;
let percent = 0;
let percent1 = 0;
let percent2 = 0;
let percent3 = 0;
let percent4 = 0;
let percent5 = 0;

function corrigir(){

    // ("---------------- RETIRADA DA OCULTAÇÃO(display de none para block). -------------------")
    document.querySelector(".hide").style.display = "block";
    document.querySelector("#corr").style.display = "block";
    document.querySelector("#resp").style.display = "block";
    // ("---------------- RETIRADA DA OCULTAÇÃO(display de none para block). -------------------")

    // ("---------------- VALID NOME -------------------")
    let name = document.getElementById("texto").value;
    // ("---------------- VALID NOME -------------------")

    // ("---------------- VALID CAMPO SELECT -------------------")
    let select = document.getElementById("Q01").value;
    let res = document.getElementById("Q01").value;
    document.getElementById("sel").innerHTML = "1ª Questão: "
    document.getElementById("sel1").innerHTML = "1ª Questão: Informática"
    if (res == "Administração"){
        encrementoselect = 0;
        percent1 = 0;
        document.getElementById("sel").innerHTML = "1ª Questão: " + select;
        
    }else if (res == "Informática"){
        encrementoselect = 1;
        percent1 = 20;
        
        document.getElementById("sel").innerHTML = "1ª Questão: " + select;
    }else if (res == "Enfermagem"){
        encrementoselect = 0;
        percent1 = 0;
        
        document.getElementById("sel").innerHTML = "1ª Questão: " + select;
    }
    // ("---------------- VALID CAMPO SELECT -------------------")

    // ("---------------- VALID CAMPO TEXT AREA -------------------")
    let TextArea = document.getElementById("Q02").value;
    document.getElementById("area").innerHTML = "2ª Questão: " + TextArea;
    document.getElementById("area1").innerHTML = "2ª Questão: Administração, Enfermagem e Informática"

    
    let result = TextArea.includes("Informática");
    let result1 = TextArea.includes("Administração");
    let result2 = TextArea.includes("Enfermagem");
    
    if(result && result1 && result2){
        encrementotextarea = 1;
        percent2 = 20;
        
    }else{
        encrementotextarea = 0;
        percent = 0;
        
    }
    // ("---------------- VALID CAMPO TEXT AREA -------------------")

    // ("---------------- VALID CAMPO CHECKBOX -------------------")
    let Octal = document.getElementById("check1");
    let Binario = document.getElementById("check2");
    let Decimal = document.getElementById("check3");
    let Hexadecimal = document.getElementById("check4");
    document.getElementById("cBox").innerHTML = "3ª Questão:";
    document.getElementById("cBox1").innerHTML = "3ª Questão: Binário e Hexadecimal";
    if(Binario.checked && Hexadecimal.checked){
        encrementocheckbox = 1;
        percent3 = 20;
        
        document.getElementById("cBox").innerHTML = "3ª Questão: Binário e Hexadecimal";
    }else{
        encrementocheckbox = 0;
        percent3 = 0;
    }if (Octal.checked){
        encrementocheckbox = 0;
        percent3 = 0;       
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal";
    }if (Decimal.checked){
        encrementocheckbox = 0;
        percent3 = 0       
        document.getElementById("cBox").innerHTML = "3ª Questão: Decimal";
    }  if (Binario.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Binário";       
    }  if (Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Hexadecimal";
    }     if(Octal.checked && Decimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal e Decimal";
    }     if(Octal.checked && Binario.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal e Binário";
    }     if(Octal.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal e Hexadecimal";
    }     if(Binario.checked && Decimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Binário e Decimal";
    }     if(Binario.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Binário e Hexadecimal";
    }     if(Decimal.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Decimal e Hexadecimal";     
    }           if(Octal.checked && Decimal.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal, Decimal e Hexadecimal";
    }           if(Octal.checked && Binario.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal, Binário e Hexadecimal";
    }           if(Octal.checked && Binario.checked && Decimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Octal, Binário e Decimal";
    }           if(Binario.checked && Decimal.checked && Hexadecimal.checked){
        document.getElementById("cBox").innerHTML = "3ª Questão: Binário, Decimal e Hexadecimal";   
    }                  if(Octal.checked && Binario.checked && Decimal.checked && Hexadecimal.checked){
                    document.getElementById("cBox").innerHTML = "3ª Questão: Octal, Binário, Decimal e Hexadecimal";
    }

    // ("---------------- VALID CAMPO CHECKBOX -------------------")

    // ("---------------- VALID CAMPO RADIO -------------------")
    document.getElementById("radio").innerHTML = "4ª Questão:";
    document.getElementById("radio1").innerHTML = "4ª Questão: Limpa Contato";

    if(iso.checked){
        encrementoradio = 0;
        percent4 = 0;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Álcool Isopropílico";
    }else if (con.checked){
        encrementoradio = 1;
        percent4 = 20;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Limpa Contato";
    }else if(alc.checked){
        encrementoradio = 0;
        percent4 = 0;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Álcool 70%";
    }else if(agu.checked){
        encrementoradio = 0;
        percent4 = 0;
       
        document.getElementById("radio").innerHTML = "4ª Questão: Água";
    }
    // ("---------------- VALID CAMPO RADIO -------------------")

    // ("---------------- VALID CAMPO V or F -------------------")
    document.getElementById("vf").innerHTML = "5ª Questão: ";
    document.getElementById("vf1").innerHTML = "5ª Questão: Verdadeira";

    if(ver.checked){
        encrementovorf = 1;
        percent5 = 20;
        
        document.getElementById("vf").innerHTML = "5ª Questão: Verdadeira";
    }else if(fal.checked){
        encrementovorf = 0;
        percent5 = 0;
        
        document.getElementById("vf").innerHTML = "5ª Questão: Falsa";
    }
    // ("---------------- VALID CAMPO V or F -------------------")

    // ("---------------- CALCULANDO PERCENTUAL -------------------")
    percent = percent1 + percent2 + percent3 + percent4 + percent5;
    
    switch (percent){
        case 0: percentn = 100;
        break;
        case 20: percentn = 80;
        break;
        case 40: percentn = 60;
        break;
        case 60: percentn = 40;
        break;
        case 80: percentn = 20;
        break;
        case 100: percentn = 0;
        break;
        default: console.log("teste");
    }
    // ("---------------- CALCULANDO PERCENTUAL -------------------")

    // ("---------------- MOSTRANDO OS RESULTADOS -------------------")   
    resultado = encrementoselect + encrementotextarea + encrementocheckbox + encrementoradio + encrementovorf;
    document.getElementById("nome").innerHTML = "Nome: " + name;
    document.getElementById("corretas").innerHTML = "Corretas: " + resultado ;
    document.getElementById("percentual").innerHTML = "Percentual:   Acertos " + percent +"% " +" Erros "+ percentn +"%" ;
    // ("---------------- MOSTRANDO OS RESULTADOS -------------------")
}

