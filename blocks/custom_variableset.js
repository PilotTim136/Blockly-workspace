Blockly.Blocks['custom_variableset'] = {
  json: {
    "type": "custom_variableset",
    "message0": "%1 %2 set to %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          [
            "const",
            "const"
          ],
          [
            "var",
            "var"
          ],
          [
            "let",
            "let"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "VAR",
        "text": "variable"
      },
      {
        "type": "input_value",
        "name": "VALUE"
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

javascript.javascriptGenerator.forBlock['custom_variableset'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('TYPE');
  var text_var = block.getFieldValue('VAR');
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || "''";
  var code = `${dropdown_type} ${text_var} = ${value_value};\n`;
  return code;
};
