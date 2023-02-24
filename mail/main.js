'use script';

const request = prompt('Inserisci il tuo indirizzo email per accedere:');

const rubricaEmail = ['matteo@GainNode.it', 'caino@abele.com', 'andrea@lino.it', 'rarod@dif.com', 'glenn@sturgis.com'];

for (let i = 0; i < rubricaEmail.length; i++) {
    console.log(rubricaEmail[i]);

    
    if ( rubricaEmail[i] === request ) {

        alert('benvenuto nel nostro servizio');

        break;

    } else if (rubricaEmail[i] !== request && i == (rubricaEmail.length - 1))

        alert('riprova, hai sbagliato email');
    
};
