/*
 * JS that supports the registration pages
 */

$(".register-link" ).click(function() {
  var btn = $(this);

  // toggle button between 'Registered' and 'Register' states
  if (btn.hasClass('btn-primary')) {

      btn.text('Registered').removeClass('btn-primary');
  } else {
      btn.text('Register').addClass('btn-primary');
  }

});

