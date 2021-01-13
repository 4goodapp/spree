document.addEventListener('DOMContentLoaded', function() {
  // Inititate a standard Select2 on any select element with the class .select2
  // Remember to add a place holder in the HTML as needed.
  $('select.select2').select2()

  // Inititate a Select2 with the option to clear, on any select element with the class .select2-clear
  // Set: include_blank: true in your ERB.
  // A placeholder is auto added here as it is required to clear the Select2
  // If a custom placeholder is required, you will need to set up a custom instance.
  $('select.select2-clear').select2({
    placeholder: Spree.translations.select_an_option,
    allowClear: true
  })

  // Inititate a Select2 with the multiple set to true, on any select element with the class .select2-multiple
  // Set include_blank: false in your ERB.
  // Manually add a placeholder in the html or ERB as needed.
  $('select.select2-multiple').select2({
    multiple: true
  })
})

$.fn.addSelect2Options = function (data) {
  var select = this

  function appendOption(select, data) {
    var option = new Option(data.name, data.id, true, true)
    select.append(option).trigger('change')
  }

  if (Array.isArray(data)) {
    data.map(function(row) {
      appendOption(select, row)
    })
  } else {
    appendOption(select, data)
  }
  select.trigger({
    type: 'select2:select',
    params: {
      data: data
    }
  })
}

$.fn.select2.defaults.set('width', 'style')
$.fn.select2.defaults.set('dropdownAutoWidth', false)
$.fn.select2.defaults.set('theme', 'bootstrap4')
