     $(document).ready(function() {

     			// alert("parallax.js loaded")

         $('div[data-type="background"]').each(function() {
             var $bgobj = $(this); // assigning the object


             $(window).scroll(function(){

             	var yPos = -($window.scrollTop() / $bgobj.data('speed'));
             	//final Background Position
             	var coords = '50% ' + yPos + "px";

             	//Move Background
             	$bgobj.css({ backgroundPosition: coords})

             })
         });

     });


//      $("HTML").on("click", function(){
//     // toggle div under button
//     alert("html onMouseover");
//     $("#hmtlProgressBar").toggle();
//     //create div under button
//     // ($<div >)


// });

