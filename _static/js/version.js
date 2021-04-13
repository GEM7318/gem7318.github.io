/* Hide 'versions' dropdown when user reaches bottom of page */
window.onscroll = function(ev) {
    const elements = document.getElementsByClassName("rst-versions rst-badge");
    const has_elements = elements.length > 0
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        if (has_elements) {
            elements[0].style.display = 'none'
        }
    } else {
        if (has_elements) {
            elements[0].style.display = 'initial'
        }
    }
};
