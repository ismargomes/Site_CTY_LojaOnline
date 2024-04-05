// Inclua Moment.js 

<script>
    document.getElementById('cadastroSite').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém a data e hora atual
    var dataAtual = moment();

    // Obtém a data e hora da consulta do formulário
    var dataConsulta = moment(document.getElementById('data').value + ' ' + document.getElementById('horario').value, 'YYYY-MM-DD HH:mm');

    // Calcula a diferença em horas
    var diferencaHoras = dataConsulta.diff(dataAtual, 'hours');

    // Verifica se a diferença é maior que 72 horas
    if (diferencaHoras > 72) {
        // Aqui você pode adicionar a lógica para permitir a edição/exclusão
        // Substitua este alerta pela sua lógica específica
        alert("Maior que 72 horas. Pode editar e excluir.");
    } else {
        // Caso contrário, mostra um alerta informando que não é possível editar
        alert("Falta menos de 72 horas para a sua consulta. Não é possível editar.");
    }
});
</script>
