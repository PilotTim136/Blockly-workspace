Blockly.Blocks['values_error'] = {
  json: {
  "type": "values_error",
  "message0": "error %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "OPTION",
      "options": [
        [
          "name",
          "name"
        ],
        [
          "description",
          "message"
        ],
        [
          "full",
          "full"
        ]
      ]
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

javascript.javascriptGenerator.forBlock['values_error'] = function(block, generator) {
  var dropdown_option = block.getFieldValue('OPTION');
  if (dropdown_option == 'name') {
    var code = 'error.name';
  } else if (dropdown_option == 'message') {
    var code = 'error.message';
  } else {
    var code = 'error';
  }
  return [code, javascript.Order.NONE];
};
