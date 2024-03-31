//========= MENU RESPONSIVO ========//

var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight ="0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight ="200px";

    }else{
        MenuItens.style.maxHeight ="0px";
    }
}

//Definir os var que mudará e se movimentará
var EntrarPainel = document.getElementById("EntrarPainel");
var CadastroSite = document.getElementById("CadastroSite");
var Indicador = document.getElementById("Indicador");

//Pegar as funções do formulário

function Cadastro(){
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";

}

 function Entrar(){
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
 }