function t{
   html += '<tr>'
   jQuery.each(rows, function(idx, row) {
      html += "<td>" + JSON.stringify(row) + "</td>"
   })
   html += '</tr>';
}