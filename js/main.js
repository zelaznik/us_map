$(document).ready(function() {

  var ct = 0;
  window.refresh_map = function(booster) {
    $("#container").empty();

    console.log("HELLO  " + (ct++));

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

      fills: {
        clinton: '#8888FF',
        trump:   '#FF8888'
      },

      data: (function() {
        var final = {};

        for(var abbreviation in raw_data) {
          var r = raw_data[abbreviation];
          if (!!booster) {
            // console.log("booster: " + JSON.stringify(booster));
            // console.log("r:       " + JSON.stringify(r));
            try {
              r = boosted(r, booster);
              // console.log("after:   " + JSON.stringify(r));
            } catch(e) {
              console.warn(e);
            }
          }
          final[abbreviation] = {
            electoral_votes: r.electoral_votes,
            clinton: r.clinton, trump: r.trump,
            stein: r.stein, johnson: r.johnson,
            fillKey: (r.clinton > r.trump) ? ((true) ? 'clinton' : 'trump') : ((true) ? 'trump' : 'clinton')
          };
        }
        return final;
      })()
    });

    electoral_map.labels();
  }

  window.refresh_map();
});
