$(function(){
$('button').bind('click', function(){
  var altura = $('#altura').val();
  var peso = $('#peso').val();
  altura.replace(',','.');
  peso.replace(',','.');
  var imc = peso / (altura*altura); 

  if (imc < 16){
      var traducao='Baixo peso muito grave';
      $('#resultado').css('background-color', '#FF0000');
  } else if(imc >= 16 && imc < 16.99) {
      var traducao='Baixo peso grave';
      $('#resultado').css('background-color', '#FF0000');
  } else if(imc >= 17 && imc < 18.49) {
      var traducao='Baixo peso';
      $('#resultado').css('background-color', '#FF0000');
  } else if (imc >=18.50 && imc < 24.99) {
      var traducao='Peso normal';
      $('#resultado').css('background-color', '#008000');
  } else if (imc >= 25 && imc < 29.99){
      var traducao ='Sobrepeso';
      $('#resultado').css('background-color', '#FFFF00');
  } else if (imc >= 30 && imc < 34.99){
      var traducao='Obesidade grau 1';
      $('#resultado').css('background-color', '#FF0000');
  } else if(imc >=35 && imc < 39.99){
      var traducao='Obesidade grau 2';
      $('#resultado').css('background-color', '#FF0000');
  } else if(imc >=40) {
      var traducao='Obesidade grau 3'; 
      $('#resultado').css('background-color', '#FF0000');
  }

  

$('#resultado').html("Seu IMC é:" + imc +"kg/m2 e seu status é:"+ traducao); 
});
});
