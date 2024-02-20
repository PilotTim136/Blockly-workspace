function copy() {
  var generatedCode = document.getElementById("generatedCodeBlockly").textContent;
  var textarea = document.createElement("textarea");
  textarea.value = generatedCode;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}