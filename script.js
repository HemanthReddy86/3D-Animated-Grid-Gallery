// Particle Bckground Animation
function createParticles() {
   const particlesContainer = document.getElementById('particles');
   const particleCount = window.innerWidth < 768 ? 30 : 50;

   for (let i = 0; i < particleCount; i++) {
       const particle = document.createElement('div');
       particle.classList.add('particle');
    
       //Random properties for each particle
       const size = Math.random() * 5 + 2; // Size between 2px and 7px
       const posX = Math.random() * window.innerWidth;
       const posY = Math.random() * window.innerHeight;
       const delay = Math.random() * 5; // Delay between 0s and 5s
       const duration = Math.random() * 10 + 10 // Duration between 5s and 10s
       const opacity = Math.random() * 0.5 + 0.1 // Opacity between 0.5 and 1

       //Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`; 
        particle.style.opacity = opacity;
        particle.style.animation = `float ${duration}s ease-in-out infinite ${delay}s infinite alternate`;

        particlesContainer.appendChild(particle);
   }
}

// initialize particles on load

window.addEventListener("load", createParticles);

// Recreate particles on resize

window.addEventListener("resize", () => {
    document.getElementById("particles").innerHTML = "";
    createParticles();
})