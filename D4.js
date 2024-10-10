/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(altezza, lunghezza){
    
    console.log(altezza*lunghezza);
}
area(11, 12);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(int1, int2){
    const summed = int1 + int2
    if(summed === int1 || summed === int2){
        
        console.log(summed*3);
        
    }else{
        
        console.log(summed);
        
    }
}

crazySum(11, 12);
    

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num, num1 = 19){
    const absolute = Math.abs(num);
    const diff = absolute - num1;
    if(num > 19){
        console.log(diff*3);
    }else{
        console.log(diff);
    };
}

crazyDiff(5);


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundry(n){
    if( (n < 100 && n > 20) || n === 400){
        console.log(true);
    }else{
        console.log(false);
    }
};
boundry(36)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*function epify(scritta){
    if (epify.splice(0, 1) === "Epicode"){
        console.log(scritta);
    }else{
        console.log("Epicode" + scritta);
    }
}
epify("Epicode Education");
*/
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(positivo){
    if(positivo % 3){
        console.log("Il numero è multiplo di 3");
    }else if(positivo % 7){
        console.log("Il numero è multiplo di 7");
    }else{
        console.log("Il numero non è multiplo nè di 3 nè di 7");
    }
};
check3and7(12);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    
}
reverseString("EPICODE");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(stringa){
    const maiuscolo = ucFirst(stringa);
    console.log(maiuscolo);
    
}

upperFirst("epicode education online school");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
