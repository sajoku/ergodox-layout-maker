var edc = {};
(function(ctx) {

  var selectedKey;
  var layout = [];

  var selectKey = function() {
    var key = $(this).data('key');
    var $this = $(this);

    if (selectedKey) {
      $('.key.key-'+selectedKey).removeClass('selected');
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

    // Setup handlers of all the keys
    for(var i=0; i <= 80; i++) {
      layout[i] = 0;
      $('.key.key-'+i).hover(function() {
        // In
        $(this).addClass('highlight');
      }, function() {
        // Out
        $(this).removeClass('highlight');
      });
      $('.key.key-'+i).click(selectKey);
    }

    $('body').keyup(function() {
      console.log("keyup");
      if(selectedKey) {
        var $key = $('.key.key-'+selectedKey);
        $key.append('<text class="text7" x="360.22806" y="52.69207" transform=""><tspan x="360.22806" dy="-7">A</tspan><tspan x="360.22806" dy="14">a</tspan></text>');
      }
    });

  };

  ctx.save = function() {
    console.log(layout);
  };

})(edc);

$(function() {
  edc.start();

  $('#save').click(edc.save);
});