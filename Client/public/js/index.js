$(document).ready(function() {
    $('#form_main').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === 'Affidavits') {
        $('#aff_form').show();
      } else {
        $('#aff_form').hide();
      }
    });
  });

  