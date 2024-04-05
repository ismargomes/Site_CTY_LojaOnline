let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Remover a função de rolagem
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Esta função é usada para criar um efeito de slider simples, alternando a exibição de elementos consecutivos dentro de um elemento com o ID slider.  Isso cria a sensação de um slide de imagens ou conteúdo.
function sliderSimple(){
    let sliderActive = $("#slider .sliderActive");
    let sliderNext = sliderActive.next().length ? sliderActive.next() : $("#slider li:first");

    sliderNext.addClass('sliderActive').fadeIn(); //Cada elemento é exibido gradualmente usando o efeito de fade-in 
    sliderActive.removeClass('sliderActive').fadOut(); //enquanto o elemento anterior é ocultado gradualmente usando o efeito de fade-out.
}


// Esta função é usada para criar um slider automático utilizando jQuery. O resultado é um slider que exibe automaticamente os elementos em um loop contínuo. A função é definida usando o $ como atalho para o objeto jQuery e envolvida em outra função que é executada quando o DOM (Document Object Model) está pronto.
$(function(){

    $("#slider li:first").fadeIn(); // Ela exibe o primeiro elemento do slider 

    window.setInterval("sliderSimple()", 2000);// em seguida, chama a função sliderSimple() a cada 2 segundos para alternar para o próximo elemento do slider.
});


/**************************************************/
//==============  Menu Responsivo  ================/
/**************************************************/
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
  
    if(menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    }else {
      menuMobile.classList.add('open');
    }
  
  }


$('#form-contato').submit(function(){
    let nome = $('#nome');
    let apelido = $('#apelido');
    let morada = $('#morada');
    let telemovel = $('#telemovel');
    let email = $('#email');
    let tipo = $('#tipo')
    let prazo = $('#prazo')
    let erro = $('.alert');
    let campo = $('#campo-erro');


    erro.addClass('d-none'); //remover erro se não houver erro
    $('.is-invalid').removeClass('is-invalid');

    //validar nome
    if (nome.val() == '') {
        erro.removeClass('d-none')
        campo.html('nome'); //NOME DO CAMPO QUE NÃO FOI PREENCHIDO
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

        //validar apelido
    if(apelido.val() == ''){
        erro.removeClass('d-none');
        campo.html('apelido');
        apelido.focus();
        apelido.addClass('is-invalid');
        return false;
    }

        //validar morada
    if(morada.val()==''){
        erro.removeClass('d-none');
        campo.html('morada');
        morada.focus();
        morada.addClass('is-invalid');
        return false;
    }

    //validar telemovel
    if(telemovel.val()==''){
        erro.removeClass('d-none');
        campo.html('telemovel');
        telemovel.focus();
        telemovel.addClass('is-invalid');
        return false
    }

    //validar email
    if(email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email')
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    //validar Tipo
    if(tipo.val() == ''){
        erro.removeClass('d-none');
        campo.html('tipo')
        tipo.focus();
        tipo.addClass('is-invalid');
        return false;
    }

    //validar prazo
    if(prazo.val() == ''){
        erro.removeClass('d-none');
        campo.html('prazo')
        prazo.focus();
        prazo.addClass('is-invalid');
        return false;
    }

    //pode enviar os dados
    return true;
});


