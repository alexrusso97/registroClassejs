// Inizializza il registro dal localStorage o crea uno nuovo
const registro = new RegistroClasse();

// Aggiorna l'elenco degli studenti nel DOM
function aggiornaElencoStudenti() {
    // Ottiene l'elemento <ul> con l'id 'elencoStudenti' dal DOM
    const elencoStudenti = document.getElementById('elencoStudenti');
    // Resetta il contenuto dell'elemento, in modo che sia vuoto
    elencoStudenti.innerHTML = '';

    // Itera attraverso la lista degli studenti nel registro
    registro.studenti.forEach(studente => {
        // Crea un nuovo elemento <li> per ciascuno studente
        const listItem = document.createElement('li');
        // Aggiunge il testo al <li> contenente il nome, cognome e ID dello studente
        listItem.textContent = `${studente.nome} ${studente.cognome} (ID: ${studente.id})`;
        // Aggiunge l'elemento <li> alla lista <ul>
        elencoStudenti.appendChild(listItem);
    });

    // Salva il registro nel localStorage
    localStorage.setItem('registro', JSON.stringify(registro));
}

// Funzione per aggiungere uno studente dalla form
function aggiungiStudente() {
    // Ottiene i valori dei campi input dal form
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;

    // Chiama il metodo aggiungiStudente della classe RegistroClasse
    // per aggiungere uno studente con i valori forniti
    registro.aggiungiStudente(parseInt(id), nome, cognome);

    // Chiama la funzione per aggiornare l'elenco degli studenti nel DOM
    aggiornaElencoStudenti();
}

// Al caricamento della pagina, recupera il registro dal localStorage
document.addEventListener('DOMContentLoaded', () => {
    // Ottiene il riferimento al form di aggiunta dal DOM
    const formAggiungi = document.getElementById('formAggiungi');
    
    // Aggiunge un event listener per l'evento di submit del form
    formAggiungi.addEventListener('submit', function (event) {
        event.preventDefault();  // Evita il comportamento predefinito del form
        aggiungiStudente();      // Chiama la funzione di aggiunta studente
        formAggiungi.reset();    // Pulisce i campi del form
    });

    // Recupera il registro dal localStorage
    const registroSalvato = localStorage.getItem('registro');
    // Se ci sono dati salvati, li assegna al registro
    if (registroSalvato) {
        Object.assign(registro, JSON.parse(registroSalvato));
    }

    // Chiama la funzione per aggiornare l'elenco degli studenti nel DOM
    aggiornaElencoStudenti();
});