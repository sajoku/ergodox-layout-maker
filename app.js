var edc = {};
(function(ctx) {

  var selectedKey;
  var layout = [];

  var selectKey = function() {
    var key = +$(this).attr('id').substr(3);
    var $this = $(this);

    if (selectedKey) {
      $('#key'+selectedKey).removeClass('selected');
    }
    if (selectedKey != key) {
      $this.addClass('selected');
      selectedKey = key;

      layout[key] = 1;
    } else {
      selected = null;
    }
  };

  ctx.start = function() {
    for(var i=0; i <= 80; i++) {
      layout[i] = 0;
      $('#key'+i).hover(function() {
        // In
        $(this).addClass('highlight');
      }, function() {
        // Out
        $(this).removeClass('highlight');
      });
      $('#key'+i).click(selectKey);
    }
  };

  ctx.save = function() {
    console.log(layout);
  };

})(edc);

$(function() {
  edc.start();

  $('#save').click(edc.save);
});