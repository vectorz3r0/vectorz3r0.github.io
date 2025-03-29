/* headermin text update function */
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
    textElement.textContent = texts[i];
    
    i++;
    if (i >= texts.length) {
        i = 0;
    }
}
setInterval(updateHeadermin, 1000);