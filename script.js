// ComfortFlex Brasil™

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

```
    const target = document.querySelector(this.getAttribute('href'));

    if(target){
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
```

});

// Efeito simples nos botões
document.querySelectorAll('.cta-button').forEach(button => {

```
button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.03)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
});
```

});

// Mensagem no console
console.log("ComfortFlex Brasil™ carregada com sucesso!");
