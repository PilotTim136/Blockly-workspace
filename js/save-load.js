const extval = ".s4php"; //extentionvalue - 'saveextention' in readme
const autosaveinterval = 20000; //autosaveinterval is autosave interval. interval is in ms, and 10 seconds are added automatically. so if it is basic value '20000', then it's 30 seconds.

function saveToFile() {
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToText(xmlDom);

  var generatedCode = document.getElementById("generatedCodeBlockly").textContent;

  var fileName = prompt("Filename:", "BlocklyFile");

  if (fileName === null) {
    return;
  }

  fileName += extval;

  var dataToSave = {
    xml: xmlText,
    code: generatedCode
  };

  var blob = new Blob([JSON.stringify(dataToSave)], { type: "application/json" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

function loadFromFile() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = extval;

  fileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var jsonData = JSON.parse(event.target.result);

        workspace.clear();

        var parser = new DOMParser();
        var xmlDom = parser.parseFromString(jsonData.xml, "application/xml");
        Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

        document.getElementById('generatedCodeBlockly').textContent = jsonData.code;
      };

      reader.readAsText(file);
    }
  });

  fileInput.click();
}

function loadFromLocalStorage() {
  var jsonData = JSON.parse(localStorage.getItem('workspaceData'));

  if (jsonData) {
    var restore = confirm("Recover your saved project?");
    
    if (restore) {
      var parser = new DOMParser();
      var xmlDom = parser.parseFromString(jsonData.xml, "application/xml");
      Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

      document.getElementById('generatedCodeBlockly').textContent = jsonData.code;
    }
  }
}

window.addEventListener('load', function() {
  loadFromLocalStorage();
});

function saveToLocalStorage() {
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToText(xmlDom);

  var generatedCode = document.getElementById("generatedCodeBlockly").textContent;

  var dataToSave = {
    xml: xmlText,
    code: generatedCode
  };

  localStorage.setItem('workspaceData', JSON.stringify(dataToSave));
}

function saveToLocalStoragePeriodically() {
  setInterval(function() {
      console.log("Saving in 10 seconds");
      setTimeout(function() {
          console.log("Saving...");
          saveToLocalStorage();
          console.log("Saved");
      }, 10000);
  }, 20000);
}

saveToLocalStoragePeriodically();