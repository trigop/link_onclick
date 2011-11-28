jQuery(document).ready(function(){
  var handler = Drupal.settings.link_onclick.handler;
  
  jQuery(handler).click(function() {
    var classes = jQuery(this).attr('class');
    
    var class_array = classes.split(' ');
    
    jQuery.each(class_array, function(key, value){
      
      if (value.indexOf('nid-') >= 0){
        nid = value.replace('nid-', '');
	      //jQuery(console.log(nid));
      }  
    });
  
    //jQuery(console.log(class_array));
    
    //jQuery(console.log(jQuery(this).attr('class')));
    
    jQuery.get('node/' + nid , function(data){
	
      });
      
      //return false;
      });  
});


//#block-views-bloque_los_mas_vistos-block a