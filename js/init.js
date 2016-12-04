$(function() { 
  
//  setTabContentHeight();
  
  $('#toggle-inputs').click(function() {
    $('.input-row').slideToggle();
  });
  
  
  
  var table = $('#buyers').DataTable({
    bFilter: false,
    "lengthMenu": [10,20],
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
      $('#page-count').insertBefore('#buyers_paginate');
      return 'Showing ' + perPage + ' of ' + iMax;
    }
  });
  
  
  
  
  
  
  
  


  $("input").blur(function() {
    $(this).parent().toggleClass("input-active");
    if($(this).val()) {$(this).parent().toggleClass('input-active');}
  });
  $("input").focus(function() {
    $(this).parent().toggleClass("input-active");
    if($(this).val()) {$(this).parent().toggleClass('input-active');}
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




//$(window).resize(function() {
//  setTabContentHeight();
//});



//function setTabContentHeight() {
//  console.log($(window).height());
//  console.log($('header').height());
//  $('.tab-content').height($(window).height()-$('header').outerHeight()-$('.tab-header').outerHeight()-6);
//} 
