document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copy-button");
    const saveButton = document.getElementById("save-button");
    const lockButton = document.getElementById("lock-button");
    const codeEditor = document.getElementById("code-editor");
  
    let isLocked = false;
  
    copyButton.addEventListener("click", function () {
      if (!isLocked) {
        codeEditor.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Text copy")
      }
    });
  
    saveButton.addEventListener("click", function () {
      // Implement save functionality here.
      // You can use browser local storage or send data to a server.
      const app=document.querySelector('.editor')
      const codeEditor= app.querySelector('#code-editor');
      const codeToSave = codeEditor.innerText;
      console.log(codeToSave)

      if (codeEditor.value === '') {
          alert("Please write something before saving.");
      } else {
          localStorage.setItem("savedCode", codeToSave);
          alert("Code saved!");
      }
      
         

    });
  
    lockButton.addEventListener("click", function () {
      isLocked = !isLocked;
      lockButton.innerText = isLocked ? "Unlock" : "Lock";
      codeEditor.classList.toggle("locked", isLocked);
      codeEditor.disabled = isLocked;
    });
  });
  