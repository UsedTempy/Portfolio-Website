function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.content', -.2);
});

link2.addEventListener('click', () => {
    scrollToElement('.header');
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.header');
});

const cvButton = document.getElementById('cvLink');
cvButton.addEventListener('click', function() {
    const cvLink = "https://usedtempy.github.io/Portfolio-Website/utils/CVTest.pdf";
    window.open(cvLink, '_blank')
  });