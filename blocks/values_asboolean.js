Blockly.Blocks['values_asboolean'] = {
  json: {
  "type": "values_asboolean",
  "message0": "%1 as boolean",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['values_asboolean'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  var code = `Boolean(${value_value})`;
  return [code, javascript.Order.NONE];
};
