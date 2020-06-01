

window.addEventListener('load', function() {
  if (process && process.arch) {
    const electron = require('electron');
    document.body.classList.add("electron");

    const win = electron.remote.getCurrentWindow();
    win.on('enter-full-screen', () => {
      document.body.classList.add("fullscreen");
    });
    win.on('leave-full-screen', () => {
      document.body.classList.remove("fullscreen");
    });
  }




})
