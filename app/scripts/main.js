// Avoid `console` errors in browsers that lack a console.
( function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = ( window.console = window.console || {} );

  while ( length-- ) {
    method = methods[ length ];

        // Only stub undefined methods.
    if ( !console[ method ] ) {
      console[ method ] = noop;
    }
  }
}() );
//Mobile Check
var mobileCheck = {
  ios: (function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }()),
  android: (function(){
    return navigator.userAgent.match(/Android/i);
  }()),
  blackBerry: (function(){
    return navigator.userAgent.match(/BB10|Tablet|Mobile/i);
  }()),
  windows: (function(){
    return navigator.userAgent.match(/IEMobile/i);
  }()),
  smartphone: (function(){
    return (window.innerWidth <= 384 && window.innerHeight <= 640);
  }()),
  tablet: (function(){
    return (navigator.userAgent.match(/Tablet|iPad|iPod/i) && window.innerWidth <= 1280 && window.innerHeight <= 800);
  }()),
  all: (function(){
    return navigator.userAgent.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  }())
};
//Header
  var clickevent = mobilecheck() ? 'touchstart' : 'click';

  var items = $( '.slide' );
  var content = $( '.content' );

  function open() {

    $( items ).removeClass( 'close' ).addClass( 'open' );

  }

  function close() {

    $( items ).removeClass( 'open' ).addClass( 'close' );

  }

  $( '#navToggle' ).on( clickevent, function() {

    event.stopPropagation();
    event.preventDefault();
    if ( content.hasClass( 'open' ) ) {

      close();

    } else {

      open();

    }

  } );
  content.click( function() {

    if ( content.hasClass( 'open' ) ) {

      close();

    }

  } );

} );

//Smooth scrolling
$( function() {

  $( 'a[href*=#]:not([href=#])' ).click( function( e ) {

    e.preventDefault(); {

      if ( location.pathname.replace( /^\//, '' ) === this.pathname.replace( /^\//, '' ) && location.hostname === this.hostname ) {
        var target = $( this.hash );
        target = target.length ? target : $( '[name=" + this.hash.slice( 1 ) + "]' );
        if ( target.length ) {

          $( 'html,body' ).animate( {
            scrollTop: target.offset().top
          }, 1000 );
          if ( matchMedia( 'only screen and (max-width: 1100px)' ).matches ) {

            $( 'html,body' ).animate( {
              scrollTop: target.offset().top - 60
            }, 1000 );
            return false;

          }

        }

      }

    }

  } );

} );
var offset = 300,

    //Browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,

    //Duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,

    //Grab the "back to top" link
  $back_to_top = $( '.cd-top' );

//Hide or show the "back to top" link
$( window ).scroll( function() {

  ( $( this ).scrollTop() > offset ) ? $back_to_top.addClass( 'cd-is-visible' ) : $back_to_top.removeClass( 'cd-is-visible cd-fade-out' );
  if ( $( this ).scrollTop() > offset_opacity ) {

    $back_to_top.addClass( 'cd-fade-out' );

  }

} );

//Smooth scroll to top
$back_to_top.on( 'click', function( event ) {

  event.preventDefault();
  $( 'body,html' ).animate( {
    scrollTop: 0
  }, scroll_top_duration );

} );

//Schedules
var headertext = [],
  headers = document.querySelectorAll( '#schedules th' ),
  tablerows = document.querySelectorAll( '#schedules th' ),
  tablebody = document.querySelector( '#schedules tbody' );

for ( var i = 0; i < headers.length; i++ ) {
  var current = headers[ i ];
  headertext.push( current.textContent.replace( /\r?\n|\r/, '' ) );
}
for ( var i = 0, row; row = tablebody.rows[ i ]; i++ ) {
  for ( var j = 0, col; col = row.cells[ j ]; j++ ) {
    col.setAttribute( 'data-th', headertext[ j ] );
  }
}
