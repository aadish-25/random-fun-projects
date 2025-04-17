function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function getRandomSize() {
    const size = Math.floor(Math.random() * 101) + 200;
    return `${size}px`;
}

const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    let clientX = e.clientX; // position of click
    let clientY = e.clientY; // position of click 
    // console.log(`You clicked at ${windowX}, ${windowY}`)

    const rect = container.getBoundingClientRect()
    // returns an obj that gives the position of the container wrt viewport (is constant i.e doenst change)

    const circle = document.createElement('div');
    circle.style.border = `8px solid ${getRandomRGB()}`;
    const constantWidthHeight = getRandomSize();
    circle.style.width = `${constantWidthHeight}`
    circle.style.height = `${constantWidthHeight}`
    circle.style.borderRadius = "50%"
    circle.style.position = "absolute"

    circle.style.top = `${clientY - rect.top}px`
    circle.style.left = `${clientX - rect.left}px`

    container.appendChild(circle)
})
