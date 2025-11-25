document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.cambia-colore');
  if (!btn) return;

  // Al click alterna la classe 'active' e cambia il testo
  btn.addEventListener('click', function() {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
      btn.textContent = 'Colore cambiato';
    } else {
      btn.textContent = 'Cambia colore';
    }
  });
});

// Funzione per gestire il form
document.addEventListener('DOMContentLoaded', function() {
    const nome = document.getElementById('nome');
    const cognome = document.getElementById('cognome');
    const email = document.getElementById('email');
    const immagine = document.getElementById('immagine');

    const btn = document.querySelector('.genera-persona');
    // display
    btn.addEventListener('click', function() {
        const nuovoHTML = document.getElementById('nuovoHTML');
        nuovoHTML.innerHTML = '<h2>Utente Generato</h2>' +
                            '<p>Nome: ' + nome.value + '</p>' +
                            '<p>Cognome: ' + cognome.value + '</p>' +
                            '<p>Email: ' + email.value + '</p>' +
                            '<p>Immagine: <img src="' + immagine.value + '" alt="Immagine Utente" width="100"></p>';
    });
});