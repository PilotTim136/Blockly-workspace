Blockly.Blocks['custom_variablechange'] = {
  json: {
    "type": "custom_variablechange",
    "message0": "change %1 by %2",
    "args0": [
      {
        "type": "field_input",
        "name": "VAR",
        "text": "variable"
      },
      {
        "type": "input_value",
        "name": "NUMBER",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_variablechange'] = function(block, generator) {
  var text_var = block.getFieldValue('VAR');
  var input_value = generator.valueToCode(block, 'NUMBER', javascript.Order.ATOMIC) || 0;
  var code = `${text_var} += ${input_value};\n`;
  return code;
};
