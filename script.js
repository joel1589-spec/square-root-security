document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    // 1. Gestion du menu mobile (Burger Menu)
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            // Bascule la classe 'is-open' sur la navigation
            nav.classList.toggle('is-open');

            // Change l'icône du bouton (burger <-> croix)
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('is-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Validation simple du formulaire de contact (à implémenter dans contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const emailInput = document.getElementById('email');
            
            if (!emailInput.value.includes('@')) {
                e.preventDefault(); // Empêche l'envoi du formulaire
                alert("Veuillez entrer une adresse email valide.");
                emailInput.focus();
            } else {
                // Pour un site statique hébergé sur GitHub Pages, 
                // vous NE POUVEZ PAS traiter le formulaire directement avec JS.
                // Il faudra utiliser un service tiers comme Formspree ou Netlify Forms.
                // Si vous utilisez Formspree, mettez : contactForm.action = "https://formspree.io/f/votrecode";
                // Et contactForm.method = "POST";
            }
        });
    }
});