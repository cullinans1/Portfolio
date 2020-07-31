window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#ffffff'], 
    connectParticles: true,

    //break point for mobile
    responsive: [
        {
            breakpoint: 575,
            options: {
                maxParticles: 50,
            }
        }
    ]
  });
};