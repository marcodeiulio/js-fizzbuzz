console.log('Paperella aiutami tu');

/*
* Consegna:

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

* Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

* Passaggi

# Conta da 1 a 100
# Aggiungi un if che scriva Fizz al posto di numeri che, divisi per 3, diano resto 0
# Aggiungi altro if che scriva Buzz al posto di numeri che, divisi per 5, diano resto 0
# Aggiungi altro if che scriva FizzBuzz al posto di numeri che, divisi sia per 5 che per 3, diano resto 0
*/


for (let i = 1; i <= 100; i++) {
	if (!(i % 3) && !(i % 5)) {
		console.log("FizzBuzz");
	}
	else if (!(i % 3)) {
		console.log("Fizz");
	}
	else if (!(i % 5)) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}

