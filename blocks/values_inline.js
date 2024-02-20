Blockly.Blocks['values_inline'] = {
  json: {
  "type": "value_inlines",
  "message0": "inline code %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['values_inline'] = function(block, generator) {
  var statements_code = generator.statementToCode(block, 'CODE');
  var code = `(function() {
${statements_code}})()`;
  return [code, javascript.Order.NONE];
};
