
//before after slider created 5/7/15 abc news

setTimeout(function() {


// get all elements before/after containers
  var maindiv = document.getElementsByClassName('before_after_slider');


  for (var i = 0; i < maindiv.length; i++) {

    var beforeimageparent = maindiv[i].getElementsByClassName('beforeimage')[0];
    var beforeimagechild = beforeimageparent.getElementsByTagName('img')[0];
    var beforeimagewidth = beforeimagechild.naturalWidth;
    var beforeimageheight = beforeimagechild.naturalHeight;

    var afterimageparent = maindiv[i].getElementsByClassName('afterimage')[0];
    var afterimagechild = afterimageparent.getElementsByTagName('img')[0];
    var afterimagewidth = afterimagechild.naturalWidth;
    var afterimageheight = afterimagechild.naturalHeight;

    console.log("beforeimage" + beforeimagewidth + beforeimageheight)
    console.log("afterimage" + afterimagewidth + afterimageheight)



  }


setTimeout(function(){

  $('.before_after_slider').each(function() {
//for desktop sets dimensions
    if (window.innerWidth >= 640) {
      console.log("desktop")
      var setHeight = $(this).find('.beforeimage img').height();
      var setWidth = $(this).find('.beforeimage img').width();

      $(this).css('height', setHeight)

      $(this).find('.beforeimage img').attr('width', setWidth);
      $(this).find('.beforeimage img').attr('height', setHeight);


      $(this).find('.afterimage img').attr('width', setWidth);
      $(this).find('.afterimage img').attr('height', setHeight);

      // abc circle dragger
    // cache the selector
    var follower = $(this).find('#dragger');
    follower.css({
      left: "47%",
      top: "46%"
    });


    } 
// for mobile sets dimensions
    else if (window.innerWidth <= 639) {
      console.log("mobile")

      $('.before_after_slider').css('width', '300px');
      var setHeight = $(this).find('.beforeimage img').height();
      var setWidth = $(this).find('.beforeimage img').width();

      $(this).css('height', setHeight / 2)

      $(this).find('.beforeimage img').attr('width', setWidth / 2);
      $(this).find('.beforeimage img').attr('height', setHeight / 2);


      $(this).find('.afterimage img').attr('width', setWidth / 2);
      $(this).find('.afterimage img').attr('height', setHeight / 2);
// abc circle dragger
    // cache the selector
    var follower = $(this).find('#dragger');
    follower.css({
      left: "44%",
      top: "46%"
    });



    }

// before/after effect
    var $beforeimage = $(this).find('.beforeimage'),
      img_width = $('.beforeimage img').width(),
      init_split = Math.round(img_width / 2);

    $beforeimage.width(init_split);

    $(this).on('vmousemove', function(e) {
      var offX = (e.offsetX || e.clientX - $beforeimage.offset().left);
      $beforeimage.width(offX);


    });



    var mouseX = 0,
      mouseY = 0,
      limitX = $(this).width() - 15,
      limitY = $(this).height() - 15;
    $(this).on('vmousemove', function(e) {
      var offset = $(this).offset();
      var halfContWidth = $(this).width() / 2;
      var halfContHeight = $(this).height() / 2;
      mouseX = Math.min(e.pageX - offset.left, limitX);
      mouseY = Math.min(e.pageY - offset.top, limitY);
      if (mouseX < 0) mouseX = 0;
      if (mouseY < 0) mouseY = 0;


    });



    var xp = 0,
        yp = 0;
    $(this).on('vmouseover', function() {

      var loop = setInterval(function() {
        // change 12 to alter damping higher is slower
        xp += (mouseX - xp) / 2;
        yp += (mouseY - yp) / 2;
        follower.css({
          left: xp - 15,
          top: "46%"
        });

      }, 0);

    });

  });

}, 100);

}, 2500);






  
