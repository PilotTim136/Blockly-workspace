Blockly.Blocks['values_trycatch'] = {
  json: {
  "type": "values_trycatch",
  "message0": "try %1 %2 catch error %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "ERROR"
    }
  ],
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

javascript.javascriptGenerator.forBlock['values_trycatch'] = function(block, generator) {
  var statements_code = generator.statementToCode(block, 'CODE');
  var statements_error = generator.statementToCode(block, 'ERROR');
  var code = `try {
${statements_code}} catch(error) {
${statements_error}}\n`;
  return code;
};
