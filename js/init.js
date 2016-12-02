$(function() { 
  
  
  
  $('#toggle-inputs').click(function() {
    $('.input-row').slideToggle();
  });
  
  
  
  var table = $('#buyers').DataTable({
      bFilter: false,
      "dom": '<"wrapper"ilpt>',
      "oLanguage": {
        "sInfo": "Showing _START_ of _TOTAL_",
        "sLengthMenu": "Show _MENU_",
        "oPaginate": {
          "sPrevious": "Prev",
          "sNext": "Next"
        }
      },
      "fnInfoCallback": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
        perPage = iEnd - iStart + 1;
        totalRatio = iTotal/perPage;
        intTotalRatio = parseInt(totalRatio, 10);
        totalPages = totalRatio > intTotalRatio ? intTotalRatio + 1 : intTotalRatio;
        currentRatio = iStart/perPage;
        intCurrentRatio = parseInt(currentRatio, 10);
        currentPage = currentRatio > intCurrentRatio ? intCurrentRatio + 1 : intCurrentRatio;
        $('#page-count').html('Page ' + currentPage + ' of ' + totalPages);
        $('#page-count').insertAfter('#buyers_paginate');
        return 'Showing ' + currentPage + ' of ' + iMax;
      }
  });
  
  
  
  
  
  
  
  


  
  
  
  
  
  
  
  

  
  $('#addRow').click(function() {
    var company = $('#in-company').val();
    var industry = $('#in-industry').val();
    var date = $('#in-date').val();
    table.row.add([
      company,
      industry,
      date
    ]).draw(true);
    $('#page-count').insertAfter('#buyers_paginate');
  });
  
  
  
  
  
  
  
  
});

