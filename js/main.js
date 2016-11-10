$(document).ready(function() {

  var ct = 0;
  var was_empty = false;
  window.refresh_map = function(booster) {
    $("#container").empty();

    var electoral_map = window.electoral_map = new Datamap({
      scope: 'usa',
      element: document.getElementById('container'),

      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
          var total_votes = (data.clinton + data.trump + data.johnson + data.stein);
          function percent(val) {
            return '' + (Math.floor(10000 * val / total_votes)/100) + '%'
          }
          return (
            '<div class="hoverinfo">' +
            geography.properties.name + ': ' + data.electoral_votes + '<br/>' +
            '  Clinton: ' + percent(data.clinton) + '<br/>' +
            '  Trump: '   + percent(data.trump)   + '<br/>' +
            '  Johnson: ' + percent(data.johnson) + '<br/>' +
            '  Stein: '   + percent(data.stein)   + '<br/>' +
            '</div>'
          );
        },
        highlightBorderWidth: 3
      },

      fills: fills,

      data: (function() {
        var r, orig, abbreviation, final = {};

        for(abbreviation in raw_data) {
          orig = raw_data[abbreviation];

          if (booster == null) {
            r = orig;
          } else {
            console.log("BOOSTING");
            r = boosted(orig, booster);
          }

          final[abbreviation] = {
            electoral_votes: r.electoral_votes,
            clinton: r.clinton, trump: r.trump,
            stein: r.stein, johnson: r.johnson,
            fillKey: getKey(r.clinton, r.trump, r.pickup)
          };
        }

        return final;
      })()
    });

    electoral_map.labels();
  }

  window.refresh_map();
});
