import firebase from '../config/firebase'

module.exports = {
    nova: (data) => {
        const pushAtividade = firebase.database().ref('atividades').push();
        pushAtividade.set(data)
        return true; //Para um controle futuro do fluxo de dados
    }
};