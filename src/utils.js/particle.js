// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Background configuration
    background: {
      color: {
        value: "#181818", // Background color
      },
    },
    
    // Frame per second limit
    fpsLimit: 120,
  
    // Interaction configuration
    interactivity: {
      events: {
        // Click interaction
        onClick: {
          enable: true,
          mode: "push",
        },
        
        // Hover interaction
        onHover: {
          enable: true,
          mode: "repulse",
        },
        
        // Window resize interaction
        resize: true,
      },
      
      // Interaction modes
      modes: {
        // Push mode configuration
        push: {
          quantity: 4,
        },
        
        // Repulse mode configuration
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    
    // Particle configuration
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      
      links: {
        color: "#ffffff", // Link color
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Number of particles
      },
      
      opacity: {
        value: 0.5, // Particle opacity
      },
      
      shape: {
        type: "circle", // Particle shape
      },
      
      size: {
        value: { min: 1, max: 5 }, // Particle size range
      },
    },
    
    // Retina display detection
    detectRetina: true,
  };
  