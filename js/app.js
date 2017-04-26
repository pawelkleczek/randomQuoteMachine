$(document).ready(function() {

  var tweet = "";

  $("#getQuote").on("click", function() {

    $.getJSON("https://codepen.io/pawelkleczek/pen/ZpjkxK.js", function(json) {

      var html = "";

      var random = Math.floor(Math.random() * 45);

      json = json.filter(function(val) {

        return (val.id === random);

      });

      json.forEach(function(val) {

        html = "<br>" + val.quote + "<br><br>" + "<div class= 'text-right author'>" + "<i>" + "- " + val.author + "</i>" + "</div>";
        tweet = val.quote + " Author: " + val.author + " #freecodecamp";

      });

      $(".quote").html(html);

    }); //getJSON closing tags

  }); //getQuote "click" closing tags


  $("#twitter").on("click", function() {

    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet));

  });

});  // Doc.ready closing tags
