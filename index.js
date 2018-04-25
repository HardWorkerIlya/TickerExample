var ticker_text = '',
    ticker_position = 0,
    ticker_speed = 5,
    ticker_animation,
    cyclicity = false;
$(document).ready(function() {
  $('#input_ticker_speed_value').val(ticker_speed);
  $('#ticker').hide();
  $(document).on('click', '#add_ticker_value', function () {
    if ($('#input_ticker_value').val() != '') {
      clearInterval(ticker_animation);
      ticker_text = $('#input_ticker_value').val();
      start_ticker();
    }
  });
  $(document).on('click', '#ticker_speed_up', function () {
    if ($('#input_ticker_speed_value').val() != '') {
      ticker_speed++;
      $('#input_ticker_speed_value').val(ticker_speed);
    }
  });
  $(document).on('click', '#ticker_speed_down', function () {
    if ($('#input_ticker_speed_value').val() != '') {
      ticker_speed--;
      $('#input_ticker_speed_value').val(ticker_speed);
    }
  });
  $(document).on('change', '#input_ticker_speed_value', function () {
    if ($('#input_ticker_speed_value').val() != '') {
      ticker_speed = parseFloat($('#input_ticker_speed_value').val());
    }
  });
  $(document).on('change', '#cyclicity_value', function () {
    cyclicity = !($('#cyclicity_value').prop('checked'));
  });
})

function start_ticker () {
  console.log(ticker_speed);
  var ticker_div = $('#ticker'),
      ticker_span = $('#ticker span');
  ticker_span.empty();
  ticker_div.show();
  ticker_span.text(ticker_text);
  ticker_position = ticker_speed > 0 ? ticker_div.width() : - ticker_span.width();
  ticker_animation = setInterval(function () {
    var ticker_div_width = ticker_div.width(),
        ticker_span_width = ticker_span.width();
    ticker_position -= ticker_speed / 20;
    if(ticker_speed > 0 ? ticker_position < -ticker_span_width : ticker_position > ticker_div_width) {
      ticker_position = ticker_speed > 0 ? ticker_div_width : -ticker_span_width;
      if (cyclicity) {
        clearInterval(ticker_animation);
      }
    }
    ticker_span.css('left', ticker_position);
  }, 1);
}