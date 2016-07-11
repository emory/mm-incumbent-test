//= require vendor/jquery.min
//= require plugins/jquery.typed.min

$(document).ready(function(){

  $("body").addClass("js");

  // toggle overlay navigation
  $(document).on('click', '.overlay__menu-trigger', function() {
    // in Firefox transitions break when parent overflow is changed, so we need to wait for the end of the transition to give the body an overflow hidden
    if( $('.overlay__menu').hasClass('is--visible') ) {
      $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
    else {
      $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
  });

  // close overlay navigation on button click
  $('.overlay__menu-close, #screen').on('click', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // open/close overlay navigation on focus
  $('.overlay__menu-item a').on('focus', function(){
    $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });
  $('.overlay__menu-close').on('focus', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // close menu on [esc]
  $(document).on('keydown', function(e){
    if ( e.keyCode === 27 ) { // ESC key
      $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
  });

  // home page auto typing
  $("#js-home-typed").typed({
    strings: ["<span class='glitch__title'>emory</span> <span class='br'></span> <h1>.plan ^500</h1><span class='br'></span> * Continue training in aikido again (after 17 years away). ^500<span class='br'></span>* Finish unpacking and re-boxing ^500<span class='br'></span>* OmniFocus Review Habit-building ^500<span class='br'></span>^500<span class='br'></span>please to read some <a href='https://incumbent.org/articles/'>articles</a>, my current <a href='https://incumbent.org/casting/'>castings</a>, and <a href='https://incumbent.org/about/'>more about me</a>.^500 <span class='br'></span>"],
    contentType: "html",
    startDelay: 0,
    backDelay: 3000,
    callback: function(){
      glitch_secondary();
    }
  });

  // 404 page auto typing
  $("#js-404-typed").typed({
    strings: ["<span class='glitch__title'>It is dangerous to go &nbsp;alone. Take this: ^500</span> <span class='br'></span> Sorry, but the page you were trying to view has moved or does not exist. Perhaps you can <a href='https://incumbent.org/sitemap/' title='ye olde sitemap'>find it here</a> or by searching below."],
    contentType: "html",
    startDelay: 0,
    backDelay: 3000,
    callback: function(){
      glitch_secondary();
    }
  });

  // reveal secondary container at auto typing completion
  function glitch_secondary(){
    $(".typed__secondary").css("opacity", "1");
  }

});
