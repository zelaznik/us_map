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

  var ct = 0;
  function refreshSwatch() {
    var stein   = $( "#green" ).slider( "value" ),
        johnson = $( "#blue" ).slider( "value" );
    
    var booster = { stein:   stein/256, johnson: johnson/256 };

    $("#stein").attr('value',   Math.floor(1000*booster.stein) / 10 );   //Math.floor(1000*stein/256)   / 10);
    $("#johnson").attr('value', Math.floor(1000*booster.johnson) / 10); //1000*johnson/256) / 10);

    ct += 1;
    console.log("Refreshing map (" + ct + ")" );
    if (!!window.refresh_map) {
      window.refresh_map(booster);
    }
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