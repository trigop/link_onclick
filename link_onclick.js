jQuery(document).ready(function(){
  var contadorSalvado = function(){
    jQuery(console.log('Registrado'));
  }
  jQuery('#block-views-bloque_los_mas_vistos-block a').click(function() {
      jQuery.ajax({
        type: 'POST',
        url: this.href,
        dataType: 'json',
        success: contadorSalvado,
        data: 'js=1'
      });
      jQuery(console.log(this.href));
      
      return false;
      });  
});