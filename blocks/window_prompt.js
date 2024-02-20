Blockly.Blocks['window_prompt'] = {
  json: {
  "type": "window_prompt",
  "message0": "prompt %1",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "output": "String",
  "colour": "#69717d",
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['window_prompt'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || "''";
  var code = `window.prompt(${value_value})`;
  return [code, javascript.Order.NONE];
};
