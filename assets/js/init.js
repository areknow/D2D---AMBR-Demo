$(function() { 
  
  
  // add buyer button slide down click
  $('#toggle-inputs').click(function() {
    $('.input-row').slideToggle(100);
    $('.green-button .fa').toggleClass("fa-minus-circle").toggleClass("fa-plus-circle");
  });
  
  
  // input label float functions
  $("input").blur(function() {
    $(this).parent().toggleClass("input-active");
    if($(this).val()) {$(this).parent().toggleClass('input-active');}
  });
  $("input").focus(function() {
    $(this).parent().toggleClass("input-active");
    if($(this).val()) {$(this).parent().toggleClass('input-active');}
  });
  
  
  // input save button disable/enable
  $('input').bind('input', function() {
    if ($("#in-company").val()!="" && 
        $("#in-industry").val()!="" && 
        $("#in-date").val()!="") {
      $("#addRow").removeClass("disabled");
    } else {
      $("#addRow").addClass("disabled");
    }
  });
  
  
  // init buyers data table with custom options
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
  
  
  // add buyer table row functionality
  $('#addRow').click(function() {
    var company = $('#in-company');
    var industry = $('#in-industry');
    var date = $('#in-date');
    table.row.add([
      company.val(),
      industry.val(),
      date.val()
    ]).draw(true);
    $('#page-count').insertAfter('#buyers_paginate');
    company.val("");
    industry.val("");
    date.val("");
    $("#addRow").addClass("disabled");
    $("input").parent().toggleClass("input-active");
  });
  
  
  // mobile menu click button
  $('.mobile-menu').click(function() {
    if ($('.tabs').hasClass('mobile-menu-open')) {
      $('.tab-label').css('z-index','0');
      $('.tabs').toggleClass('mobile-menu-open');
    } else {
      $('.tab-label').css('z-index','2');
      $('.tabs').toggleClass('mobile-menu-open');
    }
  });
  
  
  // mobile menu item click
  $('.tab-label').click(function() {
    $('.mobile-menu').click();
  });
  

  
  
  
  
  
  
  
  
  
  
  
});// end doc ready



