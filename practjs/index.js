$(document).ready(function(){
  $("#submit").click(function(){
    var name = $("#name").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();
    if (name == ""){
      alert("Enter your name");
    }
    else if (password == "") {
      alert("Enter your password");
    }
    else if (password2 == "") {
      alert("Repeat your password");
    }
    else if (password!=password2) {
      alert("Your password doesn't match");
    }
    else{
      alert("Your data is saved");
    }
  });
  $('#show').click(function(){
    $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  $('#show2').click(function(){
    $('#password2').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  var submit = $("#submit").hide();
  $('#show3').click(function(){
    $('#submit').fadeToggle(2000);
  });
  $('html').css('background-image', 'url("222.jpg")');
  $('#up').click(function(){
  $("html, body").animate({ scrollTop: 0}, 1000);
});
  $('#ggg').click(function(){
    $('#fff').fadeTo(2500, 0.5);
  });
  $('#btn1').click(function(){
    $('#box').height(400);
    $('#box').width(400);
  });
  $('#btn2').click(function(){
    $('#box').height(100);
    $('#box').width(100);
  });
});
