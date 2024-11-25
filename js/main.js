document.addEventListener('DOMContentLoaded', function () {
    // Verifica o estado preferido de modo escuro do usuário no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }

    // Alterna entre light e dark mode
    document
        .getElementById('toggle-dark-mode')
        .addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');
        })
})