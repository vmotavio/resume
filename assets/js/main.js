jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

document.addEventListener("DOMContentLoaded", function() {
    // Defina a variável global
    var site_language = "pt";
  
    // Altere o valor da variável global
    function changeLanguage(newLanguage) {
      site_language = newLanguage;
      console.log("Idioma alterado para: " + site_language);
    }
  
    // Exemplo de como usar a função para alterar o idioma
    changeLanguage("en");
  });