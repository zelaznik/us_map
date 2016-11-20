(function() {
  'use strict';

  function election_table_headers() {
    return ([
      '  <thead>',
      '    <tr>',
      '      <th>state_name</th>',
      '      <th>electoral_votes</th>',
      '      <th>orig_votes_clinton</th>',
      '      <th>orig_votes_trump</th>',
      '      <th>orig_votes_johnson</th>',
      '      <th>orig_votes_stein</th>',
      '    </tr>',
      '  </thead>'
    ].join('\n'));
  }

  function election_table_row(record, symbol) {
    return ([
      '    <tr>',
      '      <td>' + record.state_name        + '</td>',
      '      <td>' + record.electoral_votes   + '</td>',
      '      <td>' + record.orig_vote_clinton + '</td>',
      '      <td>' + record.orig_vote_trump   + '</td>',
      '      <td>' + record.orig_vote_johnson + '</td>',
      '      <td>' + record.orig_vote_stein   + '</td>',
      '    </tr>'
    ].join('\n'));
  }

  function election_table_body(usa) {
    var html_rows = $.map(usa.rows, election_table_row);

    return html_rows.join('\n  ');
  }

  window.election_table_headers = election_table_headers;
  window.election_table_row     = election_table_row;
  window.election_table_body    = election_table_body;

})();

