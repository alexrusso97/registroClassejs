class RegistroClasse {
  constructor() {
    this.studenti = [];
  }

  // Funzione per aggiungere uno studente al registro
  aggiungiStudente(id, nome, cognome) {
    // Verifica se l'id è univoco prima di aggiungere lo studente
    if (this.studenti.some(studente => studente.id === id)) {
      console.log('ID già in uso. Scegliere un ID univoco.');
      return;
    }

    const nuovoStudente = {
      id,
      nome,
      cognome,
      voti: [],
    };
    this.studenti.push(nuovoStudente);
    console.log('Studente aggiunto al registro.');
  }

  // Funzione per aggiungere un voto a uno studente
  aggiungiVoto(id, voto, data, descrizione) {
    const studente = this.trovaStudentePerId(id);
    if (studente) {
      const nuovoVoto = { voto, data, descrizione };
      studente.voti.push(nuovoVoto);
      console.log('Voto aggiunto allo studente.');
    } else {
      console.log('Studente non trovato.');
    }
  }

  // Funzione per visualizzare i dati di uno studente
  visualizzaDatiStudente(id) {
    const studente = this.trovaStudentePerId(id);
    if (studente) {
      console.log(`ID: ${studente.id}, Nome: ${studente.nome}, Cognome: ${studente.cognome}, Voti: ${JSON.stringify(studente.voti, null, 2)}`);
    } else {
      console.log('Studente non trovato.');
    }
  }

  // Funzione per modificare i dati di uno studente
  modificaDatiStudente(id, nuoviDati) {
    const studente = this.trovaStudentePerId(id);
    if (studente) {
      Object.assign(studente, nuoviDati);
      console.log('Dati studente aggiornati.');
    } else {
      console.log('Studente non trovato.');
    }
  }

  // Funzione per rimuovere uno studente dal registro
  rimuoviStudente(id) {
    this.studenti = this.studenti.filter(studente => studente.id !== id);
    console.log('Studente rimosso dal registro.');
  }

  // Funzione privata per trovare uno studente nel registro per ID
  trovaStudentePerId(id) {
    return this.studenti.find(studente => studente.id === id);
  }
}