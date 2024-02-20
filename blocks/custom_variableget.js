Blockly.Blocks['custom_variableget'] = {
  json: {
    "type": "custom_variableget",
    "message0": "get %1",
    "args0": [
      {
        "type": "field_input",
        "name": "VAR",
        "text": "variable"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_variableget'] = function(block, generator) {
  var text_var = block.getFieldValue('VAR');
  var code = `${text_var}`;
  return [code, javascript.Order.NONE];
};
