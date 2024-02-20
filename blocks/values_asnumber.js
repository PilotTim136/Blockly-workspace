Blockly.Blocks['values_asnumber'] = {
  json: {
  "type": "values_asnumber",
  "message0": "%1 as number",
  "args0": [

 {


"type": "input_value",


"name": "VALUE"

 }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 135,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['values_asnumber'] = function(block, generator) {
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  var code = `Number(${value_value})`;
  return [code, javascript.Order.NONE];
};
