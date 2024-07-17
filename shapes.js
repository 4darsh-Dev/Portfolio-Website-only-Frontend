function animateShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        // Set initial position
        // setPosition(shape);
        
        // Animate
        animateShape(shape);
    });
}



function setPosition(element) {
    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    element.style.position = 'absolute';
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}


function animateShape(element) {
    const animationDuration = 15 + Math.random() * 10; // Between 15 and 25 seconds
    const xDistance = Math.random() * 100 - 50; // Move between -50px and 50px horizontally
    const yDistance = Math.random() * 100 - 50; // Move between -50px and 50px vertically

    // Get the current position from the element's style
    const startX = parseFloat(element.style.left) || 0;
    const startY = parseFloat(element.style.top) || 0;

    const endX = startX + xDistance;
    const endY = startY + yDistance;

    element.animate([
        { transform: `translate(${0}px, ${0}px)` },
        { transform: `translate(${xDistance}px, ${yDistance}px)` }
    ], {
        duration: animationDuration * 1000,
        easing: 'ease-in-out',
        iterations: Infinity,
        direction: 'alternate'
    });
}
// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', animateShapes);