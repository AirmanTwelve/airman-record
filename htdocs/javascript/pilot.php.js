document.querySelectorAll('tr.main-row').forEach(header => {
    header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);
    });

    header.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            header.click();
        }
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const expand = urlParams.get('expand');

    if (expand) {
        console.log(expand);
        header.click();
    }
});