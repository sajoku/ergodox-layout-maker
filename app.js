var edc = {};
(function(ctx) {

  var selectedKey = null;
  var selectedLayer = null;
  var layout = [];
  layout[0] = [];
  layout[1] = [];
  layout[2] = [];

  var selectKey = function() {
    var key = $(this).data('key');
    var $this = $(this);
    var layer = $(d3.select(this).node()).closest('svg').data('layer');

    if (selectedLayer != null && selectedKey != null) {
      d3.select('.layer.layer-'+selectedLayer+' .key.key-'+selectedKey).classed({selected: false});
    }
    if (selectedKey != key || selectedLayer != layer) {
      d3.select(this).classed({selected: true});
      selectedKey = key;
      selectedLayer = layer;
    } else {
      selectedKey = null;
      selectedLayer = null;
    }
  };

  ctx.start = function() {

    // TODO: Extract in addLayer function
    for(var l=0; l <= 2; l++) {
      var $template = $('.layer-template').clone(false);
      $template.attr('class', 'layer layer-'+l);
      $template.attr('data-layer', l);
      $('body').append($template);

      // Setup handlers of all the keys
      for(var i=0; i <= 80; i++) {
        d3.select('.layer.layer-'+l+' .key.key-'+i).on("mouseover", function() {
          d3.select(this).classed({highlight: true});
        });
        d3.select('.layer.layer-'+l+' .key.key-'+i).on('mouseout', function() {
          d3.select(this).classed({highlight: false});
        });
        d3.select('.layer.layer-'+l+' .key.key-'+i).on('click', selectKey);
      }
    }

    d3.select('body').on('keyup', function(e) {
      if(selectedKey != null && selectedLayer != null) {
        var $key = d3.select('.layer.layer-'+selectedLayer+' .key.key-'+selectedKey);
        var $text = d3.select('.layer.layer-'+selectedLayer+' .label.label-'+selectedKey);
        console.log('key', selectedKey, selectedLayer);
        var $wrapper = $key.node().parentNode;

        if ($text.empty()) {
          $text = d3.select($wrapper).append('text')
                                  .attr('class', 'label label-'+selectedKey)
                                  .attr('x', +$key.attr('x') + $key.attr('width')/2)
                                  .attr('y', +$key.attr('y'));

          $text.append('tspan').attr('dx', 0).attr('dy', 30).text(d3.event.keyCode);
        } else {
          $text.select('text tspan').text(d3.event.keyCode);
        }
        layout[selectedLayer][selectedKey] = d3.event.keyCode;
      }
    });
  };

  ctx.save = function() {
    console.log(layout);
  };

})(edc);

edc.start();
d3.select('#save').on('click', edc.save);
