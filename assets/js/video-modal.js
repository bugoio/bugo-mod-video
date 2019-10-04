if(!video){
  // var video = document.createElement('script');
  // video.src = "https://player.video.com/api/player.js";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(video, firstScriptTag);
}

$(document).ready(function(){

  $('.video-link').on('click',function(e){
    // e.preventDefault();
    //   var videoid = $(this).attr('data-videoid');
    //   // var target = $(this).attr('data-target');
    //   var modal = $(this).attr('data-modal');
    //   console.log(modal);

    //   var options = {
    //     id: videoid,
    //     width: 640,
    //     loop: false,
    //     autoplay: true
    //   };

    //   var iframe = $('.iframe-wrapper')
    //   var player = new video.Player(iframe, options);
    //   console.log(player);
    //   player.play();
    //   $('#' + modal).toggleClass('open');

    //   $('.video-modal').on('click',function(){
    //     console.log($(this).is('.open'),'clicked');
    //     if($(this).is('.open')){
    //       $('.video-modal').removeClass('open');
    //       player.pause();
    //     }
    //   });

    //   $('.iframe-wrapper').on('click',function(e){
    //     e.stopPropagation();
    //   });
  });
});