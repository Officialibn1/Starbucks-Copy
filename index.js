const openBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('toggleBtnClose');

const navBar = document.getElementById('mobileNavLinks');

openBtn.addEventListener('click', () => {
    navBar.style.right = '0';
});

closeBtn.addEventListener('click', () => {
    navBar.style.right = '-20rem';
});

const mobileLinks = document.querySelectorAll('#mobileLink');

for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', () => {
        navBar.style.right = '-20rem';
    });
}

