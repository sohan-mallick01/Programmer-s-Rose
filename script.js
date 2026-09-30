document.addEventListener("DOMContentLoaded", () => {
  const ring = document.getElementById("goldenRing");
  const glow = document.getElementById("ambientGlow");
  const rose = document.getElementById("roseHead");
  const stem = document.getElementById("stem");
  const sepals = document.getElementById("sepalsGroup");
  const sparklesContainer = document.getElementById("sparkles");

  const messageBox = document.getElementById("messageBox");
  const line1El = document.getElementById("typeLine1");
  const line2El = document.getElementById("typeLine2");

  const textLine1 = "Some flowers can be bought, some eventually fade...";
const textLine2 = "This one is coded to stay with you, always !💕";

  // Typewriter effect function
  function typeWriter(element, text, speed, callback) {
    let index = 0;
    element.classList.add("typing-cursor");
    const timer = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;
      if (index >= text.length) {
        clearInterval(timer);
        element.classList.remove("typing-cursor");
        if (callback) callback();
      }
    }, speed);
  }

  // Sparkling light embers around arch and rose
  function createSparkles() {
    const coords = [
      { x: 130, y: 130, size: 4 },
      { x: 390, y: 130, size: 4 },
      { x: 70,  y: 260, size: 3.5 },
      { x: 440, y: 260, size: 3.5 },
      { x: 260, y: 70,  size: 5 },
      { x: 190, y: 390, size: 3 },
      { x: 330, y: 390, size: 3 }
    ];

    coords.forEach((c, idx) => {
      const dot = document.createElement("div");
      dot.className = "sparkle-dot";
      dot.style.left = `${c.x}px`;
      dot.style.top = `${c.y}px`;
      dot.style.width = `${c.size}px`;
      dot.style.height = `${c.size}px`;
      dot.style.animationDelay = `${(idx * 0.22).toFixed(2)}s`;
      sparklesContainer.appendChild(dot);
    });
  }

  // TIMELINE EXECUTION:
  // 1. Golden Circular Arch draws (0.2s)
  setTimeout(() => {
    ring.classList.add("animate");
  }, 200);

  // 2. Stem, Thorns & Sepals extend downward (1.8s)
  setTimeout(() => {
    stem.classList.add("active");
    sepals.classList.add("active");
  }, 1800);

  // 3. Rose Cup Blooms in 3D Perspective + Aura + Dedication Typing (3.0s)
  setTimeout(() => {
    rose.classList.add("bloom");
    glow.classList.add("active");

    // Message reveals and starts typing
    messageBox.classList.add("show");
    typeWriter(line1El, textLine1, 55, () => {
      setTimeout(() => {
        typeWriter(line2El, textLine2, 60);
      }, 250);
    });
  }, 3300);

  // 4. Shimmering Stardust / Embers appear (3.8s)
  setTimeout(() => {
    createSparkles();
  }, 3800);
});