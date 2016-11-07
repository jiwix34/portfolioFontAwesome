$(document).ready(function() {
  var hauteurfenetre = $(window).height();
  var grandeurformulaire = $(".container").height();
  var resultat = hauteurfenetre-grandeurformulaire;
  $(".container").css("margin-top", resultat/2+"px");


});
