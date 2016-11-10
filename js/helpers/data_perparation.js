var raw_data = {
  "AL": {"trump": 1306925, "state_name": "Alabama", "clinton": 718084, "electoral_votes": 9, "stein": 9287, "johnson": 43869},
  "AK": {"trump": 129786,  "state_name": "Alaska", "clinton": 92013, "electoral_votes": 3, "stein": 4394, "johnson": 14524},
  "AZ": {"trump": 972900,  "state_name": "Arizona", "clinton": 888374, "electoral_votes": 11, "stein": 23697, "johnson": 75082},
  "AR": {"trump": 677904,  "state_name": "Arkansas", "clinton": 378729, "electoral_votes": 6, "stein": 9837, "johnson": 29518},
  "CT": {"trump": 637919,  "state_name": "Connecticut", "clinton": 823360, "electoral_votes": 7, "stein": 21539, "johnson": 45999},
  "OH": {"trump": 2771984, "state_name": "Ohio", "clinton": 2317001, "electoral_votes": 18, "stein": 44310, "johnson": 168599},
  "WI": {"trump": 1409467, "state_name": "Wisconsin", "clinton": 1382210, "electoral_votes": 10, "stein": 30980, "johnson": 106442},
  "IL": {"trump": 2118179, "state_name": "Ilinois", "clinton": 2977498, "electoral_votes": 20, "stein": 74112, "johnson": 204491},
  "TX": {"trump": 4681590, "state_name": "Texas", "clinton": 3867816, "electoral_votes": 38, "stein": 71307, "johnson": 282524},
  "ME": {"trump": 332591,  "state_name": "Maine", "clinton": 352485, "electoral_votes": 5, "stein": 14006, "johnson": 37578},
  "SD": {"trump": 227701,  "state_name": "South Dakota", "clinton": 117442, "electoral_votes": 3, "stein": 0, "johnson": 20845},
  "KS": {"trump": 656009,  "state_name": "Kansas", "clinton": 414788, "electoral_votes": 6, "stein": 22698, "johnson": 53648},
  "RI": {"trump": 742506,  "state_name": "Rhode Island", "clinton": 934631, "electoral_votes": 4, "stein": 45132, "johnson": 86306},
  "UT": {"trump": 375006,  "state_name": "Utah", "clinton": 222858, "electoral_votes": 6, "stein": 5484, "johnson": 222858},
  "KY": {"trump": 1202942, "state_name": "Kentucky", "clinton": 628834, "electoral_votes": 8, "stein": 13913, "johnson": 53749},
  "MI": {"trump": 2279210, "state_name": "Michigan", "clinton": 2267373, "electoral_votes": 16, "stein": 50686, "johnson": 173021},
  "FL": {"trump": 4605515, "state_name": "Florida", "clinton": 4485745, "electoral_votes": 29, "stein": 64019, "johnson": 206007},
  "TN": {"trump": 1517402, "state_name": "Tennessee", "clinton": 867110, "electoral_votes": 11, "stein": 15919, "johnson": 70084},
  "MS": {"trump": 677782,  "state_name": "Mississippi", "clinton": 462250, "electoral_votes": 6, "stein": 3595, "johnson": 13817},
  "VA": {"trump": 1731156, "state_name": "Virginia", "clinton": 1916845, "electoral_votes": 13, "stein": 27272, "johnson": 116600},
  "MT": {"trump": 273696,  "state_name": "Montana", "clinton": 174249, "electoral_votes": 3, "stein": 7654, "johnson": 27188},
  "MD": {"trump": 873646,  "state_name": "Maryland", "clinton": 1497951, "electoral_votes": 10, "stein": 31839, "johnson": 71107},
  "GA": {"trump": 2068623, "state_name": "Georgia", "clinton": 1837300, "electoral_votes": 16, "stein": 0, "johnson": 123641},
  "ID": {"trump": 407199,  "state_name": "Idaho", "clinton": 189677, "electoral_votes": 4, "stein": 8464, "johnson": 28256},
  "NJ": {"trump": 1516915, "state_name": "New Jersey", "clinton": 1979768, "electoral_votes": 14, "stein": 35503, "johnson": 67520},
  "NV": {"trump": 511319,  "state_name": "Nevada", "clinton": 537753, "electoral_votes": 6, "stein": 0, "johnson": 37299},
  "MA": {"trump": 873646,  "state_name": "Massachusetts", "clinton": 1497951, "electoral_votes": 10, "stein": 31839, "johnson": 71107},
  "WA": {"trump": 827555,  "state_name": "Washington", "clinton": 1207943, "electoral_votes": 12, "stein": 30416, "johnson": 91053},
  "DE": {"trump": 185103,  "state_name": "Delaware", "clinton": 235581, "electoral_votes": 3, "stein": 6100, "johnson": 14751},
  "HI": {"trump": 128815,  "state_name": "Hawaii", "clinton": 266827, "electoral_votes": 4, "stein": 12727, "johnson": 15949},
  "WY": {"trump": 174248,  "state_name": "Wyoming", "clinton": 55949, "electoral_votes": 3, "stein": 2512, "johnson": 13285},
  "VT": {"trump": 95027,   "state_name": "Vermont", "clinton": 178072, "electoral_votes": 3, "stein": 6742, "johnson": 10041},
  "NE": {"trump": 273696,  "state_name": "Nebraska", "clinton": 174249, "electoral_votes": 5, "stein": 7654, "johnson": 27188},
  "SC": {"trump": 1143611, "state_name": "South Carolina", "clinton": 849469, "electoral_votes": 9, "stein": 12917, "johnson": 48715},
  "NH": {"trump": 345379,  "state_name": "New Hampshire", "clinton": 346816, "electoral_votes": 4, "stein": 6265, "johnson": 30500},
  "NC": {"trump": 2339603, "state_name": "North Carolina", "clinton": 2162074, "electoral_votes": 15, "stein": 0, "johnson": 127794},
  "OR": {"trump": 742506,  "state_name": "Oregon", "clinton": 934631, "electoral_votes": 7, "stein": 45132, "johnson": 86306},
  "LA": {"trump": 1178004, "state_name": "Louisiana", "clinton": 779535, "electoral_votes": 8, "stein": 14018, "johnson": 37950},
  "PA": {"trump": 2912941, "state_name": "Pennsylvania", "clinton": 2844705, "electoral_votes": 20, "stein": 48912, "johnson": 142653},
  "MN": {"trump": 1321120, "state_name": "Minnesota", "clinton": 1364067, "electoral_votes": 10, "stein": 36921, "johnson": 112778},
  "IN": {"trump": 1555020, "state_name": "Indiana", "clinton": 1029197, "electoral_votes": 11, "stein": 0, "johnson": 133623},
  "MO": {"trump": 1585753, "state_name": "Missouri", "clinton": 1054889, "electoral_votes": 10, "stein": 25086, "johnson": 96404},
  "NY": {"trump": 2637678, "state_name": "New York", "clinton": 4143541, "electoral_votes": 29, "stein": 99880, "johnson": 161857},
  "DC": {"trump": 11553,   "state_name": "District of Columbia", "clinton": 260223, "electoral_votes": 3, "stein": 3995, "johnson": 4501},
  "IA": {"trump": 798923,  "state_name": "Iowa", "clinton": 650790, "electoral_votes": 6, "stein": 11119, "johnson": 57322},
  "ND": {"trump": 216133,  "state_name": "North Dakota", "clinton": 93526, "electoral_votes": 3, "stein": 3769, "johnson": 21351},
  "WV": {"trump": 486198,  "state_name": "West Virginia", "clinton": 187457, "electoral_votes": 5, "stein": 8000, "johnson": 22798},
  "NM": {"trump": 315875,  "state_name": "New Mexico", "clinton": 380724, "electoral_votes": 5, "stein": 9729, "johnson": 73669},
  "CA": {"trump": 2966654, "state_name": "California", "clinton": 5482166, "electoral_votes": 55, "stein": 152333, "johnson": 281536},
  "CO": {"trump": 1075770, "state_name": "Colorado", "clinton": 1126384, "electoral_votes": 9, "stein": 29299, "johnson": 117906},
  "OK": {"trump": 947934,  "state_name": "Oklahoma", "clinton": 419788, "electoral_votes": 7, "stein": 0, "johnson": 83334}
};

