Blockly.Blocks['custom_addone'] = {
  json: {
    "type": "custom_addone",
    "message0": "++ %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NUM1",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_addone'] = function(block, generator) {
  var value_num1 = generator.valueToCode(block, 'NUM1', javascript.Order.ATOMIC);
  var code = `${value_num1}+1`;
  return [code, javascript.Order.NONE];
};
