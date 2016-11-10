$(document).ready(function() {
  var electoral_map = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'),

    geographyConfig: {
      highlightBorderColor: '#bada55',
      popupTemplate: function(geography, data) {
        function sp(count) {
          var arr = [];
          for (var i=0; i<count; i++) {
            arr.push('&nbsp;');
          }
          return arr.join('');
        }

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
      var final = {};

      for(var abbreviation in raw_data) {
        var r = raw_data[abbreviation];
        final[abbreviation] = {
          electoral_votes: r.electoral_votes,
          clinton: r.clinton, trump: r.trump,
          stein: r.stein, johnson: r.johnson,
          fillKey: getKey(r.clinton, r.trump)
        };
      }
      return final;
    })()
  });

  election.labels();
});