Blockly.Blocks['values_asstring'] = {
  json: {
  "type": "values_asstring",
  "message0": "%1 as string",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['values_asstring'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  var code = `String(${value_value})`;
  return [code, javascript.Order.NONE];
};
