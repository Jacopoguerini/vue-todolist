/*Descrizione:
Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
- testo
- "completed", un booleano settato inizialmente a false.
Stampare in pagina un item per ogni elemento della to-do list.
Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
BONUS:
Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).*/


var app = new Vue ({
    el: "#root",
    data: {
        toDrinkList: [
            {
            text: "Long Jing",
            completed: false
            },
            {
            text: "Shui Xian",
            completed: false
            },
            {
            text: "Fenghuang Dan Cong",
            completed: false
            },
            {
            text: "Anji Bai Cha",
            completed: false
            },
            {
            text: "Kabusecha",
            completed: false
            },
            {
            text: "Jin Jun Mei",
            completed: false
            },
            {
            text: "Tai Ping Hou Kui",
            completed: false
            }
        ]
    }
})
