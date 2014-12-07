function animationHover(Brand, pulse){
  element = $(Brand);
  element.hover(
    function() {
      element.addClass('.animated '+ pulse);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('.animated ' + pulse);
      }, 2000);
    }
  );
};