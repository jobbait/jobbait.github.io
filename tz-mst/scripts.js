const _header = document.querySelector(".header");
if (_header) {
    window.addEventListener('scroll', event => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        _header.classList.toggle('_scroll', scrollTop >= height);
    });
}