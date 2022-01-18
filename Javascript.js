// VARIABLES GLOBALES

/*  
  var web = $(document);
  var navicon = $(".menu-principal>.icon");
  var trigger = $(".trigger");
  var menu_link = $(".menu-principal .enlace");
  var seccion = $("section")  
  var menu_contenedor = $('.encabezado');
  var limites_menu = menu_contenedor.offset();
  var logo = $(".menu .logo img");
 */

// sending emails
const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email

nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    // Message object
    let message = {
        from: '#',
        to: 'markus.rutherford1@ethereal.email',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});


// document ready

/*
web.ready(function(){
    
  var anclas = $('a[href*="#"]:not(.mas-info)');
  var website = $('html, body');
  
// prevenir el salto de pagina en enlaces trigger
  trigger.click(function(event) {
    event.preventDefault();
  });  
  
  
  // prevenir el salto de pagina en enlaces trigger
  function anclando_A () {
    anclas.on("click", scroll_A);  
  };

  function scroll_A (){
    event.preventDefault();
    var _href = $(this).attr('href');
    website.animate({ scrollTop : $( _href ).offset().top-100 }, 'slow');
  }﻿;

  anclando_A();
  
  // Cuando scroll logo encabezado cambia
  
  $(window).on('scroll', function() {
    if($(window).scrollTop() > limites_menu.top) {
      menu_contenedor.addClass('logo-landing');
      logo.attr("src","http://eduholding.gutierrezedgar.com/img/logo-eduholding-movil.png");
    } else {
      menu_contenedor.removeClass('logo-landing');
      logo.attr("src","http://eduholding.gutierrezedgar.com/img/logo-eduholding-full.png");
    }    
  });
  
}); 
*/

