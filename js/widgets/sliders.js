$( function() {
  var $green   = $("#green"),
      $blue    = $("#blue"),
      $stein   = $("#stein"),
      $johnson = $("#johnson"),
      $green_and_blue = $( "#green, #blue" );

  function refreshSwatch() {
    var stein   = $green.slider('value'),
        johnson = $blue.slider('value');

    var booster  = { stein:   stein/256, johnson: johnson/256 },
        tmpGary  =  Math.floor(1000*booster.johnson) / 10,
        tmpStein =  Math.floor(1000*booster.stein) / 10;

    $stein.attr('value', tmpStein);
    $stein.val(tmpStein);

    $johnson.attr('value', tmpGary);
    $johnson.val(tmpGary);

    if (!!window.refresh_map) {
      window.refresh_map(booster);
    }
  }

  $johnson.on('change', function() {
    if (!$johnson.val()) {
      $blue.slider('value', 128);
    } else {
      $blue.slider('value', 2.56*$johnson.val());
    }
  });

  $stein.on('change', function() {
    if (!$stein.val()) {
      $blue.slider('value', 128);
    } else {
      $blue.slider('value', 2.56*$stein.val());
    }
  });

  $green_and_blue.slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
  });

  $green.slider( "value", 128 );
  $blue.slider(  "value", 128 );
} );
