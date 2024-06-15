function toggleAboutMe() {
    const section = document.getElementById('about-me');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}
