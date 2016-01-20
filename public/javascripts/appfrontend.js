// Front end js
$(document).ready(function()
{
  $('.img-container img').click(function()
  {
	  if ( $('#picModal').css('visibility') == 'hidden' )
	    $('#picModal').css('visibility','visible');
	  else
	    $('#picModal').css('visibility','hidden');
  });  
});