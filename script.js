let i = 0;
const texts = [
    'animated', 
    'generative', 
    'interactive',
    'art',     
    '3d', 
];

function updateHeadermin() {
    const textElement = document.getElementById('headermin');
    
    textElement.style.transform = 'translateY(100%)';
    textElement.style.opacity = '0';
    
    setTimeout(() => {
        textElement.textContent = texts[i];
        i = (i + 1) % texts.length;
        
        textElement.style.transform = 'translateY(-100%)';
        textElement.style.opacity = '0';
        
        setTimeout(() => {
            textElement.style.transform = 'translateY(0)';
            textElement.style.opacity = '1';
        }, 50);
    }, 500);
}

setInterval(updateHeadermin, 2000);