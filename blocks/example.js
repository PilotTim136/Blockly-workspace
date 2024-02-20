// Make your block in here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

// Replace "your_block_id_here" with your block id

Blockly.Blocks['your_block_id_here'] = {
  json: {
    // Make sure "Block Definition" is in JSON on your block factory
    // Then copy & paste json of your blocks here
    // Name has to be the same as your block id
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

// Paste "Generator stub" here from the block factory
// var code is the code that will get returned from the block in javascript
