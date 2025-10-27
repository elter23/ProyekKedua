document.addEventListener('DOMContentLoaded', function() {
    var btnChar = document.querySelector('.btn');
    if (btnChar) {
        btnChar.addEventListener('click', function() {
            window.location.replace("../html/select-character.html");
        });
    }
    var btnBack = document.querySelector('.btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', function() {
            window.location.replace("../html/index.html");
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var charItem = document.getElementById('characteritem');
    if (charItem) {
        charItem.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.replace("../html/character-detail.html");
        });
    }
});