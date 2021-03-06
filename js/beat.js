// JS to Bit-Generation   --------------------------------------------------

//  Page move   -------------------------------------------------------------
function pageMove(){
  window.scrollBy(0, 15);
  if (window.pageYOffset < window.innerHeight) { requestAnimationFrame(pageMove); }
}
function pageMove2(){
  window.scrollBy(0, 15);
  if (window.pageYOffset < window.innerHeight*2) { requestAnimationFrame(pageMove2); }
}


//  Animation Control  ------------------------------------------------------
function AnimationElementHandler(e){
    $(e).removeClass("not-visible");
    $(e).addClass("animated fadeInUp visible");
};

var waypoints = $('.design').waypoint({
  handler: function(direction) {
    if (!$(this.element).hasClass("animated")){
      AnimationElementHandler(this.element);
    }
  },
  offset: function() {
    return  (Waypoint.viewportHeight()-100);
  }
});

$(document).ready(function() {
  $("#first-page").height(window.innerHeight);
  $("#bit-def").height(window.innerHeight);
  $(".title-block").css("padding-top", window.innerHeight*0.2);
  $(".def-block").css("padding-top", window.innerHeight*0.15);

  $(".arrow-down").bind("click", pageMove);
  $(".arrow-down-forward").bind("click", pageMove2);

  var timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1kb4DsOz21qho7TEVwlIub5AJIoq9PmsPkYNBPvMNswI');
  $('div.tl-text-content-container h2.tl-headline').css('font-size', '24px');
  $('div.tl-text-content-container h2.tl-headline').css('line-height', '28px');
  $('div.tl-slide-content').css('width', '100%');
  $('div.tl-text-content p').css('font-size', '14px');
  $('h3.tl-headline-date').css('font-size', '16px');
  $('div.tl-credit').css('width', '25%');
  $('div.tl-text').css('width', '75%');
});
