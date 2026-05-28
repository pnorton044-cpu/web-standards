
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loader-hidden');
        }
    }, 2500); 
});


const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


const clickables = document.querySelectorAll('a, .view-menu-btn, .student-link');
clickables.forEach(item => {
    item.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});


const magneticBtn = document.querySelector('.view-menu-btn');

if (magneticBtn) {
    magneticBtn.addEventListener('mousemove', (e) => {
        const rect = magneticBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px) scale(1.1)`;
    });

    magneticBtn.addEventListener('mouseleave', () => {
        magneticBtn.style.transform = `translate(0px, 0px) scale(1)`;
    });
}


window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loader-hidden');
            console.log("Order up! Ingredients prepared.");
        }
    }, 3000); 
});


