$(document).ready(function(){
  //splash
  /*  setTimeout(function() {
      $('.preload').fadeOut(500);
  }, 3000);  
 */
 //fin splash
  var nSections = $('section').length;
  var pos = 2;
  var phoneNumber = '';
  var vCode = '';
  
  $('section').hide();
  $('section.index').show();
  $('#singUp').click(function(){
    $('section').hide();
    $('body section:nth-child(2)').show();
    $('#demo').val('');
  });
  $('input.next').click(next);  
  $('.singUp .next').click(function(){
    function code() {
      var code = "";
      var str = "123456789";
      for (var i = 0; i < 3; i++) {
        code += str.charAt(Math.floor(Math.random() * str.length));
      }
      vCode = code;
      return code;
    } 
    $('#random').text(code);
    $('#verifyCodeModal').modal('show');
  })
  $('#codeButton').click(function(){
    $('#phone').text(phoneNumber);
  })
  $('.inputCode').keyup(function(){
    var userCode = $('.inputCode').val();
    if (userCode === vCode) {
      $('.verify .next').removeAttr("disabled");
      $('.verify .next').css({
        'backgroundColor':'rgb(228, 34, 228)',
        'color': '#fff'
      })
    } else {
      $('.verify .next').attr("disabled", true);
    }
  })
  $('.inputLogin').keyup(function(){
    var user = $('#user').val(); 
    var mail = $('#mail').val();
    if (user.length !== 0 && mail.length !== 0 &&
      $('#checkTerm').is(':checked')) {
        $('.login .next').removeAttr("disabled");
        $('.login .next').css({
          'backgroundColor':'rgb(228, 34, 228)',
          'color': '#fff'
        })
    } else {
      $('.login .next').attr("disabled", true);
    }
  }) 
  $('#checkTerm').click(function(){
    var user = $('#user').val(); 
    var mail = $('#mail').val();
    if (user.length !== 0 && mail.length !== 0 &&
      $('#checkTerm').is(':checked')) {
      $('.login .next').removeAttr("disabled");
      $('.login .next').css({
        'backgroundColor':'rgb(228, 34, 228)',
        'color': '#fff'
      })
    } else {
      $('.login .next').attr("disabled", true);
    }
  })
  $('i.left').click(prev);
  $('#demo').intlTelInput(); 
  $('#demo').keyup(function(){
    phoneNumber = $('#demo').val();
    if (phoneNumber.length === 10) {
      $('.singUp .next').removeAttr("disabled");
      $('.singUp .next').css({
        'backgroundColor':'rgb(228, 34, 228)',
        'color': '#fff'
      })
    } else {
      $('.singUp .next').attr("disabled", true);
    }
  })  
  $('#resend').click(function(){
    function code() {
      var code = "";
      var str = "123456789";
      for (var i = 0; i < 3; i++) {
        code += str.charAt(Math.floor(Math.random() * str.length));
      }
      vCode = code;
      return code;
    }
    $('#random').text(code);
    $('#verifyCodeModal').modal('show');
  })
  function next() {
    if (pos < nSections) {
      pos++;
    }
    $('section').hide();
    $('body section:nth-child(' + pos + ')').show();
  }
  function prev() {
    if (pos > 1) {
      pos--;
    }
    $('section').hide();
    $('body section:nth-child(' + pos + ')').show();
    // $('#demo').val('');
  }
  
  
}) 