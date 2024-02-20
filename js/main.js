var fontSize = 16;
    var workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: false,
      },
      trashcan: true,
      renderer: 'zelos',
      sounds: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.2,
        scaleSpeed: 1.2,
        pinch: true
      },
    });

    function updateCode() {
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      Blockly.JavaScript.addReservedWords('code');
      document.getElementById('generatedCodeBlockly').textContent = code
    }

    function runCode() {
      try {
        var workspaceCode = Blockly.JavaScript.workspaceToCode(workspace);
        eval(workspaceCode);
      } catch(err) {
        window.alert(err)
      }
    }

    function fontSizeAdd(num) {
      fontSize += Number(num)
      document.getElementById('generatedCodeBlockly').style.fontSize = fontSize + 'px'
    }
    
    workspace.addChangeListener(updateCode);
    updateCode();