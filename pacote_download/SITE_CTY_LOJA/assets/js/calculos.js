$('#form-contato').submit(function(){ // O trecho de código $('#form-contato').submit(function() indica o início de um manipulador de evento de envio de formulário usando jQuery.
    let nome = $('#nome');
    let apelido = $('#apelido');
    let morada = $('#morada');
    let telemovel = $('#telemovel');
    let email = $('#email');
    let tipo = $('#tipo')
    let prazo = $('#prazo')
    let erro = $('.alert');
    let campo = $('#campo-erro'); 
    //Ele seleciona elementos do formulário usando seletores jQuery e atribui a cada um uma variável para facilitar o acesso posterior.

   // Define variáveis para elementos de erro e um campo de erro, que provavelmente serão usados para exibir mensagens de erro ou validação no formulário.


    erro.addClass('d-none'); //remover erro se não houver erro. A classe "d-none" geralmente é usada para ocultar um elemento, 
    $('.is-invalid').removeClass('is-invalid'); // A classe "is-invalid" geralmente é usada para destacar campos inválidos em um formulário, portanto, essa linha está removendo o destaque de campos inválidos existentes antes de iniciar a validação.

    //validar nome
    if (nome.val() == '') { // Verifica se o valor do campo "nome" está vazio.
        erro.removeClass('d-none') // Remove a classe "d-none" do elemento com a classe "erro", tornando-o visível para exibir a mensagem de erro.
        campo.html('nome'); //NOME DO CAMPO QUE NÃO FOI PREENCHIDO CORRETAMENTE
        nome.focus(); // direcionando a atenção do usuário para esse campo.
        nome.addClass('is-invalid'); // Adiciona a classe "is-invalid" ao campo "nome", destacando visualmente que ele é inválido.
        return false; // Interrompe o processo de envio do formulário, retornando false. Isso impede que o formulário seja enviado se houver erros de validação.
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

    //validar nif
    if(nif.val() == ''){
        erro.removeClass('d-none');
        campo.html('nif')
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    //validar data_nasc
    if(data_nasc.val() == ''){
        erro.removeClass('d-none');
        campo.html('data_nasc')
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

    // indicaria que o evento de envio do formulário pode prosseguir. Enviando os dados
    return true;
});


// seleciona o elemento do documento com o ID "qtde" usando o document.querySelector() adiciona um ouvinte de evento ao elemento para o evento "change", o que significa que a função atualizarPreco será chamada sempre que o valor do elemento for alterado.
document.querySelector("#qtde").addEventListener("change", atualizarPreco) 
document.querySelector("#qsomos").addEventListener("change", atualizarPreco)
document.querySelector("#fotos").addEventListener("change", atualizarPreco)
document.querySelector("#eCommerce").addEventListener("change", atualizarPreco)
document.querySelector("#gi").addEventListener("change", atualizarPreco)
document.querySelector("#noticias").addEventListener("change", atualizarPreco)
document.querySelector("#rSociais").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", atualizarPreco) //  obtêm os valores dos elementos de seleção (checkboxes) correspondentes, armazenam e indicam se uma determinada opção está selecionada ou não.

function atualizarPreco(){ // A função atualizarPreco é chamada sempre que ocorre uma alteração nos elementos com os IDs "qtde", "qsomos", "fotos", "eCommerce", "gi", "noticias" e "rSociais". 

    const qtde = document.querySelector("#qtde").value; // obtém o valor do elemento com o ID "qtde" usando document.querySelector() e armazena o valor na variável qtde.
    let preco = qtde * 100; // linha calcula o preço multiplicando a quantidade (qtde) por 100. É assumido que cada unidade tem o valor de 100.
    
    const qsomos = document.querySelector("#qsomos").checked
    const fotos = document.querySelector("#fotos").checked
    const eCommerce = document.querySelector("#eCommerce").checked
    const gi = document.querySelector("#gi").checked
    const noticias = document.querySelector("#noticias").checked
    const rSociais= document.querySelector("#rSociais").checked
    
    
    if(qsomos) preco += 400 // verificam se cada opção está selecionada e, se estiver, adicionam um valor específico ao preço. No caso do código fornecido, cada opção selecionada adiciona 400 ao preço.
    if(fotos) preco += 400
    if(eCommerce) preco += 400
    if(gi) preco += 400
    if(noticias) preco += 400
    if(rSociais) preco += 400   
 
document.querySelector("#preco").innerHTML = `€ ${preco.toFixed(2)}`// Exibe preço e converte em string com duas casas decimais com o símbolo do euro (€).

desconto(preco)

} 

function desconto(preco){ // obtém o valor do elemento com o ID "prazo" usando document.querySelector(). 

    const prazo = parseInt(document.querySelector("#prazo").value); // O valor obtido é convertido em um número inteiro usando parseInt() e armazenado na variável prazo.
    let precoFinal = preco;
    
    if(prazo == 1){ // verificam o valor do prazo e aplicam um desconto ao precoFinal com base no valor do prazo selecionado.
        precoFinal = preco * 0.95 //  descontos são calculados multiplicando o precoFinal por um fator (0.95)
    } else if (prazo == 2){
        precoFinal = preco * 0.9
    } else if (prazo <= 4){
        precoFinal = preco * 0.85
    } else if (prazo >=5){
        precoFinal = preco * 0.8
    } 

document.querySelector("#desc").innerHTML = `€ ${precoFinal.toFixed(2)}`; // Exibe preço final com desconto e converte em string com duas casas decimais com o símbolo do euro (€).
}


 
