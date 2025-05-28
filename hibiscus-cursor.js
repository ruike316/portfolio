// Hibiscus Cursor Effect for Hawaiian Theme

document.addEventListener('DOMContentLoaded', function() {
  // Create hibiscus flower cursor
  const hibiscusCursor = document.createElement('div');
  hibiscusCursor.className = 'hibiscus-cursor';
  hibiscusCursor.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23FF4081" d="M50,20 C60,5 80,10 85,25 C90,40 75,50 75,50 C75,50 90,60 85,75 C80,90 60,95 50,80 C40,95 20,90 15,75 C10,60 25,50 25,50 C25,50 10,40 15,25 C20,10 40,5 50,20 Z"/><circle fill="%23FFEB3B" cx="50" cy="50" r="10"/></svg>')`;
  hibiscusCursor.style.backgroundSize = 'contain';
  hibiscusCursor.style.backgroundRepeat = 'no-repeat';
  document.body.appendChild(hibiscusCursor);
  
  // Track mouse position for smooth hibiscus movement
  let mouseX = 0;
  let mouseY = 0;
  let hibiscusX = 0;
  let hibiscusY = 0;
  
  // Update mouse position on move
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Create floating hibiscus flowers on click
  document.addEventListener('click', function(e) {
    createFloatingHibiscus(e.clientX, e.clientY);
  });
  
  // Animate hibiscus cursor
  function animateHibiscus() {
    // Smooth following with easing
    const ease = 0.1;
    hibiscusX += (mouseX - hibiscusX) * ease;
    hibiscusY += (mouseY - hibiscusY) * ease;
    
    // Apply position with slight rotation
    hibiscusCursor.style.transform = `translate(${hibiscusX - 15}px, ${hibiscusY - 15}px) rotate(${Math.sin(Date.now() * 0.002) * 10}deg)`;
    
    requestAnimationFrame(animateHibiscus);
  }
  
  // Start animation
  animateHibiscus();
  
  // Function to create floating hibiscus
  function createFloatingHibiscus(x, y) {
    // Create random color hibiscus
    const colors = ['#FF4081', '#FF9800', '#9C27B0', '#00BCD4', '#4CAF50'];
    const centerColors = ['#FFEB3B', '#FFF9C4', '#FFCCBC'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomCenterColor = centerColors[Math.floor(Math.random() * centerColors.length)];
    
    // Create floating hibiscus element
    const floatingHibiscus = document.createElement('div');
    floatingHibiscus.className = 'floating-hibiscus';
    floatingHibiscus.style.position = 'fixed';
    floatingHibiscus.style.left = `${x}px`;
    floatingHibiscus.style.top = `${y}px`;
    floatingHibiscus.style.width = '30px';
    floatingHibiscus.style.height = '30px';
    floatingHibiscus.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="${randomColor.replace('#', '%23')}" d="M50,20 C60,5 80,10 85,25 C90,40 75,50 75,50 C75,50 90,60 85,75 C80,90 60,95 50,80 C40,95 20,90 15,75 C10,60 25,50 25,50 C25,50 10,40 15,25 C20,10 40,5 50,20 Z"/><circle fill="${randomCenterColor.replace('#', '%23')}" cx="50" cy="50" r="10"/></svg>')`;
    floatingHibiscus.style.backgroundSize = 'contain';
    floatingHibiscus.style.backgroundRepeat = 'no-repeat';
    floatingHibiscus.style.zIndex = '9998';
    floatingHibiscus.style.pointerEvents = 'none';
    floatingHibiscus.style.opacity = '0.8';
    
    // Add to body
    document.body.appendChild(floatingHibiscus);
    
    // Animate floating away
    const angle = Math.random() * Math.PI * 2; // Random angle
    const speed = 1 + Math.random() * 2; // Random speed
    const rotationSpeed = Math.random() * 0.06 - 0.03; // Random rotation
    let rotation = 0;
    let posX = x;
    let posY = y;
    let opacity = 0.8;
    
    function animateFloat() {
      // Update position
      posX += Math.cos(angle) * speed;
      posY -= 1 + Math.random(); // Always float upwards with some randomness
      rotation += rotationSpeed;
      opacity -= 0.005; // Gradually fade out
      
      // Apply new position
      floatingHibiscus.style.left = `${posX}px`;
      floatingHibiscus.style.top = `${posY}px`;
      floatingHibiscus.style.transform = `rotate(${rotation}rad) scale(${1 + (0.8 - opacity)})`;
      floatingHibiscus.style.opacity = opacity;
      
      // Continue animation until faded out
      if (opacity > 0) {
        requestAnimationFrame(animateFloat);
      } else {
        document.body.removeChild(floatingHibiscus);
      }
    }
    
    // Start animation
    animateFloat();
  }
  
  // Create hula dancer swaying animation
  if (document.querySelector('.hula-dancer')) {
    const hulaDancer = document.querySelector('.hula-dancer');
    let swayAmount = 0;
    let swayDirection = 0.02;
    
    function animateHula() {
      swayAmount += swayDirection;
      
      // Reverse direction at limits
      if (swayAmount > 1 || swayAmount < -1) {
        swayDirection *= -1;
      }
      
      hulaDancer.style.transform = `translateX(-50%) rotate(${swayAmount * 5}deg)`;
      requestAnimationFrame(animateHula);
    }
    
    animateHula();
  }
  
  // Create random ukulele sounds on click
  const ukuleleSounds = [
    'C4', 'E4', 'G4', 'A4',
    'F4', 'A4', 'C5', 'E5',
    'G4', 'B4', 'D5', 'F5',
    'A4', 'C5', 'E5', 'G5'
  ];
  
  document.addEventListener('click', function() {
    // Check if AudioContext is supported
    if (window.AudioContext || window.webkitAudioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      
      // Get random ukulele note
      const note = ukuleleSounds[Math.floor(Math.random() * ukuleleSounds.length)];
      
      // Convert note to frequency
      const getFrequency = (note) => {
        const notes = {'C': 261.63, 'D': 293.66, 'E': 329.63, 'F': 349.23, 'G': 392.00, 'A': 440.00, 'B': 493.88};
        const octave = parseInt(note.slice(-1));
        const noteName = note.slice(0, -1);
        return notes[noteName] * Math.pow(2, octave - 4);
      };
      
      // Create ukulele-like sound
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'triangle';
      oscillator.frequency.value = getFrequency(note);
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 1.5);
    }
  });
}); 