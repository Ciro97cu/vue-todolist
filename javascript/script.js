/* Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

// my array
const toDo = [

    {
        text: "Fare la spesa",
        done: false,
    },
    {
        text: "Fare una passeggiata",
        done: false,
    },
    {
        text: "Leggere un libro",
        done: false,
    },
    {
        text: "Andare in palestra",
        done: false,
    },
    {
        text: "Giocare a Elden Ring",
        done: false,
    }

]

const app = new Vue({
    el: "#app",
    data: {
        toDo,
        // my input value
        newToDo: "",
    },
    methods: {
        // funzione per aggiungere la classe line-trough in base al valore della booleana done
        lineTrought: function (index) {
            return this.toDo[index].done ? "text-decoration-line-through" : "";
        },
        // funzione per rimuovere una task dalla lista
        removeToDo: function (doneIndex) {
            this.toDo.splice(doneIndex, 1);
        },
        // funzione per aggiungere con l'input una nuova task
        addTask: function () {
            if (this.newToDo.length !== 0) {
                this.toDo.push({
                    text: this.newToDo,
                    done: false,
                });
            }
            // resetto l'input una volta aggiunta la task
            this.newToDo = "";
        },
        // funzione per invertire il valore della booleanadone
        invertDone: function (index) {
            if (this.toDo[index].done) {
                this.toDo[index].done = false;
            } else {
                this.toDo[index].done = true;
            }
        }
    }
});