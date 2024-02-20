Blockly.Blocks['window_console'] = {
  json: {
  "type": "window_console",
  "message0": "console %1 %2 %3",
  "args0": [

 {


"type": "field_dropdown",


"name": "CONSOLE",


"options": [


  [



 "log",



 "log"


  ],


  [



 "warn",



 "warn"


  ],


  [



 "error",



 "error"


  ]


]

 },

 {


"type": "input_dummy"

 },

 {


"type": "input_value",


"name": "TEXT"

 }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#69717d",
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['window_console'] = function(block, generator) {
  var dropdown_console = block.getFieldValue('CONSOLE');
  var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || "''";
  if (dropdown_console == 'log') {
    var code = `console.log(${value_text});\n`;
  } else if (dropdown_console == 'warn') {
    var code = `console.warn(${value_text});\n`;
  } else if (dropdown_console == 'error') {
    var code = `console.error(${value_text});\n`;
  }
  return code;
};
