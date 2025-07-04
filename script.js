const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.onclick = function() {
        document.querySelectorAll('.button').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    };
});