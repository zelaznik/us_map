$( function() {

  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];

    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });

    return hex.join( "" ).toUpperCase();
  }

  function refreshSwatch() {
    var stein   = $( "#green" ).slider( "value" ),
        johnson = $( "#blue" ).slider( "value" );

    $("#stein").attr('value',   Math.floor(1000*stein/256)   / 10);
    $("#johnson").attr('value', Math.floor(1000*johnson/256) / 10);
  }

  $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
  });

  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider(  "value", 60 );
} );