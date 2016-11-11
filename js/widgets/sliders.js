$( function() {
  var $johnson_slider              = $('#blue'),
      $stein_slider                = $('#green'),
      $green_and_blue              = $('#green, #blue'),
      $stein_percent_for_clinton   = $('#stein_percent_for_clinton'),
      $johnson_percent_for_clinton = $('#johnson_percent_for_clinton');

  function refreshSwatch() {
    var stein   = $stein_slider.slider('value'),
        johnson = $johnson_slider.slider('value');

    var booster  = { stein:   stein/256, johnson: johnson/256 },
        tmpGary  =  Math.floor(1000*booster.johnson) / 10,
        tmpStein =  Math.floor(1000*booster.stein) / 10;

    $stein_percent_for_clinton.attr('value', tmpStein);
    $stein_percent_for_clinton.val(tmpStein);

    $johnson_percent_for_clinton.attr('value', tmpGary);
    $johnson_percent_for_clinton.val(tmpGary);

    if (!!window.refresh_map) {
      window.refresh_map(booster);
    }
  }

  $johnson_percent_for_clinton.on('change', function() {
    if (!$johnson_percent_for_clinton.val()) {
      $johnson_slider.slider('value', 128);
    } else {
      $johnson_slider.slider('value', 2.56*$johnson_percent_for_clinton.val());
    }
  });

  $stein_percent_for_clinton.on('change', function() {
    if (!$stein_percent_for_clinton.val()) {
      $stein_slider.slider('value', 128);
    } else {
      $stein_slider.slider('value', 2.56*$stein_percent_for_clinton.val());
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

  $stein_slider.slider( "value", 128 );
  $johnson_slider.slider(  "value", 128 );
} );
