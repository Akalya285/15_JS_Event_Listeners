document.addEventListener('keydown', (event) => {
    const keyCodeContainer = document.getElementById('keyCodeContainer');
    const keyPressed = document.getElementById('keyPressed');
    const keyCode = document.getElementById('keyCode');
    const info = document.querySelector('.info');
  
    // Display the key and key code
    keyPressed.textContent = event.key;
    keyCode.textContent = event.keyCode;
  
    // Show the container and hide the info text
    keyCodeContainer.style.display = 'flex';
    info.style.display = 'none';
  });
  