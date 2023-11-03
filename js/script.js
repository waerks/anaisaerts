$(document).ready(function() {
  var divs = $('.item');
  var home = $('#home');
  var who = $('#who');
  var competences = $('#competences');
  var contact = $('#contact');

  var homeImages = home.find('.img1, .img2, .img3, .img4');
  var whoImages = who.find('.img1, .img2, .img3, .img4');
  var competencesImages = competences.find('.img1, .img2, .img3, .img4');
  var contactImages = contact.find('.img1, .img2, .img3, .img4');

  var homeTl = new TimelineMax({ paused: true });
  var whoTl = new TimelineMax({ paused: true });
  var competencesTl = new TimelineMax({ paused: true });
  var contactTl = new TimelineMax({ paused: true });

  // Créez une animation en utilisant stagger pour les images de la section "home"
  homeTl.staggerFromTo(
    homeImages,
    1, // Durée de l'animation en secondes
    { y: '100%' }, // Position de départ
    { y: '0' },   // Position finale
    0.2 // Intervalle entre les animations
  );

  // Créez une animation en utilisant stagger pour les images de la section "who"
  whoTl.staggerFromTo(
    whoImages,
    1, // Durée de l'animation en secondes
    { y: '100%' }, // Position de départ
    { y: '0' },   // Position finale
    0.2 // Intervalle entre les animations
  );

  competencesTl.staggerFromTo(
    competencesImages,
    1, // Durée de l'animation en secondes
    { y: '100%' }, // Position de départ
    { y: '0' },   // Position finale
    0.2 // Intervalle entre les animations
  );

  contactTl.staggerFromTo(
    contactImages,
    1, // Durée de l'animation en secondes
    { y: '100%' }, // Position de départ
    { y: '0' },   // Position finale
    0.2 // Intervalle entre les animations
  );

  // Lorsque la page est entièrement chargée, lancez l'animation GSAP pour la section "home"
  $(window).on("load", function() {
    homeTl.restart();
  });

  var sectionColors = {
    '#home': {
      active: '#apricot-200',
      inactive: '#apricot-800'
    },
    '#who': {
      active: '#cyan-aqua-200',
      inactive: '#cyan-aqua-800'
    },
    '#competences': {
      active: '#bittersweet-200',
      inactive: '#bittersweet-800'
    },
    '#contact': {
      active: '#victoria-200',
      inactive: '#victoria-800'
    }
  };

  // Masquer toutes les divs au chargement de la page, sauf la section "home"
  divs.hide();
  home.show();
  $('#home-link').addClass('active').addClass('slide-color-home');

  $('nav ul li a').click(function(e) {
    e.preventDefault();

    var target = $(this).attr('href');

    // Masquer toutes les divs
    divs.hide();

    // Afficher la section correspondante
    $(target).show();

    var slideClass = 'slide-color-' + target.substring(1);
    $('nav ul li a').removeClass('active').removeClass(slideClass);
    $(this).addClass('active').addClass(slideClass);

    $('nav ul li').removeClass('backdrop-blur-md');
    $(this).parent().addClass('backdrop-blur-md');

    // Lancer l'animation GSAP correspondante en fonction de la section
    if (target === "#home") {
      homeTl.restart();
    } else if (target === "#who") {
      whoTl.restart();
    } else if (target === "#competences") {
      competencesTl.restart();
    } else if (target === "#contact") {
      contactTl.restart();
    }

    $('nav ul li a').not(this).css('color', sectionColors[target].inactive);
  });

// Configuration EmailJS
emailjs.init("Bx6zvcZeoBoc-VPbh"); // Remplacez par votre ID EmailJS

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Récupérez le formulaire
  const form = this;
  // Créez un objet FormData pour le formulaire
  const formData = new FormData(form);

// Récupérez le fichier téléchargé
const fileInput = document.getElementById("user_avatar");
const file = fileInput.files[0];

// Préparez le contenu de la variable attachFile pour votre modèle EmailJS
const attachFile = file ? file : null;

// Utilisez EmailJS pour envoyer le formulaire en incluant le contenu du fichier
emailjs.sendForm("default_service", "template_3bnqkwm", {
    floating_first_name: this.floating_first_name.value,
    floating_last_name: this.floating_last_name.value,
    // ... autres champs du formulaire ...
    "user_avatar": attachFile // Assurez-vous que le nom de champ est "user_avatar"
})


  // Utilisez EmailJS pour envoyer le formulaire en incluant le fichier
  emailjs.sendForm("default_service", "template_3bnqkwm", formData)
      .then(function(response) {
          console.log("E-mail envoyé avec succès", response);
          // Affichez un message de confirmation sur la page
          alert("Votre message a été envoyé avec succès.");
      }, function(error) {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
          // Affichez un message d'erreur sur la page
          alert("Une erreur s'est produite lors de l'envoi du message.");
      });
});





});
