Blockly.Blocks['window_confirm'] = {
  json: {
  "type": "window_confirm",
  "message0": "confirm %1",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "output": "Boolean",
  "colour": "#69717d",
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['window_confirm'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || "''";
  var code = `window.confirm(${value_value})`;
  return [code, javascript.Order.NONE];
};
