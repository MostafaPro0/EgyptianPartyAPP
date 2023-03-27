export class UI {
  constructor() {
    this.eventmenuopen();
    this.eventexitmenu();
    this.checkyourname();
    this.checkyouremail();
    this.checkyourmessage();
  }
  checkyourname() {

    document.querySelector('#yourname').addEventListener('keyup', (e) => {
      let regex = /^[a-zA-Z0-9]+$/;
      let erroelement = $('#yournamecheck').select();

      if (regex.test(e.target.value) == true) {
        $(erroelement).slideUp();
      }
      else {
        $(erroelement).html('Not Valid Name');
        $(erroelement).slideDown();
      }
    });
  }
  checkyouremail() {

    document.querySelector('#youremail').addEventListener('keyup', (e) => {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let erroelement = $('#youremailcheck').select();

      if (regex.test(e.target.value) == true) {
        $(erroelement).slideUp();
      }
      else {
        $(erroelement).html('Not Valid Email');
        $(erroelement).slideDown();
      }
    });
  }
  checkyourmessage() {
    document.querySelector('#yourmessage').addEventListener('keyup', (e) => {
      let lenthwrite = 100 - (e.target.value.length);
      if (lenthwrite > 0) {
        if ($('#char').hasClass('text-danger') || $('#char').hasClass('text-success')) {
          $('#char').removeClass('text-danger');
          $('#char').addClass('text-success');
        }
        $('#char').html(lenthwrite + " Character Reamining");
      }
      else {
        if ($('#char').hasClass('text-danger') || $('#char').hasClass('text-success')) {
          $('#char').addClass('text-danger');
          $('#char').removeClass('text-success');
        }
        $('#char').html("your available character finished Characyer Reamining");
      }
    });
  }
  displaynavbar() {
    $('.moloading').fadeIn(1000 / 4, function () {
      $('.moloading').fadeOut(2000 / 4, function () {
        $('.section1bg').animate({ 'height': '100vh' }, 500 / 4, function () {
          $('.section1bg').animate({ 'width': '100%' }, 500 / 4, function () {
            $('.mostafatext').typeWrite({
              speed: 2,
              repeat: true,
              color: 'white'
            })
            $('.maincontent').slideDown(500 / 4, function () {
              $('.btnopenleftmenu').html('☰ Open');
              $('.btnopenleftmenu').slideDown(500 / 4, function () {
                $('.totopicon').animate({ 'bottom': '20px' }, 500 / 4, function () {
                  $('.section2').slideDown(500 / 4, function () {
                    $('#singers').slideDown(500 / 4, function () {
                      $('.section3').slideDown(500 / 4, function () {
                        $('.mofooter').slideDown(500 / 4, function () {
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  eventexitmenu() {
    $('.exitbtn').click(function (e) {
      $('.btnopenleftmenu').animate({ 'margin-left': '0px' })
      $('.btnopenleftmenu').html('☰ Open');
      $('.maincontent').animate({ 'margin-left': '0px' })
      $('.leftMenu').animate({ 'width': '0px', 'left': '-200px' }, 100, function () {
        $('.logo').animate({ 'max-width': '0px' }, 100, function () {
          $('.menutitle').slideToggle(100, function () {
            $('.nav-item').slideToggle(100, function () {
            });
          });
        });
      });
    });
  }
  eventmenuopen() {
    $('.btnopenleftmenu').click(function (e) {
      if ($('.leftMenu').css("width") == "0px") {
        $('.btnopenleftmenu').animate({ 'margin-left': '200px' })
        $('.btnopenleftmenu').html('✘ Close');
        $('.maincontent').animate({ 'margin-left': '200px' })
        $('.leftMenu').animate({ 'width': '200px', 'left': '0' }, 250, function () {
          $('.logo').animate({ 'max-width': '40px' }, 250, function () {
            $('.menutitle').slideDown(250, function () {
              $('.nav-item').slideDown(250, function () {
              });
            });
          });
        });
      }
      else {
        $('.btnopenleftmenu').animate({ 'margin-left': '0px' })
        $('.btnopenleftmenu').html('☰ Open');
        $('.maincontent').animate({ 'margin-left': '0px' })
        $('.leftMenu').animate({ 'width': '0px', 'left': '-200px' }, 100, function () {
          $('.logo').animate({ 'max-width': '0px' }, 100, function () {
            $('.menutitle').slideToggle(100, function () {
              $('.nav-item').slideToggle(100, function () {
              });
            });
          });
        });
      }
    });
  }
}