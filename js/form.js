$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); // Impede que a página seja recarregada
      
      // Captura os dados do formulário
      var formData = {
        'Nome': $('input[name=Nome]').val(),
        'Cidade': $('input[name=Cidade]').val(),
        'Classe': $('select[name=Classe]').val(),
        'Raça': $('select[name=Raça]').val(),
        'Arma': $('select[name=Arma]').val(),
        'Tutorial': $('input[name=Tutorial]').val(),
      };
      
      // Converte os dados em JSON
      var jsonData = JSON.stringify(formData);
      
      // Salva o JSON em um arquivo ou envia para um servidor
      // Exemplo de salvamento local usando FileSaver.js:
      var blob = new Blob([jsonData], {type: 'application/json'});
      saveAs(blob, 'form_data.json');
    });
  });
  