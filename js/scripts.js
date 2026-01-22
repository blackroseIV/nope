particlesJS("particles-js", {
  "particles": {
    "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#6366f1" }, /* Azul do site */
    "shape": { "type": "circle" },
    "opacity": { 
      "value": 0.6, 
      "random": true, 
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } 
    },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#6366f1", /* Linhas azuis */
      "opacity": 0.3,
      "width": 1
    },
    "move": { 
      "enable": true, 
      "speed": 1.5, 
      "direction": "none", 
      "random": true, 
      "out_mode": "out" 
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { 
        "distance": 250, 
        "line_linked": { 
            "opacity": 1,
            "color": "#ffffff" 
        } 
      }
    }
  },
  "retina_detect": true
});