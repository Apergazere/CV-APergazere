$(document).ready(function(){
      $('#box_experiencia').hide();
      $('#box_formacion').hide();
      $('#box_conocimientos').hide();
      $('#box_contacto').hide();
        document.getElementById("exp").addEventListener("click", function() {
               $('#box_experiencia').show();
               $('#box_formacion').hide();
               $('#box_conocimientos').hide();
               $('#box_contacto').hide();
               }, false);
        document.getElementById("for").addEventListener("click", function() {
                $('#box_formacion').show();
                $('#box_experiencia').hide();
                $('#box_conocimientos').hide();
                $('#box_contacto').hide();
                }, false);
        document.getElementById("cono").addEventListener("click", function() {
                $('#box_conocimientos').show();
                $('#box_experiencia').hide();
                $('#box_formacion').hide();
                $('#box_contacto').hide();
                }, false);
        document.getElementById("cont").addEventListener("click", function() {
                $('#box_contacto').show();
                $('#box_experiencia').hide();
                $('#box_formacion').hide();
                $('#box_conocimientos').hide();
                }, false);
        
        document.getElementById('#barra').addEventListener("click", function() {
                        $('#box_conocimientos').show();
                        $('#box_experiencia').show();
                        $('#box_formacion').show();
                        $('#box_contacto').show();
                        }, false);


})
    