document.addEventListener('DOMContentLoaded', function() {
    const changeTextButton = document.getElementById('changeTextBtn');
    const changeableText = document.getElementById('changeableText');

    changeTextButton.addEventListener('click', function() {
        changeableText.textContent = 'Text Changed!';
    });
});
