Blockly.Blocks['values_inlinereturn'] = {
  json: {
  "type": "values_inlinereturn",
  "message0": "return %1",
  "args0": [
    {
      "type": "input_value",
      "name": "RETURN"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['values_inlinereturn'] = function(block, generator) {
  var value_return = generator.valueToCode(block, 'RETURN', javascript.Order.ATOMIC) || null;
  var code = `return ${value_return};\n`;
  return code;
};