var primary = {
  clinton:    [ 48, 101, 150],
  trump:      [204,  71,  49],
  white:      [255, 255, 255]
};

function mixColor(color_start, color_finish, alpha) {
  var blended = [];
  for (var i =0; i<3; i++) {
    var color_float = color_start[i] * (1-alpha) + color_finish[i] * alpha;
    var color_hex   = Math.floor(256+color_float).toString(16).slice(-2).toUpperCase();
    blended.push(color_hex);
  }
  return '#' + blended.join('');
}

function createMix(color_start, color_finish, color_name, mixed_colors) {
  mixed_colors = mixed_colors || {};
  for (var i=0; i<=100; i ++) {
    var pct   = ('' + (1000 + i)).slice(1);
    var key   = color_name + '_' + pct;
    var alpha = 0.01*(100-i);
    mixed_colors[key] = mixColor(color_start, color_finish, alpha);
  }
  return mixed_colors;
}

function getKey(clinton, trump, pickup) {
  if (pickup === 'clinton') {
    return 'pickup_clinton';
  } else if (pickup === 'trump') {
    return 'pickup_trump';
  }

  var multiplier = 2,
      exponent   = 0.25;

  var margin     = Math.abs(clinton - trump) / (clinton+trump);
  var curved     = Math.pow(margin, exponent);
  var magnified  = Math.min(Math.floor(curved * multiplier * 100), 100);
  var digits3    = (1000 + magnified).toString(10).slice(-3);

  if (clinton > trump) {
    return 'clinton_' + digits3;
  } else {
    return 'trump_' + digits3;
  }
}

var fills = (function() {
  var mixed_colors = {
    'pickup_clinton': '#00FF00',
    'pickup_trump':   '#FF00FF'
  };
  createMix(primary.clinton, primary.white, 'clinton', mixed_colors);
  createMix(primary.trump,   primary.white, 'trump',   mixed_colors);
  return Object.freeze(mixed_colors);
})();

var ct = 0;
function boosted(original, boost) {
  var with_boost = {
    original_clinton: original.clinton,
    original_trump:   original.trump
  };

  for (var key in original) {
    with_boost[key] = original[key];
  }

  if (boost.stein > 1 || boost.stein < 0) {
    throw new Error("Invalid boost.stein: " + boost.stein);
  }
  if (boost.johnson > 1 || boost.johnson < 0) {
    throw new Error("Invalid boost.johnson: " + boost.johnson);
  }

  with_boost.clinton = Math.floor(
    original.clinton +
    (original.stein * boost.stein) +
    (original.johnson * boost.johnson)
  );

  with_boost.trump = Math.floor(
    original.trump +
    (original.stein * (1-boost.stein)) +
    (original.johnson * (1-boost.johnson))
  );

  var old_spread = original.clinton - original.trump,
      new_spread = with_boost.clinton - with_boost.trump;

  if ((old_spread > 0) && (new_spread < 0)) {
    with_boost.pickup = 'trump';
  }
  if ((old_spread < 0) && (new_spread > 0)) {
    with_boost.pickup = 'clinton';
  }
  return with_boost;
}

$(document).ready(function() {
  window.boosted = boosted;
})
