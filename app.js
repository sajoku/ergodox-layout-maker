var edc = {};
(function(ctx) {

  var selectedKey;
  var layout = [];

  var selectKey = function() {
    var key = $(this).data('key');
    var $this = $(this);

    if (selectedKey) {
      d3.select('.key.key-'+selectedKey).classed({selected: false});
    }
    if (selectedKey != key) {
      d3.select(this).classed({selected: true});
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
      d3.select('.key.key-'+i).on("mouseover", function() {
        // In
        d3.select(this).classed({highlight: true});
      });
      d3.select('.key.key-'+i).on('mouseout', function() {
        // Out
        d3.select(this).classed({highlight: false});
      });

      d3.select('.key.key-'+i).on('click', selectKey);
    }

    d3.select('body').on('keyup', function(e) {
      console.log("keyup");
      if(selectedKey) {
        var $key = d3.select('.key.key-'+selectedKey);
        var $text = d3.select('.label.label-'+selectedKey);
        var $wrapper = $key.node().parentNode;

        if ($text.empty()) {
          $text = d3.select($wrapper).append('text')
                                  .attr('class', 'label label-'+selectedKey)
                                  .attr('x', +$key.attr('x') + $key.attr('width')/2)
                                  .attr('y', +$key.attr('y'));

          $text.append('tspan').attr('dx', 0).attr('dy', 25).text("test");
        } else {
          $text.select('text tspan').text(d3.event.keyCode);
        }
      }
    });

  };

  ctx.save = function() {
    console.log(layout);
  };

})(edc);

edc.start();
d3.select('#save').on('click', edc.save);
