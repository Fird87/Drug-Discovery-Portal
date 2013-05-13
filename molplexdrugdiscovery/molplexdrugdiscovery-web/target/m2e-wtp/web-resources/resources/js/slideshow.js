/**
 * Implement simple slideshow transition in concert with RuchFaces/Script.aculo.us.
 * Clients should call BHA_SlideShow.switchFrame to effect a smooth transition betweenn
 * two overlapping image (slide) elements.
 */
var BHA_SlideShow = function() {
 return {
 
 /**
 * Implement transition between two overlapping slide elements.
 * fromElementId: The slide element we're transitioning from. Its z-index should be 2 at the
 * start of this call. It will be moved down to 1.
 * toElementId: The slide element we're transitioning to. Its z-index should be 1 at the start
 * of this call. It will be moved up to 2.
 */
 switchFrame : function(fromElementId, toElementId, hideFunction) {
 var transitionTimeSec = 2.0
 hideFunction({targetId:fromElementId,duration:transitionTimeSec});
 setTimeout("BHA_SlideShow.reorderFrames('"+ fromElementId + "', '"+ toElementId +"')", transitionTimeSec * 10);
 },
 
 /**
 * Change the z-order of two elements.
 * newBottomElementId: The element to be moved to the bottom. It is given z-index 2.
 * newTopElementId: The element to be moved to the top. It is given z-index 1.
 */
 reorderFrames : function(newBottomElementId, newTopElementId) {
 document.getElementById(newTopElementId).style.zIndex = 2;
 document.getElementById(newBottomElementId).style.zIndex = 1;
 }
 };
 
 var $active = $('#slideshow-container div.active');
 
 if ( $active.length == 0 ) $active = $('#slideshow-container div:last');

 // use this to pull the images in the order they appear in the markup
 var $next =  $active.next().length ? $active.next()
     : $('#slideshow-container div:first');

 // uncomment the 3 lines below to pull the images in random order
 
 // var $sibs  = $active.siblings();
 // var rndNum = Math.floor(Math.random() * $sibs.length );
 // var $next  = $( $sibs[ rndNum ] );


 $active.addClass('last-active');

 $next.css({opacity: 0.0})
     .addClass('active')
     .animate({opacity: 1.0}, 1000, function() {
         $active.removeClass('active last-active');
     });
}

$(function() {
 setInterval( "slideSwitch()", 5000 );
});
}();