//preloader
setTimeout(function() {

  $(document).ready(function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  })

}, 2500);


//social shares


$('.tweetApp').on('click', function() {
  //var id = $(this).attr('id');
  var nameShare = $('title').text();
  var sTop = window.screen.height / 2 - (218);
  var sLeft = window.screen.width / 2 - (313);

  var url = $('link#canonical').attr('href');
  var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(nameShare + " " + " - @ABC") + " " + encodeURIComponent(url);
  window.open(shareUrl, 'sharer', 'toolbar=0,status=0,width=626,height=256,top=' + sTop + ',left=' + sLeft);
});



$('.fbshareApp').on('click', function() {

  //var id = $(this).attr('id');
  var picUrl = $('link[rel="image_src"]').attr('href');
  //console.log(picUrl)   
  var nameShare = $('title').text();

  FB.ui({
    method: 'feed',
    name: nameShare,
    link: $('link#canonical').attr('href'),
    picture: picUrl,
    caption: nameShare + "  " + " - @ABC"
  });
});